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

function chooseBestValueSet(candidateValueSets, exampleValuesList){
    // candidateValueSets is in the format of matchingItemIndexToPossibleExtractions
    // Merge into a single list of lists
    
    var singleListOfCandidateValueSets = [];
    for(var valueSet of Object.values(candidateValueSets)){
        singleListOfCandidateValueSets = singleListOfCandidateValueSets.concat(valueSet);
    }

    var valueSetAndRecallList = [];
    for(var valueSet of singleListOfCandidateValueSets){
        // Count the number of values from exampleValuesList that appear in the set
        var numValuesFound = 0;
        for(var value of exampleValuesList){
            // Note that .includes is doing an exact string match
            //if(valueSet.includes(value)){
            //if(includesCaseInsensitive(valueSet, value)){
            if(indexOfCaseInsensitive(valueSet, value) > -1){
                numValuesFound += 1;
            }
        }
        valueSetAndRecallList.push({ valueSet, numValuesFound });
    }

    // First sort by number of values from exampleValuesList that appear in the set
    valueSetAndRecallList = valueSetAndRecallList.sort(
        // Sort by number of values from exampleValuesList that appear in the set
        function compareFn(first, second) {
            return second.numValuesFound - first.numValuesFound;
        }
    );

    if(valueSetAndRecallList.length > 0){
        // Next, sort by largest length (number of values)
        var largestNumValuesFound = valueSetAndRecallList[0].numValuesFound;
        var valueSetAndRecallListHighestRecall = valueSetAndRecallList.filter((obj => obj.numValuesFound === largestNumValuesFound));
        valueSetAndRecallListHighestRecall = valueSetAndRecallListHighestRecall.sort(function compareFn(first, second) { return second.valueSet.length - first.valueSet.length});

        // Return the first one
        return valueSetAndRecallListHighestRecall[0];
    }else{
        return {};
    }
}

// Get all possible parameter values, where exampleValuesList is a list of example values the user has provided
function getCandidateValueSets(exampleValuesList, exactStringBoolean){
    if(exampleValuesList.length === 0){
        return {};
    }

    // Look for visible text in the DOM that has value exampleValuesList[0], and then get its parent
        // We'll use exampleValuesList[0] to start the search. Shouldn't matter too much which item in the list we use
    
    var matchingItemIndexToPossibleExtractions = {};

    //var parentNodesContainingKeyword = document.evaluate(`//text()[contains(., \"${exampleValuesList[0]}\")] /..`, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    // Adapted from https://stackoverflow.com/questions/8474031/case-insensitive-xpath-contains-possible/23388974
    var parentNodesContainingKeyword = document.evaluate(`//text()[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), \"${exampleValuesList[0].toLowerCase()}\")] /..`, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    
    for(let matchingItemIndex = 0; matchingItemIndex < parentNodesContainingKeyword.snapshotLength; matchingItemIndex++){
        // If we don't care about whether it's an exact string match, then always proceed
        // If we do care that it is an exact string match, then check that before proceeding
        if(!exactStringBoolean || parentNodesContainingKeyword.snapshotItem(matchingItemIndex).textContent.toLowerCase() === exampleValuesList[0].toLowerCase()){
            var parentNodeOfTextNodeXPath = getXPathForElement(parentNodesContainingKeyword.snapshotItem(matchingItemIndex), document);
            
            if(!parentNodeOfTextNodeXPath.includes("script")){ // We don't want to include text that's within a <script> node
                // Use parentNodeOfTextNodeXPath as the full xpath (and then we can call textContent on the result)
                
                // Now, traverse up through the DOM
                var ancestorNode = parentNodesContainingKeyword.snapshotItem(matchingItemIndex);
                var possibleExtractions = [];
                while(ancestorNode.parentNode){ // i.e., until we reach the top of the document
                    // For each of ancestorNode's siblings, try querying the partial selector and see if there's a match (and if the match is "meaningful"?)
                    var siblingNodes = ancestorNode.parentNode.children;
                    var ancestorNodeXPath = getXPathForElement(ancestorNode, document);
                    var xPathDiff = parentNodeOfTextNodeXPath.substring(ancestorNodeXPath.length);

                    var values = [];
                    var numberXPathQueryUnsuccessful = 0; // In the end, we might not even use this in our heuristics
                    for(var siblingNode of siblingNodes){
                        var siblingNodeXPath = getXPathForElement(siblingNode, document);

                        if(!siblingNodeXPath.includes("script")){ // We don't want to include text that's within a <script> node
                            var xPathDownSiblingToQuery = siblingNodeXPath + xPathDiff;

                            var candidate = document.evaluate(xPathDownSiblingToQuery, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                            if(candidate.snapshotItem(0)){
                                var textCandidate = candidate.snapshotItem(0).textContent;
                                if(textCandidate !== ""){
                                    values.push(textCandidate);
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

export function getValues(exampleValuesList, valuesToNotInclude){
    var candidates = getCandidateValueSets(exampleValuesList, true);
    var best = chooseBestValueSet(candidates, exampleValuesList);
    var valueSet = [];
    if(best.valueSet){ // Because if no matches, it'll be an empty object
        valueSet = best.valueSet;
    }

    // Want to include all values (case insensitive) from exampleValuesList even if they weren't found on the page (because the user explicitly specified them)
    //valueSet = _.union(valueSet, exampleValuesList);
    for(let value of exampleValuesList){
        const indexInList = indexOfCaseInsensitive(valueSet, value);
        if(indexInList > -1){
            // Value is already included, but we'll replace with user-given "value" to make sure it matches user-given case
            valueSet[indexInList] = value;
        }else{
            // Value isn't already included. We want to make sure to include it
            valueSet.push(value);
        }
    }

    // Want to make sure that no values in valuesToNotInclude appear in valueSet
    for(let value of valuesToNotInclude){
        const indexInList = indexOfCaseInsensitive(valueSet, value);
        if(indexInList > -1){
            // In valueSet; remove it
            valueSet.splice(indexInList, 1);
        }
    }
    return valueSet;
}