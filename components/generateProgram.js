var operations = {
    click: function(xPath){
        const domElement = document.evaluate(xPath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
        console.log("domElement", domElement);
        domElement.click();
    },
    print: function(xPath){
        const domElement = document.evaluate(xPath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
        const text = domElement.textContent;
        console.log("printed value", text);
    }
}

// From https://stackoverflow.com/questions/55992698/set-a-delay-between-each-click-in-loop
// Delay function that will resolve a promise after the setTimeout delay has been passed.
function delayFor(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

// INPUT
    // program - result from generateProgramAndIdentifyNeededDemos
    // paramValuePairings - { param: value } to plug into program
export async function executeProgram(program, paramValuePairings){
    for(let programStep of program){
        let xPath;
        if(programStep.targetXPath){
            // Concrete xPath to perform operation on
            xPath = programStep.targetXPath;
        }else if(programStep.relevantParam){
            // Need to execute function with param value to get xPath
            let relevantParam = programStep.relevantParam;
            xPath = programStep.generalizedXPathFunction(paramValuePairings[relevantParam]);
        }else{
            let paramValueForRow = paramValuePairings[programStep.relevantParamForRow];
            let paramValueForCol = paramValuePairings[programStep.relevantParamForCol];
            xPath = programStep.generalizedXPathFunction(paramValueForRow, paramValueForCol);
        }

        // Should throw an error if no xpath found, etc

        // Perform operation on xPath
        if(operations[programStep.eventType]){
            await delayFor(3000); // Let's wait 1000ms between each click
            operations[programStep.eventType](xPath);
        }
    }
}

function getTagClassesAttributes(element){
    const classes = element.classList;

    const attributes = element.attributes; // should we ignore 'class' and 'style'? prob not necessary for now

    // This code is causing problems, because it's causing the DOM to change
    /*if(attributes['class']){
        attributes.removeNamedItem('class');
    }
    if(attributes['style']){
        attributes.removeNamedItem('style');
    }*/

    const tag = element.tagName.toLowerCase();

    return {
        tag,
        classes,
        attributes
    };
}

function computeSimilarityVector(element1, element2){
    // For now, just comparing the elements but not their descendants.
    /*
        - Number of classes that are the same
        - Number of classes that are different
        - Number of attributes that are the same
        - Number of attributes that are different
        - For common attributes, number of attribute values that are the same
        - For common attributes, number of attribute values that are the different -- maybe this shouldn't be penalized? Not sure
        (Maybe don't need to include "differences" in the weighting, just things that are the same? Nvm, should prob include both)
        - Same or different tag
            - Should these be considered differently? Like given a heavier or lesser weight?
            - Should we look for the most popular tag and then only compute metrics using those?

    */

    const element1Data = getTagClassesAttributes(element1);
    const element2Data = getTagClassesAttributes(element2);
    
    let similarityVector;

    // Compare tag
    let sameTagScore = (element1Data.tag === element2Data.tag) ? 1 : -1;

    // Compare classes
    let sameClassesScore = 0;
    let diffClassesScore = 0;

    // Check if num classes is 0 for one of the elements (if so, have to compute differently)
    if(element1Data.classes.length === 0){
        sameClassesScore = 0;
        diffClassesScore = element2Data.classes.length;
    }else{
        for(let className of element1Data.classes){
            if(element2Data.classes.contains(className)){
                sameClassesScore += 1;
            }
        }
    
        diffClassesScore = element1Data.classes.length + element2Data.classes.length - 2 * sameClassesScore;    
    }

    // Compare attributes
    let sameAttributesScore = 0;
    let diffAttributesScore = 0;

    // Check if num attributes is 0 for one of the elements (if so, have to compute differently)
    if(element1Data.attributes.length === 0){
        sameAttributesScore = 0;
        diffAttributesScore = element2Data.attributes.length;
    }else{
        for(let attr of element1Data.attributes){
            if(element2Data.attributes[attr.name]){
                sameAttributesScore += 1;
            }
        }
    
        diffAttributesScore = element1Data.attributes.length + element2Data.attributes.length - 2 * sameAttributesScore;    
    }
    
    // Compare attribute values (i.e., for attributes they have in common)
    let sameAttributeValuesScore = 0;
    let diffAttributeValuesScore = 0;

    if(element1Data.attributes.length > 0 && element2Data.attributes.length > 0){
        for(let attr of element1Data.attributes){
            if(element2Data.attributes[attr.name]){
                // Check if the attribute values are the same
                if(attr.value === element2Data.attributes[attr.name].value){
                    sameAttributeValuesScore += 1;
                }else{
                    diffAttributeValuesScore += 1;
                }
            }
        }
    }

    // Should it not be just a single sum? Instead, should it be a vector? And then we can compute similarity 
    similarityVector = {
        sameTagScore,
        sameClassesScore,
        diffClassesScore,
        sameAttributesScore,
        diffAttributesScore,
        sameAttributeValuesScore,
        diffAttributeValuesScore
    };

    return similarityVector;
}

// Given that the user has interacted with eventTargetXPath (likely a leaf node or close to it),
    // find its ancestors that are the most likely semantic rows/sections
function getSiblingSimilarityScores(eventTargetXPath){
    var targetElement = document.evaluate(eventTargetXPath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);

    // Starting at this level, and then for each level up until the top of the HTML DOM tree, calculate the likeliness score for each level (i.e., each set of siblings)
    var ancestorNode = targetElement;
    var levelData = [];
    while(ancestorNode.parentNode){
        // For ancestorNode, compare it and its siblings and calculate a score for how similar they are
        var siblingNodes = ancestorNode.parentNode.children;
        var levelScore = 0;
        for(var index1 = 0; index1 < siblingNodes.length - 1; index1++){
            for(var index2 = index1 + 1; index2 < siblingNodes.length; index2++){
                var node1 = siblingNodes[index1];
                var node2 = siblingNodes[index2];
                var similarityVector = computeSimilarityVector(node1, node2);
                levelScore += similarityVector.sameTagScore + (similarityVector.sameClassesScore - similarityVector.diffClassesScore) + (similarityVector.sameAttributesScore - similarityVector.diffAttributesScore) + (similarityVector.sameAttributeValuesScore - similarityVector.diffAttributeValuesScore);
            }
        }
        levelData.push({
            levelParent: ancestorNode.parentNode,
            siblingNode: ancestorNode,
            levelScore
        });

        ancestorNode = ancestorNode.parentNode;
    }
    
    return levelData;
}

function getLikelyRowsColumns(eventTargetXPath){
    // levelData an array containing objects of the form { levelParent, siblingNode, levelScore }
    // first item in the array is for deepest level (eventTargetXPath), last item is for outermost level (e.g., <html>)
    var levelData = getSiblingSimilarityScores(eventTargetXPath);

    // Get the 2 positive scores within 0-5
        // If only 1, then use that as rows;
        // If 2, use inner one as cols and outer one as rows;
        // If more than 2, use the 2 deepest.

    // Consider only items 0 through 5 in levelData
    var indicesWithPositiveScore = [];
    for(var i = 0; i <= 5; i++){
        //if(levelData[i].levelScore > 0){
        if(levelData[i].levelScore > 20){
            indicesWithPositiveScore.push(i);
        }
    }

    var rowData;
    var colData;

    if(indicesWithPositiveScore.length === 1){
        rowData = levelData[indicesWithPositiveScore[0]];
        rowData.levelIndex = indicesWithPositiveScore[0];

        colData = null;
    }else if(indicesWithPositiveScore.length === 2 || indicesWithPositiveScore.length > 2){
        
        // Sort indicesWithPositiveScore by score, descending order
        indicesWithPositiveScore.sort(function(a, b){
            return levelData[b].levelScore - levelData[a].levelScore;
        });

        // Consider first 2 indices in indicesWithPositiveScore
        var innerIndex = Math.min(indicesWithPositiveScore[0], indicesWithPositiveScore[1]);
        var outerIndex = Math.max(indicesWithPositiveScore[0], indicesWithPositiveScore[1]);
        
        // Outer level
        rowData = levelData[outerIndex];
        rowData.levelIndex = outerIndex;

        // Inner level
        colData = levelData[innerIndex];
        colData.levelIndex = innerIndex;
    }else{
        rowData = null;
        colData = null;
    }

    return {
        rowData,
        colData
    }
}

function getCommonPrefixLength(str1, str2){    
    let longestLength = 0;
    const shorterStrLength = Math.min(str1.length, str2.length);
    for(let i = 0; i < shorterStrLength; i++){
        if(str1.charAt(i) === str2.charAt(i)){
            longestLength = i+1;
        }else{
            break;
        }
    }
    return longestLength;
}

// Adapted from https://developer.mozilla.org/en-US/docs/Web/XPath/Snippets
function getXPathForElement(el, xml) {
    var xpath = '';
    var pos, tempitem2;

    while(el !== xml.documentElement) {
        pos = 0;
        tempitem2 = el;
        while(tempitem2) {
            if (tempitem2.nodeType === 1 && tempitem2.nodeName === el.nodeName) { // If it is ELEMENT_NODE of the same name
                pos += 1;
            }
            tempitem2 = tempitem2.previousSibling;
        }

        //xpath = "*[name()='"+el.nodeName+"' and namespace-uri()='"+(el.namespaceURI===null?'':el.namespaceURI)+"']["+pos+']'+'/'+xpath;
        xpath = el.nodeName+"["+pos+']'+'/'+xpath;
        el = el.parentNode;
    }
    //xpath = '/*'+"[name()='"+xml.documentElement.nodeName+"' and namespace-uri()='"+(el.namespaceURI===null?'':el.namespaceURI)+"']"+'/'+xpath;
    xpath = "/"+xml.documentElement.nodeName+'/'+xpath;
    xpath = xpath.replace(/\/$/, '');
    xpath = xpath.toLowerCase();
    return xpath;
}

// INPUT
    // demoEventSequence - an ordered list of event objects (for now, simplified to include only xpath of target element and the event type (for now, we'll assume only click events))
    // paramValueObj - a mapping from param name to values object; a values object is a mapping from value strings to corresponding xpath (if known)
    // currentParamValuePairings - for the current demo, the param-to-value pairings

// RETURNS a program (format tbd), and a list of params/values that need a demo (because the desired behavior unknown based on the single provided demo)

/* ASSUMPTIONS:
    - no noise in event sequence
    - program doesn't require conditional logic (?)
    - click events only (for now)
    - [no longer; kind of support this now] param value xpath's directly correspond to "click" target elements;
        important to see if this is true (if it isn't, then we'll need to determine which value the event corresponds to which could be a bit tricky, and then we'll also need to reverse-engineer a rule for this relationship, so that given an input value we can figure out which element to click)
    - [not sure, look into this] xPaths in event sequence are concrete or are directly dependent on a parameter. Assuming that it is not an INDIRECT relationship (that would be hard/impossible to infer with a single demo; could be possible to infer with a hint or second demo)
    - target element xPaths are closer to their relevant value xPaths than to other param/value xPaths
    - a given event is determined by at most 1 param (e.g., not 2 params, etc)
    - starting page state; assumes no previous clicks/interactions on page that could've changed state
    - will have extremely limited conditional logic
*/
export function generateProgramAndIdentifyNeededDemos(demoEventSequence, currentParamValuePairings, paramValueObj){
    var program = []; // a sequence of functions/operations?
    var neededDemos = []; // a list of params/values that we don't know how to support yet
    for(let eventIndex = 0; eventIndex < demoEventSequence.length; eventIndex++){
        let eventObj = demoEventSequence[eventIndex];
        // Figure out if this event corresponds to a certain param/value
            // Assume eventObj is of the form {targetXPath, eventType}; for now, assume "eventType" is just a click; key events will be a bit trickier (will have to group them and identify final value)
        
        // See if eventObj.targetXPath corresponds to a param/value in paramValueObj
        let matchingParam;
        let matchingValue;
        let longestCommonPrefixLengthSoFar = 0;
        let paramValuesLongestCommonPrefixLengthSoFar = {};
        for(let [param, valueObj] of Object.entries(paramValueObj)){
            for(let [value, xPath] of Object.entries(valueObj)){
                if(xPath){ // because could be null/undefined
                    var commonPrefixLength = getCommonPrefixLength(xPath, eventObj.targetXPath);
                    if(commonPrefixLength > longestCommonPrefixLengthSoFar){
                        longestCommonPrefixLengthSoFar = commonPrefixLength;
                        paramValuesLongestCommonPrefixLengthSoFar = {}
                        paramValuesLongestCommonPrefixLengthSoFar[param] = [value];
                    }else if(commonPrefixLength === longestCommonPrefixLengthSoFar){
                        paramValuesLongestCommonPrefixLengthSoFar[param] = paramValuesLongestCommonPrefixLengthSoFar[param] || [];
                        paramValuesLongestCommonPrefixLengthSoFar[param].push(value);
                    }
                }
                /*if(xPath === eventObj.targetXPath){
                    matchingParam = param;
                    matchingValue = value;
                    break;
                }*/
            }
        }
        
        // If only 1 param and 1 value that has longest common prefix (i.e., no ties), then identify those as matching param/value for this event
            // Otherwise, interpret as no relevant param/value for this event, that this event should just be replicated
        if(Object.keys(paramValuesLongestCommonPrefixLengthSoFar).length === 1){
            if(paramValuesLongestCommonPrefixLengthSoFar[Object.keys(paramValuesLongestCommonPrefixLengthSoFar)[0]].length === 1){
                // Check that matchingParam/matchingValue are in currentParamValuePairings
                if(currentParamValuePairings[Object.keys(paramValuesLongestCommonPrefixLengthSoFar)[0]] === paramValuesLongestCommonPrefixLengthSoFar[Object.keys(paramValuesLongestCommonPrefixLengthSoFar)[0]][0]){
                    matchingParam = Object.keys(paramValuesLongestCommonPrefixLengthSoFar)[0];
                    matchingValue = paramValuesLongestCommonPrefixLengthSoFar[matchingParam][0];
                }
            }
        }else{
            // Multiple params. Find matching params with 1 matching value only, and that are in currentParamValuePairings
            const potentialMatchingParams = [];
            for(let [param, values] of Object.entries(paramValuesLongestCommonPrefixLengthSoFar)){
                if(values.length === 1){
                    if(currentParamValuePairings[param] === values[0]){
                        potentialMatchingParams.push(param);
                    }
                }
            }
            // Only use if it's not ambiguous which param/value are relevant here
            if(potentialMatchingParams.length === 1){
                matchingParam = potentialMatchingParams[0];
                matchingValue = paramValuesLongestCommonPrefixLengthSoFar[matchingParam][0];
            }
        }
        /*for(let [param, valueObj] of Object.entries(paramValueObj)){
            for(let [value, xPath] of Object.entries(valueObj)){
                if(xPath === eventObj.targetXPath){
                    matchingParam = param;
                    matchingValue = value;
                    break;
                }
            }
        }*/
        if(matchingParam){
            // There exists a matching param/value. Now, generalize this.
            // For other values for this param, just use their xPaths. Or, if a certain value doesn't have an associated xpath noted down, add this param/value to the neededDemos list
            /*const generalizedXPathFunction = function(inputValue){
                // leverage paramValueObj[matchingParam]
                return paramValueObj[matchingParam][inputValue];
            };*/
            var origValueXPath = paramValueObj[matchingParam][matchingValue];
            var demoTargetXPath = eventObj.targetXPath;
            var xPathRelativeSuffixToInclude = demoTargetXPath.substring(longestCommonPrefixLengthSoFar);

            var xPathRelativeSuffixToRemove = origValueXPath.substring(longestCommonPrefixLengthSoFar);

            var generalizedXPathFunction = function(inputValue){
                // Want to use xPath prefix for the current value that's desired
                var valueXPath = paramValueObj[matchingParam][inputValue];
                //var xPathPrefixToUse = valueXPath.substring(0, longestCommonPrefixLengthSoFar);
                var indexOfSuffixToRemove = valueXPath.lastIndexOf(xPathRelativeSuffixToRemove);
                var xPathPrefixToUse = valueXPath.substring(0, indexOfSuffixToRemove);

                // Now tack on the end of the xPath to get the desired relative element
                var desiredTargetXPath = xPathPrefixToUse + xPathRelativeSuffixToInclude;
                console.log("desiredTargetXPath", desiredTargetXPath);
                return desiredTargetXPath;
            };

            program.push({
                eventType: eventObj.eventType,
                generalizedXPathFunction,
                relevantParam: matchingParam
            });

            // Check which values in paramValueObj[matchingParam] don't have an xPath, and add those to neededDemos
            // TODO - shouldn't just be checking if there is an xPath, but also if generalizedXPathFunction would work on it and if the return xPath is valid on the webpage
            const needsDemosValues = [];
            for(let value of Object.keys(paramValueObj[matchingParam])){
                if(!paramValueObj[matchingParam][value]){
                    needsDemosValues.push(value);
                }
            }
            if(needsDemosValues.length > 0){
                neededDemos.push({
                    param: matchingParam,
                    values: needsDemosValues,
                    relevantEventObj: eventObj, 
                    relevantEventIndex: eventIndex // we need a reference somehow, but this probably isn't ideal (because events could get inserted/removed from event sequence)
                });
            }
        }else{
            if(eventObj.eventType === "print"){
                // Use special heuristics for trying to identify rule for which element should be printed
                
                // Identify likely semantic rows/cols that this element is contained in that we can use to try to uncover patterns
                const rowColData = getLikelyRowsColumns(eventObj.targetXPath);

                if(rowColData.rowData){
                    // If certain parameters haven't been used yet in prior click/type events,
                    // see if in this print event the user was "filtering" by one of those parameters.
                    // Look for the parameter value as text in the row.
                    // If text is in the row for just 1 parameter, then infer that this is filtering.

                    // Check which parameters haven't been used in prior events
                    let paramsNotYetUsed = Object.keys(currentParamValuePairings);
                    for(let programStep of program){
                        if(programStep.relevantParam || programStep.relevantParamForRow || programStep.relevantParamForCol){
                            const relevantParam = programStep.relevantParam || programStep.relevantParamForRow || programStep.relevantParamForCol;
                            const indexOfParam = paramsNotYetUsed.indexOf(relevantParam);
                            paramsNotYetUsed.splice(indexOfParam, 1);
                        }
                    }

                    const rowElement = rowColData.rowData.siblingNode;
                    // Use text xpath query
                    const rowXPath = getXPathForElement(rowElement, document);
                    
                    // See for these params if their given values for this demo appear in the DOM in this row
                    const paramValuesFound = [];
                    if(paramsNotYetUsed.length > 0){
                        for(let paramName of paramsNotYetUsed){
                            let paramValue = currentParamValuePairings[paramName];

                            // Check if paramValue appears as text in this row
                            var nodesContainingTextValue = document.evaluate(`${rowXPath} //text()[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), \"${paramValue.toLowerCase()}\")] /..`, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                            if(nodesContainingTextValue.snapshotLength > 0){
                                paramValuesFound.push({
                                    paramName,
                                    paramValue,
                                    valueNode: nodesContainingTextValue.snapshotItem(0) // for now just using 1st match (probably only 1 match); but should we investigate this more?
                                });
                            }
                        }  
                    }
                    
                    // Create defaults (which will get overridden later as appropriate)
                    let generateRowXPathPrefix = function(inputValue){
                        // For now, return default
                        return rowXPath;
                    };
                    let generateColXPathSuffix = function(inputValue, rowXPathPrefix){
                        // For now, return default (the original printed item's xpath suffix that doesn't contain the row xpath)
                        return eventObj.targetXPath.substring(rowXPath.length);
                    }

                    let relevantParamForRow;
                    let relevantParamForCol;

                    if(paramValuesFound.length === 1){
                        // Infer that the user is trying to filter by paramValuesFound[0].paramValue
                        // Create a function that searches for a row that has the desired param value at this relative xpath suffix
                            // If multiple rows with this value, then for now choose the first one
                        
                        relevantParamForRow = paramValuesFound[0].paramName;
                        // Define generateRowXPathPrefix
                        const filterNodeXPath = getXPathForElement(paramValuesFound[0].valueNode, document);
                        const filterNodeXPathSuffix = filterNodeXPath.substring(rowXPath.length);
                        generateRowXPathPrefix = function(inputValue){
                            // Loop through the row siblings and find (the first one) that has inputValue at filterNodeXPathSuffix
                            const originalRowNode = document.evaluate(rowXPath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
                            const parentNode = originalRowNode.parentNode;
                            const siblingNodes = parentNode.children;
                            for(let node of siblingNodes){
                                const rowXPath = getXPathForElement(node, document);
                                const valueNodeToCheck = document.evaluate(`${rowXPath}${filterNodeXPathSuffix}`, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
                                if(valueNodeToCheck && valueNodeToCheck.textContent.toLowerCase() === inputValue.toLowerCase()){
                                    // Found the correct row
                                    return rowXPath;
                                }
                                //const valueNodeToCheck = document.evaluate(`${nodeXPath} //text()[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), \"${inputValue.toLowerCase()}\")] /..`, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
                            }
                            // If got to this point, means there was no match; should throw an error or use some default xpath
                            return null;
                        }
                    }else{
                        // TODO - Especially if paramValuesFound.length > 1, potentially tell users that you think they're filtering by some value,
                            // but that we're not sure which one, so show them the options and ask them which one

                    }

                    // TODO - Check if there's a column correspondence; i.e., that the current 'column' is selected based on a parameter
                        // aka figure out if there's a rule for which column to choose, or if it's always the same xpath suffix each time
                    
                    // If no explicit column data, then... for now, don't come up with a column rule? (that's not ideal, but don't see a better approach)

                    if(rowColData.colData){
                        // For each parameter, find the row that contains those parameters, and then get the number of columns.
                            // Then, compare this to the number of columns for our data row.
                            // Choose the parameter which the closest number of columns to the data row. Then, note the offset.

                        // Biggest common prefix among parameter xpaths. Then, get that parent element, and get the number of children it has
                        //currentParamValuePairings, paramValueObj
                        const paramNumColDataOptions = [];
                        for(let paramName of Object.keys(currentParamValuePairings)){
                            const paramValuesAndXPaths = paramValueObj[paramName];
                            const paramValues = Object.keys(paramValuesAndXPaths);
                            let commonPrefixLengthAmongstXPaths = undefined; // common prefix across all xpaths; ideally all param nodes should be siblings; if they aren't, then our algorithm here won't work well, we won't find the "cols" really
                            let rowPrefix;
                            for(let i = 0; i < paramValues.length-1; i++){
                                for(let j = i+1; j < paramValues.length; j++){
                                    if(paramValuesAndXPaths[paramValues[i]] && paramValuesAndXPaths[paramValues[j]]){
                                        const commonPrefixLength = getCommonPrefixLength(paramValuesAndXPaths[paramValues[i]], paramValuesAndXPaths[paramValues[j]]);
                                        //console.log(`commonPrefixLength ${i} ${j}`, commonPrefixLength);
                                        if(commonPrefixLengthAmongstXPaths === undefined || commonPrefixLength < commonPrefixLengthAmongstXPaths){
                                            commonPrefixLengthAmongstXPaths = commonPrefixLength;
                                            rowPrefix = paramValuesAndXPaths[paramValues[i]].substring(0, commonPrefixLengthAmongstXPaths);
                                        }
                                    }
                                }
                            }

                            if(rowPrefix){
                                // For rowPrefix - Need to make sure it isn't an incomplete node at the end. If the last char isn't a / or a ], then need to trim the end
                                if(rowPrefix.charAt(rowPrefix.length-1) !== '/' && rowPrefix.charAt(rowPrefix.length-1) !== ']'){
                                    const lastSlashIndex = rowPrefix.lastIndexOf('/');
                                    rowPrefix = rowPrefix.substring(0, lastSlashIndex);
                                }

                                const paramRowElement = document.evaluate(rowPrefix, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
                                const numCols = paramRowElement.children.length;
                                paramNumColDataOptions.push({
                                    paramName, paramRowElement, numCols
                                });
                            }
                        }

                        const valueRowNumCols = rowColData.colData.levelParent.children.length;
                        paramNumColDataOptions.sort(function(a, b){
                            return Math.abs(a.numCols - valueRowNumCols) - Math.abs(b.numCols - valueRowNumCols);
                        });

                        // Figure out which col our printed data is in
                        // Find which of rowColData.colData.levelParent.children rowColData.colData.siblingNode is
                        let dataValueColIndex;
                        for(let childIndex = 0; childIndex < rowColData.colData.levelParent.children.length; childIndex++){
                            if(rowColData.colData.levelParent.children[childIndex] === rowColData.colData.siblingNode){
                                dataValueColIndex = childIndex;
                            }
                        }

                        // Be smarter about which item from paramNumColDataOptions we choose
                        // Filter paramNumColDataOptions to include only ones with smallest differential
                        const necessaryColNum = paramNumColDataOptions[0].numCols;
                        paramNumColDataOptions.filter(obj => obj.numCols === necessaryColNum);
                        
                        let possibleParamOptions = [];
                        for(let paramNumColDataOption of paramNumColDataOptions){
                            const paramName = paramNumColDataOption.paramName;
                            const expectedValue = currentParamValuePairings[paramName];

                            // Check col dataValueColIndex of param row to see if value is expectedValue
                            if(paramNumColDataOption.paramRowElement.children.length > dataValueColIndex){
                                const paramColItem = paramNumColDataOption.paramRowElement.children[dataValueColIndex];
                                const paramColItemXPath = getXPathForElement(paramColItem, document);

                                // Find the param value (from paramValueObj[param]) whose xpath is closest to paramColItem's xpath
                                // TODO

                                let longestCommonPrefixLengthSoFar = 0;
                                let valuesLongestCommonPrefixLengthSoFar = [];
                                
                                const valueObj = paramValueObj[paramName];
                                for(let [value, xPath] of Object.entries(valueObj)){
                                    if(xPath){ // because could be null/undefined
                                        let commonPrefixLength = getCommonPrefixLength(xPath, paramColItemXPath);
                                        if(commonPrefixLength > longestCommonPrefixLengthSoFar){
                                            longestCommonPrefixLengthSoFar = commonPrefixLength;
                                            valuesLongestCommonPrefixLengthSoFar = [value];
                                        }else if(commonPrefixLength === longestCommonPrefixLengthSoFar){
                                            valuesLongestCommonPrefixLengthSoFar.push(value);
                                        }
                                    }
                                }

                                // Don't consider if more than 1 value whose xpath is "close" to paramColItemXPath
                                if(valuesLongestCommonPrefixLengthSoFar.length === 1){
                                    const valueXPath = valueObj[valuesLongestCommonPrefixLengthSoFar[0]];
                                    const valueNode = document.evaluate(valueXPath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
                                    if(valueNode.textContent === expectedValue){
                                        // Should consider this param/value option
                                        possibleParamOptions.push(paramNumColDataOption);
                                    }
                                }
                                
                                /*if(paramColItem.textContent === expectedValue){ // is 'equal to' too strict?
                                    possibleParamOptions.push(paramNumColDataOption);
                                }*/
                            }
                        }

                        // If more than 1 option, then it's ambiguous so we won't create a formula for col
                        if(possibleParamOptions.length === 1){
                            // Create rule for identifying right column within data value row
                            let paramColData = possibleParamOptions[0];
                            relevantParamForCol = paramColData.paramName;
                            const paramXPath = getXPathForElement(paramColData.paramRowElement, document);
                            // rowColData.colData.levelParent minus 
                            const colParentXPath = getXPathForElement(rowColData.colData.levelParent, document);
                            //const colXPath = getXPathForElement(rowColData.colData.siblingNode, document);
                            //const finalOpenBracketIndex = colXPath.lastIndexOf("[");
                            const middlePortionOfXPath = colParentXPath.substring(rowXPath.length);
                            generateColXPathSuffix = function(inputValue, rowXPathPrefix){
                                // Need to find the column index in the parameter value row that corresponds to inputValue
                                //paramColData.paramName
                                // Assume we have an xpath for inputValue
                                console.log("generateColXPathSuffix");
                                console.log("paramValueObj", paramValueObj);
                                console.log("paramColData.paramName", paramColData.paramName);
                                console.log("paramValueObj[paramColData.paramName]", paramValueObj[paramColData.paramName]);
                                console.log("inputValue", inputValue);
                                const paramValueXPath = paramValueObj[paramColData.paramName][inputValue];
                                const paramRowElement = document.evaluate(paramXPath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
                                let closestChild;
                                let closestChildXPath = "";
                                let longestCommonPrefix = "";
                                let closestChildIndex;
                                for(let childIndex = 0; childIndex < paramRowElement.children.length; childIndex++){
                                    const childXPath = getXPathForElement(paramRowElement.children[childIndex], document);
                                    console.log("getCommonPrefixLength");
                                    console.log("paramValueXPath", paramValueXPath);
                                    console.log("childXPath", childXPath)
                                    const commonPrefixLength = getCommonPrefixLength(paramValueXPath, childXPath);
                                    if(commonPrefixLength > longestCommonPrefix){
                                        closestChild = paramRowElement.children[childIndex];
                                        closestChildXPath = childXPath;
                                        longestCommonPrefix = commonPrefixLength;
                                        closestChildIndex = childIndex;
                                    }
                                }

                                // Then, use that index for identifying xPath suffix

                                const colParentXPath = rowXPathPrefix + middlePortionOfXPath;
                                const colParentElement = document.evaluate(colParentXPath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
                                const colElement = colParentElement.children[closestChildIndex];
                                const colXPath = getXPathForElement(colElement, document);
                                const colXPathSuffix = colXPath.substring(rowXPathPrefix.length);
                                return colXPathSuffix;
                            };
                        }

                        /* // Ideally should choose where the col differential is 0, but we'll choose the smallest differential for now at least
                            // This won't work if multiple param rows have the same number of cols as the value row
                        const paramColData = paramNumColDataOptions[0];
                        const paramColsMinusValueCols = paramColData.numCols - valueRowNumCols;

                        // For now, let's do this only if paramColsMinusValueCols===0 to test it out, but later we'll likely remove this assumption
                        if(paramColsMinusValueCols === 0){
                            // Figure out which col our printed data is in. Then, check if the corresponding param col is the value currentParamValuePairings[paramName]
                            // Find which of rowColData.colData.levelParent.children rowColData.colData.siblingNode is
                            let dataValueColIndex;
                            for(let childIndex = 0; childIndex < rowColData.colData.levelParent.children.length; childIndex++){
                                if(rowColData.colData.levelParent.children[childIndex] === rowColData.colData.siblingNode){
                                    dataValueColIndex = childIndex;
                                }
                            }
                            console.log("dataValueColIndex", dataValueColIndex);

                            relevantParamForCol = paramColData.paramName;

                            // See if col index for param is same as dataValueColIndex
                            const relevantParamValue = currentParamValuePairings[paramColData.paramName];
                            const relevantParamValueXPath = paramValueObj[paramColData.paramName][relevantParamValue];
                            // Find which of paramColData.paramRowElement.children has the closest xPath to relevantParamValueXPath                        
                            let closestChild;
                            let closestChildXPath = "";
                            let longestCommonPrefix = "";
                            let closestChildIndex;
                            for(let childIndex = 0; childIndex < paramColData.paramRowElement.children.length; childIndex++){
                                const childXPath = getXPathForElement(paramColData.paramRowElement.children[childIndex], document);
                                const commonPrefixLength = getCommonPrefixLength(relevantParamValueXPath, childXPath);
                                if(commonPrefixLength > longestCommonPrefix){
                                    closestChild = paramColData.paramRowElement.children[childIndex];
                                    closestChildXPath = childXPath;
                                    longestCommonPrefix = commonPrefixLength;
                                    closestChildIndex = childIndex;
                                }
                            }

                            // Then, confirm that the index of the closest one is dataValueColIndex
                            if(closestChildIndex === dataValueColIndex){
                                // Create rule for identifying right column within data value row

                                const paramXPath = getXPathForElement(paramColData.paramRowElement, document);
                                // rowColData.colData.levelParent minus 
                                const colParentXPath = getXPathForElement(rowColData.colData.levelParent, document);
                                //const colXPath = getXPathForElement(rowColData.colData.siblingNode, document);
                                //const finalOpenBracketIndex = colXPath.lastIndexOf("[");
                                const middlePortionOfXPath = colParentXPath.substring(rowXPath.length);
                                generateColXPathSuffix = function(inputValue, rowXPathPrefix){
                                    // Need to find the column index in the parameter value row that corresponds to inputValue
                                    //paramColData.paramName
                                    // Assume we have an xpath for inputValue
                                    console.log("generateColXPathSuffix");
                                    console.log("paramValueObj", paramValueObj);
                                    console.log("paramColData.paramName", paramColData.paramName);
                                    console.log("paramValueObj[paramColData.paramName]", paramValueObj[paramColData.paramName]);
                                    console.log("inputValue", inputValue);
                                    const paramValueXPath = paramValueObj[paramColData.paramName][inputValue];
                                    const paramRowElement = document.evaluate(paramXPath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
                                    let closestChild;
                                    let closestChildXPath = "";
                                    let longestCommonPrefix = "";
                                    let closestChildIndex;
                                    for(let childIndex = 0; childIndex < paramRowElement.children.length; childIndex++){
                                        const childXPath = getXPathForElement(paramRowElement.children[childIndex], document);
                                        console.log("getCommonPrefixLength");
                                        console.log("paramValueXPath", paramValueXPath);
                                        console.log("childXPath", childXPath)
                                        const commonPrefixLength = getCommonPrefixLength(paramValueXPath, childXPath);
                                        if(commonPrefixLength > longestCommonPrefix){
                                            closestChild = paramRowElement.children[childIndex];
                                            closestChildXPath = childXPath;
                                            longestCommonPrefix = commonPrefixLength;
                                            closestChildIndex = childIndex;
                                        }
                                    }

                                    // Then, use that index for identifying xPath suffix

                                    const colParentXPath = rowXPathPrefix + middlePortionOfXPath;
                                    const colParentElement = document.evaluate(colParentXPath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
                                    const colElement = colParentElement.children[closestChildIndex];
                                    const colXPath = getXPathForElement(colElement, document);
                                    const colXPathSuffix = colXPath.substring(rowXPathPrefix.length);
                                    return colXPathSuffix;
                                };
                            }
                        } */
                    }

                    // Make sure we don't accidentally find a column correspondence? Or I guess we couldn't "accidentally" do it?


                    // TODO - At the end, define generalizedXPathFunction 


                    var generalizedXPathFunction = function(paramValueForRow, paramValueForCol){
                        console.log("paramValueForRow", paramValueForRow);
                        console.log("paramValueForCol", paramValueForCol);
                        const rowXPathPrefix = generateRowXPathPrefix(paramValueForRow);
                        return rowXPathPrefix + generateColXPathSuffix(paramValueForCol, rowXPathPrefix);
                    };
        
                    program.push({
                        eventType: eventObj.eventType,
                        generalizedXPathFunction,
                        relevantParamForRow,
                        relevantParamForCol
                    });

                }else{
                    program.push(eventObj);
                }
                

                /* // These all assume relevant html is an html table (with <th>, <tr>, <td>)
                // Should check to make sure it's a table before doing the below logic
                
                var desiredRow; // should be defined to be either a constant or a function
                var desiredCol; // should be defined to be either a constant or a function

                // Identify if selected column corresponds to a param, i.e., check the td index for this element, then find the th at this index and see if that th corresponds to a param value
                // Get <td> index (deepest td, last in string)
                var eventTargetXPath = eventObj.targetXPath;
                var lastTDIndex = eventTargetXPath.lastIndexOf("td[");
                var closeBracketIndex = eventTargetXPath.indexOf("]", lastTDIndex);
                var tdNumber = eventTargetXPath.substring(lastTDIndex + 3, closeBracketIndex);
                
                // Get access to this element in the DOM, then query its ancestors to find the closest <table> node, then get th[tdNumber] and see if that corresponds to a param (do similar to above, looking for a param/value whose xPath is closest)
                // TODO, should include an embeddedWebsitePrefix like here -- //document.evaluate(`${embeddedWebsitePrefix} //text()[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), \"${positiveExamplesList[0].toLowerCase()}\")] /..`, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                var tdDOMElement = document.evaluate(eventTargetXPath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
                var tableElement = tdDOMElement.closest("table");
                var tableHeaders = tableElement.querySelectorAll("th");
                var relevantHeader = tableHeaders[tdNumber-1]; // because tdNumber is 1-indexed

                // Now see if relevantHeader corresponds to a certain param value
                // *** Need to create our param value data first

                
                // Identify row
                    // Might have to consider not only <tr>, but also <tbody> ? */



                // Try to identify patterns in divs
                    
                
                // Construct the correct xPath function, or, if none of these heuristics showed anything meaningful, then just program.push(eventObj)
                //program.push(eventObj);
            }else{
                // There isn't a matching param/value. For now, assume this is an event that should be performed regardless of input values
                // TODO - consider if there are any other heuristics we should use here
                program.push(eventObj);
            }
        }

    }

    // TODO - Identify if any parameters (in general in paramValueObj, but also in currentParamValuePairings) don't explicitly seem to appear in the event sequence and which values should be demo-ed and add to neededDemos
    
    return {
        program,
        neededDemos
    };
}