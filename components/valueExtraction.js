import _ from 'lodash';

export function indexOfCaseInsensitive(list, value){
    //let found = false;
    let foundIndex = -1;
    list.forEach(function(listItem, index){
        if(listItem.toLowerCase() === value.toLowerCase()){
            //found = true;
            foundIndex = index;
        }
    });
    //return found;
    return foundIndex;
}

/*export function getCandidateLists(positiveExamplesList, exactStringBoolean, embeddedWebsitePrefix){
    const candidates = getCandidateValueSets(positiveExamplesList, exactStringBoolean, embeddedWebsitePrefix);
    
    // Merge into a single list of lists
    var singleListOfCandidateValueSets = [];
    for(var valueSet of Object.values(candidates)){
        valueSet.sort(); // sort, so that later we can make sure we have no duplicate lists
        singleListOfCandidateValueSets = singleListOfCandidateValueSets.concat(valueSet);
    }

    // Make sure  
    const uniqueSetOfLists = [];
    for(var candidateList of singleListOfCandidateValueSets){
        // Only append to uniqueSetOfLists if candidateList isn't already in there
        if(!_.find(uniqueSetOfLists, function(thisList){ return _.isEqual(candidateList, thisList); })){
            uniqueSetOfLists.push(candidateList);
        }
    }

    // Now, sort uniqueSetOfLists by length of each list
    uniqueSetOfLists.sort(function(a, b){ return b.length - a.length} );

    return uniqueSetOfLists;
}*/

