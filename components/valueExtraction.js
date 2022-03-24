import _ from 'lodash';

import * as fontoxpath from 'fontoxpath';

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
    
    // Go through singleListOfCandidateValueSets and if a given list has the same param value multiple times, just include the first instance
    const listsWithNoDuplicates = [];
    for(let candidateList of singleListOfCandidateValueSets){
        const itemMap = {};
        for(let item of candidateList){
            if(!itemMap[item.textCandidate]){
                // Not yet in the map, so add it
                itemMap[item.textCandidate] = item;
            }
        }
        const newCandidateList = Object.values(itemMap);
        listsWithNoDuplicates.push(newCandidateList);
    }

    // Make sure  
    const uniqueSetOfLists = [];
    for(var candidateList of listsWithNoDuplicates){
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

function tryAlternativeXPath(parentXPath, nodeXPathSubstring, xPathSuffix, selectorType, valuesWithoutXPath, valuesWithXPath, allValues, numRows, otherValuesToTry){
    // Now try using this nodeXPathSubstring and see if we match more example values than before
    //console.log("parentXPath", parentXPath);
    //console.log("nodeXPathSubstring", nodeXPathSubstring);
    //console.log("xPathSuffix", xPathSuffix);
    const prefixXPath = parentXPath + nodeXPathSubstring;
    const newTemplateXPath = prefixXPath + xPathSuffix;
    //const newTemplateXPath = parentXPath + nodeXPathSubstring + xPathSuffix;
    //console.log("newTemplateXPath", newTemplateXPath);

    // Try newTemplateXPath with different indices for INSERT-ROW-INDEX-HERE and see how many results we get and if they match our values
    //let index = 1; // xpath nodes are 1-indexed
    const newMatchesFound = [];
    let numExtraneousNodesFound = 0;
    const totalMatchesFound = [];
    //while(true){
    let largestSnapshotLength = 0;
    for(let index = 1; index <= numRows; index++){
        // Test new xpath
        const filledInTemplateXPath = newTemplateXPath.replace("INSERT-ROW-INDEX-HERE", index);
        console.log("filledInTemplateXPath", filledInTemplateXPath);
        if(filledInTemplateXPath.indexOf("///") === -1){ // invalid xpath if it contains 3 slashes in a row
            const result = fontoxpath.evaluateXPathToNodes(filledInTemplateXPath, document.documentElement);
            if(result[0]){
                let textCandidate = result[0].textContent.trim();
                if(indexOfCaseInsensitive(allValues, textCandidate) > -1){
                    totalMatchesFound.push(textCandidate);
                }else{
                    console.log("textCandidate", textCandidate);
                    // See if a string similar to textCandidate is in allValues (like if the user wrote 'chorizo' instead of 'plant-based chorizo')
                    const closestString = findClosestString(textCandidate, allValues);
                    console.log("closestString", closestString);
                    if(closestString){
                        totalMatchesFound.push(closestString);
                    }
                }

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

        // We also need to test prefixXPath (a prefix of the old xpath + the new generalized node string)
            // Even if newTemplateXPath is unique, it's possible prefixXPath isn't, which could be a problem
            // later when we remove a suffix from the param value xpath and then add a new suffix to it; if the first match for
            // a non-unique xpath prefix isn't actually the right one, it might result in an invalid xpath when the suffix gets added to it
            // (whereas if we had the correct match then adding the new suffix could work)
        const filledInPrefixXPath = prefixXPath.replace("INSERT-ROW-INDEX-HERE", index);
        console.log("filledInPrefixXPath", filledInPrefixXPath);
        if(filledInPrefixXPath.substring(filledInPrefixXPath.length-1) !== "/" && filledInPrefixXPath.indexOf("///") === -1){ // invalid xpath if it contains 3 slashes in a row
            const result = fontoxpath.evaluateXPathToNodes(filledInPrefixXPath, document.documentElement);
            if(result.length > 0){
                // Keep track of the most matches; this will be a factor we consider when choosing the best xpath change
                if(result.length > largestSnapshotLength){
                    largestSnapshotLength = result.length;
                }
            }
        }
    }

    console.log("otherValuesToTry", otherValuesToTry);
    for(let otherValueToTry of otherValuesToTry){
        const thisValuePrefixXPath = otherValueToTry.xPath + nodeXPathSubstring;
        const newXPathToTry = thisValuePrefixXPath + xPathSuffix;
        console.log("newXPathToTry", newXPathToTry);
        if(newXPathToTry.indexOf("///") === -1){ // invalid xpath if it contains 3 slashes in a row
            const result = fontoxpath.evaluateXPathToNodes(newXPathToTry, document.documentElement);
            if(result[0]){
                let textCandidate = result[0].textContent.trim();
                if(indexOfCaseInsensitive(allValues, textCandidate) > -1){
                    totalMatchesFound.push(textCandidate);
                    console.log("totalMatchesFound adding newXPathToTry");
                }else{
                    console.log("textCandidate", textCandidate);
                    // See if a string similar to textCandidate is in allValues (like if the user wrote 'chorizo' instead of 'plant-based chorizo')
                    const closestString = findClosestString(textCandidate, allValues);
                    console.log("closestString", closestString);
                    if(closestString){
                        totalMatchesFound.push(closestString);
                        console.log("totalMatchesFound adding newXPathToTry");
                    }
                }

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

        // We also need to test prefixXPath (a prefix of the old xpath + the new generalized node string)
            // Even if newTemplateXPath is unique, it's possible prefixXPath isn't, which could be a problem
            // later when we remove a suffix from the param value xpath and then add a new suffix to it; if the first match for
            // a non-unique xpath prefix isn't actually the right one, it might result in an invalid xpath when the suffix gets added to it
            // (whereas if we had the correct match then adding the new suffix could work)
        if(thisValuePrefixXPath.substring(thisValuePrefixXPath.length-1) !== "/" && thisValuePrefixXPath.indexOf("///") === -1){ // invalid xpath if it contains 3 slashes in a row
            const result = fontoxpath.evaluateXPathToNodes(thisValuePrefixXPath, document.documentElement);
            if(result.length > 0){
                // Keep track of the most matches; this will be a factor we consider when choosing the best xpath change
                if(result.length > largestSnapshotLength){
                    largestSnapshotLength = result.length;
                }
            }
        }
    }

    return {
        totalMatchesFound,
        newMatchesFound,
        numExtraneousNodesFound,
        nodeXPathSubstring,
        newTemplateXPath,
        selectorType,
        largestSnapshotLength
    };
}

export function findClosestString(inputString, stringOptions){
    let shortestDiffSoFar;
    let bestStringOptionSoFar;
    for(let stringOption of stringOptions){
        let diff = null;
        if(stringOption.trim().toLowerCase().indexOf(inputString.trim().toLowerCase()) > -1){
            diff = stringOption.trim().toLowerCase().split(inputString.trim().toLowerCase()).join('');
        }else if(inputString.indexOf(stringOption) > -1){
            diff = inputString.trim().toLowerCase().split(stringOption.trim().toLowerCase()).join('');
        }
        if(diff !== null){
            if(!bestStringOptionSoFar){
                bestStringOptionSoFar = stringOption;
                shortestDiffSoFar = diff;
            }else if(diff.length < shortestDiffSoFar.length){
                bestStringOptionSoFar = stringOption;
                shortestDiffSoFar = diff;
            }
        }
    }
    return bestStringOptionSoFar;
}

//export function makeXPathsMoreRobust(valueAndXPathObjList, paramName, numRows){
export function makeXPathsMoreRobust(valueAndXPathObjList, paramName){
    //console.log("makeXPathsMoreRobust", makeXPathsMoreRobust);
    //let numItemsWithXPath = 0;
    let valuesWithoutXPath = [];
    let valuesWithXPath = [];
    let otherValuesToTry = []; // other param values to try (not using main template)
    let objWithXPath; // to use as an example, as we go up through DOM

    // objWithXPath
    // Figure out the template with the shortest suffix after [INSERT-ROW-INDEX-HERE],
        // then set objWithXPath to one of those value objects
    let shortestSuffix;
    let shortestSuffixValueObj;
    for(let obj of valueAndXPathObjList){
        if(obj.templateXPath){
            const indexOfInsertRowIndexHere = obj.templateXPath.lastIndexOf('[INSERT-ROW-INDEX-HERE]');
            if(indexOfInsertRowIndexHere > -1){
                const suffix = obj.templateXPath.substring(indexOfInsertRowIndexHere + '[INSERT-ROW-INDEX-HERE]'.length);
                if(!shortestSuffix || suffix.length < shortestSuffix.length){
                    shortestSuffix = suffix;
                    shortestSuffixValueObj = obj;
                }
            }
        }
    }
    //console.log("shortestSuffix", shortestSuffix);

    if(shortestSuffix){
        objWithXPath = shortestSuffixValueObj;

        // Populate valuesWithXPath; we only need to check the values with the same template, because we won't be accessing the other values through out indexing anyway
        for(let obj of valueAndXPathObjList){
            if(obj.templateXPath === objWithXPath.templateXPath){
                valuesWithXPath.push(obj.textCandidate);
            }else{
                if(obj.xPath){
                    otherValuesToTry.push(obj);
                }
            }
        }
    }else{

        // We don't have any values with templates, so let's try to find a "template" ourselves

        // Define objWithXPath to be a "representative" param value, one whose xpath is of a similar form to the rest
        // We'll figure that out by finding the most popular common pairwise xpath prefix between param value xpaths.
        // We want to choose a "representative" xpath so that when we try to find a robust xpath with classes/attributes, we're doing
        // this for an xpath that we know is close to as many other xpaths already.
        // This will help us avoid choosing a param value xpath that is too high up, which would be caused by an outlier
        // param value xpath that is somewhere totally different on the page; we don't want this outlier to prevent us
        // from finding a common pattern among the other xpaths

        const xPathOptions = {};
        for(let i = 0; i < valueAndXPathObjList.length-1; i++){
            for(let j = i+1; j < valueAndXPathObjList.length; j++){
                if(valueAndXPathObjList[i].xPath && valueAndXPathObjList[j].xPath){
                    const commonPrefixLength = getCommonPrefixLength(valueAndXPathObjList[i].xPath, valueAndXPathObjList[j].xPath);
                    const commonPrefix = valueAndXPathObjList[i].xPath.substring(0, commonPrefixLength);
                    if(xPathOptions[commonPrefix]){
                        // Increment
                        xPathOptions[commonPrefix] = xPathOptions[commonPrefix] + 1;
                    }else{
                        // Add it to map for first time
                        xPathOptions[commonPrefix] = 1;
                    }
                }
            }
        }
        //console.log("xPathOptions", xPathOptions);
        const mostCommonPairwisePrefixCount = Math.max(...Object.values(xPathOptions));
        //console.log("mostCommonPairwisePrefixCount", mostCommonPairwisePrefixCount);
        // Filter to only include the most common
        const mostCommonPairwisePrefixOptions = Object.keys(xPathOptions).filter(xPathOption => xPathOptions[xPathOption] === mostCommonPairwisePrefixCount);
        //console.log("mostCommonPairwisePrefixOptions", mostCommonPairwisePrefixOptions);
        // Choose the most common xpath (or if there are multiple common xpaths, just choose one of them)
        let commonPrefix = mostCommonPairwisePrefixOptions[0];
        //console.log("commonPrefix", commonPrefix)
    
        // Loop through valueAndXPathObjList to find one whose xpath has commonPrefix
        for(let obj of valueAndXPathObjList){
            valuesWithXPath.push(obj.textCandidate);
            if(!objWithXPath && obj.xPath && obj.xPath.indexOf(commonPrefix) === 0){
                objWithXPath = obj;
            }else{
                if(obj.xPath){
                    otherValuesToTry.push(obj);
                }
            }
        }
    
        if(objWithXPath && !objWithXPath.templateXPath){
            // We need to construct a templateXPath since this param value doesn't have one yet (which could be if it was found individually, with an individual string match, and not alongside other relative param values)
            
            // Trim off the partial node string at the end of commonPrefix
            let trimmedCommonPrefix = commonPrefix.substring(0, commonPrefix.lastIndexOf("/"));
            console.log("trimmedCommonPrefix", trimmedCommonPrefix);
            let thisValueSuffix = objWithXPath.xPath.substring(commonPrefix.length);
            // Trim off the partial node string at the beginning
            thisValueSuffix = thisValueSuffix.substring(thisValueSuffix.indexOf("/"));
            console.log("thisValueSuffix", thisValueSuffix);
    
            const templateXPath = `${trimmedCommonPrefix}/*[INSERT-ROW-INDEX-HERE]${thisValueSuffix}`;
            console.log("templateXPath", templateXPath);
            objWithXPath.templateXPath = templateXPath;
        }
    }
    console.log("objWithXPath", objWithXPath);

    if(!objWithXPath){
        return {
            valueAndXPathObjList,
            xPathSuffix: "",
        }
    }


    // Probably should recalculate numRows based on templateXPath
    let rowPrefix = objWithXPath.templateXPath.substring(0, objWithXPath.templateXPath.lastIndexOf('[INSERT-ROW-INDEX-HERE]'));
    rowPrefix = rowPrefix.substring(0, rowPrefix.lastIndexOf("/"));
    const parentOfRowsElement = fontoxpath.evaluateXPathToNodes(rowPrefix, document.documentElement)[0];
    let numRows = parentOfRowsElement.children.length;
    //console.log("rowPrefix", rowPrefix);
    //console.log("numRows", numRows);

    //console.log("valuesWithoutXPath", valuesWithoutXPath);

    // Now traverse up DOM for objWithXPath
    //let bestListSoFar = valueAndXPathObjList;
    let bestSoFar = {}; // Put into a map, so it's easier to index into later
    let allValues = [];
    for(let valueAndXPathObj of valueAndXPathObjList){
        // using toLowerCase because it'll be easier, since we don't know what case text will be on website; this of course relies on users not giving multiple values that are the same word except different case
        bestSoFar[valueAndXPathObj.textCandidate.toLowerCase()] = _.cloneDeep(valueAndXPathObj);
        allValues.push(valueAndXPathObj.textCandidate.trim().toLowerCase());
    }
    console.log("initial bestSoFar", bestSoFar);
    let xPathPrefix = objWithXPath.templateXPath;
    let xPathSuffix = ""; // we'll build this up at each level; it'll include any modifications we make
    let curNode = fontoxpath.evaluateXPathToNodes(objWithXPath.xPath, document.documentElement)[0];
    //console.log("curNode", curNode);
    // Traverse up through the DOM until we hit the top part of the xpath that is the same across all param values (i.e., above [INSERT-ROW-INDEX-HERE])
    // We do want to keep going up until [INSERT-ROW-INDEX-HERE] because we really do want to try to make each step a class or attribute instead of index
    while(curNode.parentNode.parentNode && xPathPrefix.length > 0 && xPathPrefix.indexOf("[INSERT-ROW-INDEX-HERE]") > -1 && xPathSuffix.indexOf("[INSERT-ROW-INDEX-HERE]") === -1){
        console.log("updated bestSoFar", bestSoFar);
        //console.log("valuesWithoutXPath", valuesWithoutXPath);
        // Try an alternate xPath substring for this level
        //const parentXPath = getXPathForElement(curNode.parentNode); // this does use indices
        const parentXPath = getParentXPath(xPathPrefix);
        const curNodeXPathSubstring = xPathPrefix.substring(parentXPath.length); // in case we do decide to just use the index-based string for this level
        if(curNodeXPathSubstring.indexOf("INSERT-ROW-INDEX-HERE") > -1){
            break;
        }
        //const tag = curNode.tagName.toLowerCase();

        // For otherValuesToTry, trim off last node so we can try new node
        for(let otherValueToTry of otherValuesToTry){
            if(otherValueToTry.xPath){
                otherValueToTry.xPath = otherValueToTry.xPath.substring(0, otherValueToTry.xPath.lastIndexOf("/"));
            }
        }

        let candidateChanges = [];

        // Start by using original node as an option
        {
            const attempt = tryAlternativeXPath(parentXPath, curNodeXPathSubstring, xPathSuffix, "indexBased", valuesWithoutXPath, valuesWithXPath, allValues, numRows, otherValuesToTry);
            candidateChanges.push(attempt);
        }

        // Try inserting a / (so that it's //) on the right of this xpath. So that this could match values whose DOM node is deeper
        // Only do this if there's already a suffix node (if there isn't, we can't add the / because a slash at the very end of an xpath string isn't valid xpath)
        if(xPathSuffix.length > 0){
            const nodeXPathSubstring = `${curNodeXPathSubstring}/`;
            const attempt = tryAlternativeXPath(parentXPath, nodeXPathSubstring, xPathSuffix, "insertSlash", valuesWithoutXPath, valuesWithXPath, allValues, numRows, otherValuesToTry);
            candidateChanges.push(attempt);
        }

        // Try using a class instead of an index
        const classList = curNode.classList;
        for(let className of classList){
            //const nodeXPathSubstring1 = `/*[contains(@class, '${className}')]`;
            //const nodeXPathSubstring1 = `/*[contains(concat(' ', normalize-space(@class), ' '), '${className}')]`;
            const nodeXPathSubstring1 = `/*[count(index-of(tokenize(@class, ' ' ), '${className}')) = 1]`;
            const attempt1 = tryAlternativeXPath(parentXPath, nodeXPathSubstring1, xPathSuffix, "class", valuesWithoutXPath, valuesWithXPath, allValues, numRows, otherValuesToTry);
            candidateChanges.push(attempt1);

            // Only do this if there's already a suffix node (if there isn't, we can't add the / because a slash at the very end of an xpath string isn't valid xpath)
            if(xPathSuffix.length > 0 && xPathSuffix.substring(0, 2) !== "//"){ // Also want to make sure we're not inserting more slashes than are allowed in a row (at most 2 in a row)
                // Try the same thing, except with an extra / inserted on the right. So that this could match values whose DOM node is deeper
                const nodeXPathSubstring2 = `${nodeXPathSubstring1}/`;
                const attempt2 = tryAlternativeXPath(parentXPath, nodeXPathSubstring2, xPathSuffix, "classWithInsertedSlash", valuesWithoutXPath, valuesWithXPath, allValues, numRows, otherValuesToTry);
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
            const attempt1 = tryAlternativeXPath(parentXPath, nodeXPathSubstring1, xPathSuffix, "attribute", valuesWithoutXPath, valuesWithXPath, allValues, numRows, otherValuesToTry);
            candidateChanges.push(attempt1);

            // Only do this if there's already a suffix node (if there isn't, we can't add the / because a slash at the very end of an xpath string isn't valid xpath)
            if(xPathSuffix.length > 0 && xPathSuffix.substring(0, 2) !== "//"){ // Also want to make sure we're not inserting more slashes than are allowed in a row (at most 2 in a row)
                // Try the same thing, except with an extra / inserted on the right. So that this could match values whose DOM node is deeper
                const nodeXPathSubstring2 = `${nodeXPathSubstring1}/`;
                const attempt2 = tryAlternativeXPath(parentXPath, nodeXPathSubstring2, xPathSuffix, "attributeWithInsertedSlash", valuesWithoutXPath, valuesWithXPath, allValues, numRows, otherValuesToTry);
                candidateChanges.push(attempt2);
            }
        }

        // Only do this if there's already a suffix node (if there isn't, we can't add the / because a slash at the very end of an xpath string isn't valid xpath)
        // Try just ignoring/excluding this level, aka, allowing any number of levels to happen here (this could help us include values whose DOM node is not as deep, but not sure if this could over-select, select too many nodes on the page)
        if(xPathSuffix.length > 0 && xPathSuffix.substring(0, 2) !== "//"){ // Also want to make sure we're not inserting more slashes than are allowed in a row (at most 2 in a row)
            const nodeXPathSubstring = `/`;
            const attempt = tryAlternativeXPath(parentXPath, nodeXPathSubstring, xPathSuffix, "replaceWithSlash", valuesWithoutXPath, valuesWithXPath, allValues, numRows, otherValuesToTry);
            candidateChanges.push(attempt);
        }

        // Choose the best option from candidateChanges; or, if none of the options increase length of newMatchesFound, then just use original index-based substring
        // Sort in descending order of newMatchesFound.length
        /*candidateChanges.sort(function(a, b){
            return b.newMatchesFound.length - a.newMatchesFound.length;
        });*/
        
        let bestCandidateForThisLevel;

        console.log("candidateChanges 0", candidateChanges);
        if(candidateChanges.length > 0){

            /*const mostNewMatchesFound = candidateChanges[0].newMatchesFound.length;

            // Filter to only include candidates with mostNewMatchesFound; note it's ok if mostNewMatchesFound is 0; we still want to make a change to something more robust
            candidateChanges = candidateChanges.filter(obj => obj.newMatchesFound.length === mostNewMatchesFound);*/

            // We'd prefer a class or attribute change over the original index-based node, insertSlash, or replaceWithSlash if possible
            
            /*// Sort in descending order of newMatchesFound.length
            candidateChanges.sort(function(a, b){
                return b.newMatchesFound.length - a.newMatchesFound.length;
            });*/
            
            /*// Filter to see if there is at least 1 largestSnapshotLength of length 1; if so, only consider these
            const filteredBySnapshotLength = candidateChanges.filter(obj => obj.largestSnapshotLength === 1);
            if(filteredBySnapshotLength.length > 0){
                candidateChanges = filteredBySnapshotLength;
            }*/
            
            //const mostNewMatchesFound = candidateChanges[0].newMatchesFound;
            //candidateChanges = candidateChanges.filter(obj => obj.newMatchesFound.length === mostNewMatchesFound.length);
            
            // some largestSnapshotLength are 0 which is a mistake, let's filter out
            candidateChanges = candidateChanges.filter(obj => obj.largestSnapshotLength > 0);
            console.log("candidateChanges 0a", candidateChanges);

            // Sort in ascending order largestSnapshotLength (want to choose the one with the fewest matching nodes, aka, the least generic)
            candidateChanges.sort(function(a, b){
                return a.largestSnapshotLength - b.largestSnapshotLength;
            });
            console.log("candidateChanges 1", candidateChanges);
            const lowestLargestSnapshotLength = candidateChanges[0].largestSnapshotLength;
            console.log("lowestLargestSnapshotLength", lowestLargestSnapshotLength);
            if(lowestLargestSnapshotLength === 1){
                // If only 1 match, we'll want one of these filter by this
                candidateChanges = candidateChanges.filter(obj => obj.largestSnapshotLength === lowestLargestSnapshotLength);
            }
            console.log("candidateChanges 2", candidateChanges);

            if(candidateChanges.length > 0){
                candidateChanges.sort(function(a, b){
                    return b.totalMatchesFound.length - a.totalMatchesFound.length;
                });
                console.log("candidateChanges 3", candidateChanges);
                const mostTotalMatchesFound = candidateChanges[0].totalMatchesFound.length;
                console.log("mostTotalMatchesFound", mostTotalMatchesFound);
                // Filter to only include candidates with totalMatchesFound
                candidateChanges = candidateChanges.filter(obj => obj.totalMatchesFound.length === mostTotalMatchesFound);
    
            }
            console.log("candidateChanges 4", candidateChanges);

            const smallestLargestSnapshotLength = candidateChanges[0].largestSnapshotLength;
            console.log("smallestLargestSnapshotLength", smallestLargestSnapshotLength);
            // Filter to only include those with the smallestLargestSnapshotLength at this time
            candidateChanges = candidateChanges.filter(obj => obj.largestSnapshotLength === smallestLargestSnapshotLength);
            console.log("candidateChanges 5", candidateChanges);

            const filteredByClassOrAttribute = candidateChanges.filter(obj => obj.selectorType === "class" || obj.selectorType === "attribute");
            if(filteredByClassOrAttribute.length > 0){
                candidateChanges = filteredByClassOrAttribute;
            }
            console.log("candidateChanges 6", candidateChanges);

            /*// Now sort in ascending order of numExtraneousNodesFound (we want the xpath with the highest mostNewMatchesFound and then the least numExtraneousNodesFound)
            candidateChanges.sort(function(a, b){
                return a.numExtraneousNodesFound - b.numExtraneousNodesFound;
            });*/

            if(candidateChanges.length > 0){
                bestCandidateForThisLevel = candidateChanges[0];
            }
        }

        //console.log("final candidateChanges for this level", candidateChanges);
        console.log("valueExtraction bestCandidateForThisLevel", bestCandidateForThisLevel);

        //if(!bestCandidateForThisLevel || bestCandidateForThisLevel.newMatchesFound.length === 0){
        if(!bestCandidateForThisLevel){
            // No candidates at this level, so just use what we had already

            //curNodeXPathSubstring
            // Remove curNodeXPathSubstring from end of xPathPrefix
            // Add curNodeXPathSubstring to beginning of xPathSuffix
            xPathPrefix = xPathPrefix.substring(0, xPathPrefix.lastIndexOf(curNodeXPathSubstring));
            xPathSuffix = curNodeXPathSubstring + xPathSuffix;
        }else{

            //console.log("bestCandidateForThisLevel", bestCandidateForThisLevel);
            const newXPathSubstring = bestCandidateForThisLevel.nodeXPathSubstring;
            // Update bestSoFar to have improved xpaths
            //bestSoFar[valueAndXPathObj.textCandidate]
            //let index = 1; // xpath nodes are 1-indexed
            //while(true){
            //console.log("numRows for updating", numRows);
            for(let index = 1; index <= numRows; index++){
                const filledInTemplateXPath = bestCandidateForThisLevel.newTemplateXPath.replace("INSERT-ROW-INDEX-HERE", index);
                try{
                    const result = fontoxpath.evaluateXPathToNodes(filledInTemplateXPath, document.documentElement);
                    if(result[0]){
                        let textCandidate = result[0].textContent.toLowerCase();
                        // If this xpath match corresponds to one of the user specified values, update it in bestSoFar
                        
                        let textToUse = textCandidate;
                        if(!bestSoFar[textCandidate]){
                            // bestSoFar doesn't have this value, so try looking for the closest value to use
                            textToUse = findClosestString(textCandidate, Object.keys(bestSoFar));
                            console.log("textToUse", textToUse);
                        }

                        // In case xPath textContent string doesn't exactly match param values (because user typed like 'home run' for param value instead of 'home runs' which is what appears on the page)
                        if(bestSoFar[textToUse]){
                            bestSoFar[textToUse].xPath = filledInTemplateXPath;
                            bestSoFar[textToUse].templateXPath = bestCandidateForThisLevel.newTemplateXPath;
                            bestSoFar[textToUse].commonXPathPrefix = bestCandidateForThisLevel.newTemplateXPath.substring(0, bestCandidateForThisLevel.newTemplateXPath.indexOf("[INSERT-ROW-INDEX-HERE]"));
                            bestSoFar[textToUse].commonXPathSuffix = bestCandidateForThisLevel.newTemplateXPath.substring(bestCandidateForThisLevel.newTemplateXPath.lastIndexOf("[INSERT-ROW-INDEX-HERE]") + "[INSERT-ROW-INDEX-HERE]".length);
                        }

                        // Update valuesWithoutXPath and valuesWithXPath accordingly
                        //if(valuesWithoutXPath.includes(textCandidate)){
                        if(indexOfCaseInsensitive(valuesWithoutXPath, textToUse) > -1){
                            // Remove from valuesWithoutXPath
                            //const indexInList = valuesWithoutXPath.indexOf(textCandidate);
                            const indexInList = indexOfCaseInsensitive(valuesWithoutXPath, textToUse);
                            valuesWithoutXPath.splice(indexInList, 1);

                            // Add to valuesWithXPath
                            valuesWithXPath.push(textToUse);
                        }

                    }else{
                        // filledInTemplateXPath didn't work for this row, so let's just use what we have in bestSoFar already?
                    }
                }catch{
                }
            }

            xPathPrefix = xPathPrefix.substring(0, xPathPrefix.lastIndexOf(curNodeXPathSubstring));
            xPathSuffix = newXPathSubstring + xPathSuffix;
        }
        curNode = curNode.parentNode;
    }

    //console.log("makeXPathsMoreRobust bestSoFar", bestSoFar);
    //console.log("xPathPrefix", xPathPrefix);
    //console.log("xPathSuffix", xPathSuffix);

    const newValueXPathObjList = Object.values(bestSoFar);
    //return newValueXPathObjList;
    return {
        newValueXPathObjList,
        xPathSuffix,
        rowPrefix
    };
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
    var parentNodesContainingKeyword = fontoxpath.evaluateXPathToNodes(`${embeddedWebsitePrefix} //text()[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), \"${positiveExamplesList[0].toLowerCase()}\")] /..`, document.documentElement);
    
    for(let matchingItemIndex = 0; matchingItemIndex < parentNodesContainingKeyword.length; matchingItemIndex++){
        // If we don't care about whether it's an exact string match, then always proceed
        // If we do care that it is an exact string match, then check that before proceeding
        if(!exactStringBoolean || parentNodesContainingKeyword[matchingItemIndex].textContent.toLowerCase() === positiveExamplesList[0].toLowerCase()){
            var parentNodeOfTextNodeXPath = getXPathForElement(parentNodesContainingKeyword[matchingItemIndex], document);
            
            if(!parentNodeOfTextNodeXPath.includes("script") && !parentNodeOfTextNodeXPath.includes("style")){ // We don't want to include text that's within a <script> node
                // Use parentNodeOfTextNodeXPath as the full xpath (and then we can call textContent on the result)
                
                // Now, traverse up through the DOM
                var ancestorNode = parentNodesContainingKeyword[matchingItemIndex];
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

                            var candidate = fontoxpath.evaluateXPathToNodes(xPathDownSiblingToQuery, document.documentElement);
                            if(candidate[0]){
                                var textCandidate = candidate[0].textContent;
                                if(textCandidate !== ""){
                                    // using * so that later we can loop through all children at the level
                                    values.push({ textCandidate, xPath: xPathDownSiblingToQuery, templateXPath: `${ancestorNodeParentXPath}/*[INSERT-ROW-INDEX-HERE]${xPathDiff}`, commonXPathPrefix: ancestorNodeParentXPath, commonXPathSuffix: xPathDiff } );
                                    //values.push({ textCandidate, xPath: xPathDownSiblingToQuery, templateXPath: `${ancestorNodeXPath}/${siblingNode.tagName.toLowerCase()}[INSERT-ROW-INDEX-HERE]${xPathDiff}`, commonXPathPrefix: ancestorNodeXPath, commonXPathSuffix: xPathDiff } );
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