export function getCandidateLists(positiveExamplesList, exactStringBoolean, embeddedWebsitePrefix){
    
    var singleListOfCandidateValueSets = [];

    // Try matching the full string against the DOM
    const candidates = getCandidateValueSets(positiveExamplesList, exactStringBoolean, embeddedWebsitePrefix);
    
    // If no matches for the full string, then try breaking it down into individual words to search for individually
    if(Object.keys(candidates).length > 0){
        // Merge into a single list of lists
        for(var valueSet of Object.values(candidates)){
            valueSet.sort(); // sort, so that later we can make sure we have no duplicate lists
            singleListOfCandidateValueSets = singleListOfCandidateValueSets.concat(valueSet);
        }
    }else{
        // For now, assume positiveExamplesList is a list of size 1
        const singleFullString = positiveExamplesList[0];

        // Split singleFullString by whitespace, commas, periods
        const individualWords = singleFullString.split(/[,\s\.\!\;\:\?\(\)\"\/\\\[\]\+]/g);

        // Stop words taken from https://www.nltk.org/book/ch02.html
        const stopWords = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours',
        'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers',
        'herself', 'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves',
        'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are',
        'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does',
        'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until',
        'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into',
        'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down',
        'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here',
        'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more',
        'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so',
        'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 'should', 'now'];

        for(let word of individualWords){
            // Try to use this word for extracting values from the web page (as long as the word isn't an empty string or a stop word)
            if(word !== "" && !stopWords.includes(word.toLowerCase())){
                const candidates = getCandidateValueSets([word], exactStringBoolean, embeddedWebsitePrefix);
                
                // Merge into a single list of lists
                for(var valueSet of Object.values(candidates)){
                    valueSet.sort(); // sort, so that later we can make sure we have no duplicate lists
                    singleListOfCandidateValueSets = singleListOfCandidateValueSets.concat(valueSet);
                }
            }
        }
    }
    
    // Make sure  
    const uniqueSetOfLists = [];
    for(var candidateList of singleListOfCandidateValueSets){
        // Only append to uniqueSetOfLists if candidateList isn't already in there
        if(!_.find(uniqueSetOfLists, function(thisList){ return _.isEqual(candidateList, thisList); })){
            uniqueSetOfLists.push(candidateList);
        }
    }

    // Now, sort uniqueSetOfLists by length of each list
    uniqueSetOfLists.sort(function(a, b){ return b.length - a.length} );

    // Let's return at most the top 5 lists; if user selects a long string with lots of words,
        // then we could have dozens of list which is way too many for the user to process.
        // The top 5 should probably be enough because we're sorting by length (we'll see in practice)

    if(uniqueSetOfLists.length > 5){
        return uniqueSetOfLists.slice(0, 5);
    }else{
        return uniqueSetOfLists;
    }
}

/* function chooseBestValueSet(candidateValueSets, positiveExamplesList, negativeExamplesList){
    // candidateValueSets is in the format of matchingItemIndexToPossibleExtractions
    // Merge into a single list of lists
    
    var singleListOfCandidateValueSets = [];
    for(var valueSet of Object.values(candidateValueSets)){
        singleListOfCandidateValueSets = singleListOfCandidateValueSets.concat(valueSet);
    }

    var valueSetAndRecallList = [];
    for(var valueSet of singleListOfCandidateValueSets){
        // Count the number of values from positiveExamplesList that appear in the set
        var numPositiveExamplesFound = 0;
        var numNegativeExamplesFound = 0;
        for(var value of positiveExamplesList){
            // Note that .includes is doing an exact string match
            if(indexOfCaseInsensitive(valueSet, value) > -1){
                numPositiveExamplesFound += 1;
            }
        }
        for(var value of negativeExamplesList){
            // Note that .includes is doing an exact string match
            if(indexOfCaseInsensitive(valueSet, value) > -1){
                numNegativeExamplesFound += 1;
            }
        }
        valueSetAndRecallList.push({ valueSet, numPositiveExamplesFound, numNegativeExamplesFound });
    }

    // First sort by number of values from positiveExamplesList that appear in the set
    valueSetAndRecallList = valueSetAndRecallList.sort(
        // Sort by number of values from positiveExamplesList that appear in the set
        function compareFn(first, second) {
            return second.numPositiveExamplesFound - first.numPositiveExamplesFound;
        }
    );

    if(valueSetAndRecallList.length > 0){

        // Next, of the valueSets with the largest numPositiveExamplesFound, sort by fewest numNegativeExamplesFound
        var largestNumPositiveExamplesFound = valueSetAndRecallList[0].numPositiveExamplesFound;
        var valueSetAndRecallListHighestRecall = valueSetAndRecallList.filter((obj => obj.numPositiveExamplesFound === largestNumPositiveExamplesFound));
        valueSetAndRecallListHighestRecall = valueSetAndRecallListHighestRecall.sort(function compareFn(first, second) { return -1*(second.valueSet.numNegativeExamplesFound - first.valueSet.numNegativeExamplesFound)});

        // Next, sort by largest length (number of values)
        var smallestNumNegativeExamplesFound = valueSetAndRecallListHighestRecall[0].numNegativeExamplesFound;
        valueSetAndRecallListHighestRecall = valueSetAndRecallListHighestRecall.filter((obj => obj.numNegativeExamplesFound === smallestNumNegativeExamplesFound));
        valueSetAndRecallListHighestRecall = valueSetAndRecallListHighestRecall.sort(function compareFn(first, second) { return second.valueSet.length - first.valueSet.length});

        // Return the first one
        return valueSetAndRecallListHighestRecall[0];
    }else{
        return {};
    }
} */

function tryAlternativeXPath(parentXPath, nodeXPathSubstring, xPathSuffix, selectorType, valuesWithoutXPath, valuesWithXPath){
    // Now try using this nodeXPathSubstring and see if we match more example values than before
    const newTemplateXPath = parentXPath + nodeXPathSubstring + xPathSuffix;
    console.log("newTemplateXPath", newTemplateXPath);

    const parentXPathFilledIn = parentXPath.replace("INSERT-INDEX-HERE", 1); // filling in, just in case it still has a template
    //console.log("parentXPathFilledIn", parentXPathFilledIn);
    const numNodesAtThisLevel = document.evaluate(parentXPathFilledIn, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0).children.length;
    // Try newTemplateXPath with different indices for INSERT-INDEX-HERE and see how many results we get and if they match our values
    //let index = 1; // xpath nodes are 1-indexed
    const newMatchesFound = [];
    let numExtraneousNodesFound = 0;
    //while(true){
    for(let index = 1; index <= numNodesAtThisLevel; index++){
        const filledInTemplateXPath = newTemplateXPath.replace("INSERT-INDEX-HERE", index);
        if(filledInTemplateXPath.indexOf("///") === -1){ // invalid xpath if it contains 3 slashes in a row
            const result = document.evaluate(filledInTemplateXPath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            if(result.snapshotItem(0)){
                let textCandidate = result.snapshotItem(0).textContent;
                //if(valuesWithoutXPath.includes(textCandidate)){
                if(indexOfCaseInsensitive(valuesWithoutXPath, textCandidate) > -1){
                    newMatchesFound.push(textCandidate);
                //}else if(!valuesWithXPath.includes(textCandidate)){
                }else if(indexOfCaseInsensitive(valuesWithXPath, textCandidate) === -1){
                    // We've matched a node whose value isn't one the user has specified. We want to keep track of how many of these we have (if it's too high, then maybe we shouldn't generalize the xpath in this way)
                    numExtraneousNodesFound +=1;
                }
            }
        }
        //index += 1;
    }

    return {
        newMatchesFound,
        numExtraneousNodesFound,
        nodeXPathSubstring,
        newTemplateXPath,
        selectorType,
        numNodesAtThisLevel
    };
}

export function makeXPathsMoreRobust(valueAndXPathObjList, embeddedWebsitePrefix){
    //let numItemsWithXPath = 0;
    let valuesWithoutXPath = [];
    let valuesWithXPath = [];
    let objWithXPath; // to use as an example, as we go up through DOM
    for(let obj of valueAndXPathObjList){
        if(obj.xPath){
            objWithXPath = obj;
            //numItemsWithXPath += 1;
            valuesWithXPath.push(obj.textCandidate);
        }else{
            valuesWithoutXPath.push(obj.textCandidate);
        }
    }
    console.log("objWithXPath", objWithXPath);
    console.log("valuesWithoutXPath", valuesWithoutXPath);

    // Now traverse up DOM for objWithXPath
    //let bestListSoFar = valueAndXPathObjList;
    let bestSoFar = {}; // Put into a map, so it's easier to index into later
    for(let valueAndXPathObj of valueAndXPathObjList){
        // using toLowerCase because it'll be easier, since we don't know what case text will be on website; this of course relies on users not giving multiple values that are the same word except different case
        bestSoFar[valueAndXPathObj.textCandidate.toLowerCase()] = _.cloneDeep(valueAndXPathObj);
    }
    let xPathPrefix = objWithXPath.templateXPath;
    let xPathSuffix = ""; // we'll build this up at each level; it'll include any modifications we make
    const curNode = document.evaluate(objWithXPath.xPath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
    //console.log("curNode", curNode);
    while(curNode.parentNode && valuesWithoutXPath.length > 0){ // i.e., until we reach the top of the document
        // Try an alternate xPath substring for this level
        //const parentXPath = getXPathForElement(curNode.parentNode); // this does use indices
        const parentXPath = getParentXPath(xPathPrefix);
        const curNodeXPathSubstring = xPathPrefix.substring(parentXPath.length); // in case we do decide to just use the index-based string for this level
        
        //const tag = curNode.tagName.toLowerCase();

        const candidateChanges = [];

        // Try inserting a / (so that it's //) on the right of this xpath. So that this could match values whose DOM node is deeper
        // Only do this if there's already a suffix node (if there isn't, we can't add the / because a slash at the very end of an xpath string isn't valid xpath)
        if(xPathSuffix.length > 0){
            const nodeXPathSubstring = `${curNodeXPathSubstring}/`;
            const attempt = tryAlternativeXPath(parentXPath, nodeXPathSubstring, xPathSuffix, "class", valuesWithoutXPath, valuesWithXPath);
            candidateChanges.push(attempt);
        }

        // Try using a class instead of an index
        const classList = curNode.classList;
        for(let className of classList){
            //const nodeXPathSubstring1 = `/${tag}[@class='${className}']`;
            const nodeXPathSubstring1 = `/*[@class='${className}']`;
            const attempt1 = tryAlternativeXPath(parentXPath, nodeXPathSubstring1, xPathSuffix, "class", valuesWithoutXPath, valuesWithXPath);
            candidateChanges.push(attempt1);

            // Only do this if there's already a suffix node (if there isn't, we can't add the / because a slash at the very end of an xpath string isn't valid xpath)
            if(xPathSuffix.length > 0 && xPathSuffix.substring(0, 2) !== "//"){ // Also want to make sure we're not inserting more slashes than are allowed in a row (at most 2 in a row)
                // Try the same thing, except with an extra / inserted on the right. So that this could match values whose DOM node is deeper
                const nodeXPathSubstring2 = `${nodeXPathSubstring1}/`;
                const attempt2 = tryAlternativeXPath(parentXPath, nodeXPathSubstring2, xPathSuffix, "classWithInsertedSlash", valuesWithoutXPath, valuesWithXPath);
                candidateChanges.push(attempt2);
            }
        }

        // Try using an attribute instead of an index
        const attributes = curNode.attributes;
        for(let attribute of attributes){
            const attrName = attribute.name;
            const attributeValue = attribute.value;
            let nodeXPathSubstring1;
            if(attributeValue){
                //nodeXPathSubstring1 = `/${tag}[@${attrName}='${attributeValue}']`;
                nodeXPathSubstring1 = `/*[@${attrName}='${attributeValue}']`;
            }else{
                //nodeXPathSubstring1 = `/${tag}[@${attrName}]`;
                nodeXPathSubstring1 = `/*[@${attrName}]`;
            }
            const attempt1 = tryAlternativeXPath(parentXPath, nodeXPathSubstring1, xPathSuffix, "attribute", valuesWithoutXPath, valuesWithXPath);
            candidateChanges.push(attempt1);

            // Only do this if there's already a suffix node (if there isn't, we can't add the / because a slash at the very end of an xpath string isn't valid xpath)
            if(xPathSuffix.length > 0 && xPathSuffix.substring(0, 2) !== "//"){ // Also want to make sure we're not inserting more slashes than are allowed in a row (at most 2 in a row)
                // Try the same thing, except with an extra / inserted on the right. So that this could match values whose DOM node is deeper
                const nodeXPathSubstring2 = `${nodeXPathSubstring1}/`;
                const attempt2 = tryAlternativeXPath(parentXPath, nodeXPathSubstring2, xPathSuffix, "attributeWithInsertedSlash", valuesWithoutXPath, valuesWithXPath);
                candidateChanges.push(attempt2);
            }
        }

        // Only do this if there's already a suffix node (if there isn't, we can't add the / because a slash at the very end of an xpath string isn't valid xpath)
        // Try just ignoring/excluding this level, aka, allowing any number of levels to happen here (this could help us include values whose DOM node is not as deep, but not sure if this could over-select, select too many nodes on the page)
        if(xPathSuffix.length > 0 && xPathSuffix.substring(0, 2) !== "//"){ // Also want to make sure we're not inserting more slashes than are allowed in a row (at most 2 in a row)
            const nodeXPathSubstring = `/`;
            const attempt = tryAlternativeXPath(parentXPath, nodeXPathSubstring, xPathSuffix, "slash", valuesWithoutXPath, valuesWithXPath);
            candidateChanges.push(attempt);
        }

        // Choose the best option from candidateChanges; or, if none of the options increase length of newMatchesFound, then just use original index-based substring
        // Sort in descending order of newMatchesFound.length
        candidateChanges.sort(function(a, b){
            return b.newMatchesFound.length - a.newMatchesFound.length;
        });

        let bestCandidateForThisLevel;

        if(candidateChanges.length > 0){
            const mostNewMatchesFound = candidateChanges[0].newMatchesFound.length;

            // Filter to only include candidates with mostNewMatchesFound
            candidateChanges.filter(obj => obj.newMatchesFound.length === mostNewMatchesFound);

            // Now sort in ascending order of numExtraneousNodesFound (we want the xpath with the highest mostNewMatchesFound and then the least numExtraneousNodesFound)
            candidateChanges.sort(function(a, b){
                return a.numExtraneousNodesFound - b.numExtraneousNodesFound;
            });

            if(candidateChanges.length > 0){
                bestCandidateForThisLevel = candidateChanges[0];
            }
        }

        //console.log("candidateChanges", candidateChanges);
        console.log("bestCandidateForThisLevel", bestCandidateForThisLevel);

        if(!bestCandidateForThisLevel || bestCandidateForThisLevel.newMatchesFound.length === 0){
            // No changes at this level helped us find more matches, so just use what we had already

            //curNodeXPathSubstring
            // Remove curNodeXPathSubstring from end of xPathPrefix
            // Add curNodeXPathSubstring to beginning of xPathSuffix
            xPathPrefix = xPathPrefix.substring(0, xPathPrefix.lastIndexOf(curNodeXPathSubstring));
            xPathSuffix = curNodeXPathSubstring + xPathSuffix;
        }else{

            const newXPathSubstring = bestCandidateForThisLevel.nodeXPathSubstring;
            const numNodesAtThisLevel = bestCandidateForThisLevel.numNodesAtThisLevel;
            // Update bestSoFar to have improved xpaths
            //bestSoFar[valueAndXPathObj.textCandidate]
            //let index = 1; // xpath nodes are 1-indexed
            //while(true){
            for(let index = 1; index <= numNodesAtThisLevel; index++){
                const filledInTemplateXPath = bestCandidateForThisLevel.newTemplateXPath.replace("INSERT-INDEX-HERE", index);
                const result = document.evaluate(filledInTemplateXPath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                if(result.snapshotItem(0)){
                    let textCandidate = result.snapshotItem(0).textContent.toLowerCase();
                    // If this xpath match corresponds to one of the user specified values, update it in bestSoFar
                    if(bestSoFar[textCandidate]){
                        bestSoFar[textCandidate].xPath = filledInTemplateXPath;
                        bestSoFar[textCandidate].templateXPath = bestCandidateForThisLevel.newTemplateXPath;
                        bestSoFar[textCandidate].commonXPathPrefix = bestCandidateForThisLevel.newTemplateXPath.substring(0, bestCandidateForThisLevel.newTemplateXPath.indexOf("[INSERT-INDEX-HERE]"));
                        bestSoFar[textCandidate].commonXPathSuffix = bestCandidateForThisLevel.newTemplateXPath.substring(bestCandidateForThisLevel.newTemplateXPath.lastIndexOf("[INSERT-INDEX-HERE]") + "[INSERT-INDEX-HERE]".length);
                    }

                    // Update valuesWithoutXPath and valuesWithXPath accordingly
                    //if(valuesWithoutXPath.includes(textCandidate)){
                    if(indexOfCaseInsensitive(valuesWithoutXPath, textCandidate) > -1){
                        // Remove from valuesWithoutXPath
                        //const indexInList = valuesWithoutXPath.indexOf(textCandidate);
                        const indexInList = indexOfCaseInsensitive(valuesWithoutXPath, textCandidate);
                        valuesWithoutXPath.splice(indexInList, 1);

                        // Add to valuesWithXPath
                        valuesWithXPath.push(textCandidate);
                    }

                }
                //index += 1;
            }

            xPathPrefix = xPathPrefix.substring(0, xPathPrefix.lastIndexOf(curNodeXPathSubstring));
            xPathSuffix = newXPathSubstring + xPathSuffix;
        }
    }

    console.log("bestSoFar", bestSoFar);
    console.log("xPathPrefix", xPathPrefix);
    console.log("xPathSuffix", xPathSuffix);

    const newValueXPathObjList = Object.values(bestSoFar);
    return newValueXPathObjList;
}

function getParentXPath(xPathString){
    // Trim off the last node
    const lastIndexOfSlash = xPathString.lastIndexOf("/");
    const parentXPath = xPathString.substring(0, lastIndexOfSlash);
    return parentXPath;
}

// Get all possible parameter values, where positiveExamplesList is a list of example values the user has provided
function getCandidateValueSets(positiveExamplesList, exactStringBoolean, embeddedWebsitePrefix){
    if(positiveExamplesList.length === 0){
        return {};
    }

    // Look for visible text in the DOM that has value positiveExamplesList[0], and then get its parent
        // We'll use positiveExamplesList[0] to start the search. Shouldn't matter too much which item in the list we use
    
    var matchingItemIndexToPossibleExtractions = {};

    //var parentNodesContainingKeyword = document.evaluate(`//text()[contains(., \"${positiveExamplesList[0]}\")] /..`, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    // Adapted from https://stackoverflow.com/questions/8474031/case-insensitive-xpath-contains-possible/23388974
    //var parentNodesContainingKeyword = document.evaluate(`//text()[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), \"${positiveExamplesList[0].toLowerCase()}\")] /..`, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var parentNodesContainingKeyword = document.evaluate(`${embeddedWebsitePrefix} //text()[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), \"${positiveExamplesList[0].toLowerCase()}\")] /..`, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    
    for(let matchingItemIndex = 0; matchingItemIndex < parentNodesContainingKeyword.snapshotLength; matchingItemIndex++){
        // If we don't care about whether it's an exact string match, then always proceed
        // If we do care that it is an exact string match, then check that before proceeding
        if(!exactStringBoolean || parentNodesContainingKeyword.snapshotItem(matchingItemIndex).textContent.toLowerCase() === positiveExamplesList[0].toLowerCase()){
            var parentNodeOfTextNodeXPath = getXPathForElement(parentNodesContainingKeyword.snapshotItem(matchingItemIndex), document);
            
            if(!parentNodeOfTextNodeXPath.includes("script") && !parentNodeOfTextNodeXPath.includes("style")){ // We don't want to include text that's within a <script> node
                // Use parentNodeOfTextNodeXPath as the full xpath (and then we can call textContent on the result)
                
                // Now, traverse up through the DOM
                var ancestorNode = parentNodesContainingKeyword.snapshotItem(matchingItemIndex);
                var possibleExtractions = [];
                while(ancestorNode.parentNode && ancestorNode.parentNode.parentNode){ // i.e., until we reach the top of the document
                    // For each of ancestorNode's siblings, try querying the partial selector and see if there's a match (and if the match is "meaningful"?)
                    var siblingNodes = ancestorNode.parentNode.children;
                    var ancestorNodeXPath = getXPathForElement(ancestorNode, document);
                    var ancestorNodeParentXPath = getXPathForElement(ancestorNode.parentNode, document);
                    var xPathDiff = parentNodeOfTextNodeXPath.substring(ancestorNodeXPath.length);

                    var values = [];
                    var numberXPathQueryUnsuccessful = 0; // In the end, we might not even use this in our heuristics
                    //for(var siblingNode of siblingNodes){
                    for(let siblingIndex = 0; siblingIndex < siblingNodes.length; siblingIndex++){
                        var siblingNode = siblingNodes[siblingIndex];
                        var siblingNodeXPath = getXPathForElement(siblingNode, document);

                        if(!siblingNodeXPath.includes("script") && !siblingNodeXPath.includes("style")){ // We don't want to include text that's within a <script> node
                            var xPathDownSiblingToQuery = siblingNodeXPath + xPathDiff;

                            var candidate = document.evaluate(xPathDownSiblingToQuery, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                            if(candidate.snapshotItem(0)){
                                var textCandidate = candidate.snapshotItem(0).textContent;
                                if(textCandidate !== ""){
                                    // using * so that later we can loop through all children at the level
                                    values.push({ textCandidate, xPath: xPathDownSiblingToQuery, templateXPath: `${ancestorNodeParentXPath}/*[INSERT-INDEX-HERE]${xPathDiff}`, commonXPathPrefix: ancestorNodeParentXPath, commonXPathSuffix: xPathDiff } );
                                    //values.push({ textCandidate, xPath: xPathDownSiblingToQuery, templateXPath: `${ancestorNodeXPath}/${siblingNode.tagName.toLowerCase()}[INSERT-INDEX-HERE]${xPathDiff}`, commonXPathPrefix: ancestorNodeXPath, commonXPathSuffix: xPathDiff } );
                                }else{
                                    numberXPathQueryUnsuccessful += 1;
                                }
                            }else{
                                // XPath query doesn't work for this sibling. Break out of loop at this level so we can move one level up in DOM
                                numberXPathQueryUnsuccessful += 1;
                            }
                        }
                    }

                    // Just going to add this set of values to our list. Later, at the very end, we'll decide which option is the best choice
                    possibleExtractions.push(values);

                    ancestorNode = ancestorNode.parentNode;
                }
                matchingItemIndexToPossibleExtractions[matchingItemIndex] = possibleExtractions;
            }
        }
    }
    
    return matchingItemIndexToPossibleExtractions;
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

/* export function getValues(positiveExamplesList, negativeExamplesList, embeddedWebsitePrefix){
    var candidates = getCandidateValueSets(positiveExamplesList, true, embeddedWebsitePrefix);
    var best = chooseBestValueSet(candidates, positiveExamplesList, negativeExamplesList);
    var valueSet = [];
    if(best.valueSet){ // Because if no matches, it'll be an empty object
        valueSet = best.valueSet;
    }

    // Want to include all values (case insensitive) from positiveExamplesList even if they weren't found on the page (because the user explicitly specified them)
    //valueSet = _.union(valueSet, positiveExamplesList);
    for(let value of positiveExamplesList){
        const indexInList = indexOfCaseInsensitive(valueSet, value);
        if(indexInList > -1){
            // Value is already included, but we'll replace with user-given "value" to make sure it matches user-given case
            valueSet[indexInList] = value;
        }else{
            // Value isn't already included. We want to make sure to include it
            valueSet.push(value);
        }
    }

    // Want to make sure that no values in negativeExamplesList appear in valueSet
    for(let value of negativeExamplesList){
        const indexInList = indexOfCaseInsensitive(valueSet, value);
        if(indexInList > -1){
            // In valueSet; remove it
            valueSet.splice(indexInList, 1);
        }
    }
    return valueSet;
} */