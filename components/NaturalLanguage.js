import React from 'react';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import styles from './NaturalLanguage.module.css';

function RegularTextItem(props){
    return (
        <span
            className={`${styles.inputNaturalLanguage} ${(props.inEditMode === props.uuid ? styles.editBackground : '')}`}
            uuid={props.uuid}
            text-item-type="regular"
            contentEditable={props.inEditMode === props.uuid}
        >
            {props.text}
        </span>
    );
}

class ParamTextItem extends React.Component {
    render() {
        const hovered = this.props.hovered;
        console.log("hovered", hovered);

        const possibleValues = this.props.possibleValues.map((value, i) =>
            <li
                // key={`${value}_${i}`}
                //key={value}
            >
                <input
                    type="text"
                    value={value}
                    onChange={(e) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                    disabled={this.props.inEditMode}
                >
                </input>
                <button
                    onClick={() => this.props.removeValue(i, this.props.uuid)}
                    disabled={this.props.inEditMode}
                >x</button>
            </li>
        );

        return (
            <span
                className={styles.container}
                onMouseEnter={() => this.props.onMouseEnter(this.props.uuid)}
                onMouseLeave={() => this.props.onMouseLeave(this.props.uuid)}
            >
                {hovered ? (
                    <button
                        className={styles.removeButton}
                        onClick={() => this.props.removeParam(this.props.uuid)}
                        disabled={this.props.inEditMode}
                    >x</button>
                ) : (
                    <span></span>
                )}
                <input
                    className={`${styles.paramText} ${styles.inputNaturalLanguage}`}
                    uuid={this.props.uuid}
                    text-item-type="param"
                    type="text"
                    value={this.props.paramName}
                    onChange={(e) => this.props.handleParamNameChange(e, this.props.uuid)}
                    disabled={this.props.inEditMode}
                >
                </input>
                {/* <span
                    className={`${styles.paramText} ${styles.inputNaturalLanguage}`}
                    start-index={this.props.startIndex}
                    end-index={this.props.endIndex}
                >
                    {this.props.text}
                </span> */}
                <div
                    className={styles.paramData}
                >
                    {/* <label>
                        Name:
                        <input
                            type="text"
                            value={this.props.paramName}
                            onChange={(e) => this.props.handleParamNameChange(e, this.props.startIndex, this.props.endIndex)}
                            className={styles.paramDataChunk}
                        />
                    </label> */}
                    <label
                        className={styles.possibleValuesArea}
                    >
                        Possible values:
                        <ul>{possibleValues}</ul>
                        <button
                            onClick={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                            disabled={this.props.inEditMode}
                        >
                            Add another value
                        </button>
                    </label>
                </div>
            </span>
        );
    }
}

export default class NaturalLanguage extends React.Component {
    constructor(props){
        super(props);

        const initialTextItems = [];
        initialTextItems.push(
            {
                text: props.text,
                uuid: uuidv4(),
                isParam: false,
                paramName: "",
                possibleValues: [],
                hovered: false
            }
        );

        this.state = {
            text: props.text,
            textItems: initialTextItems,
            //inEditMode: false
            inEditMode: null
        }
    }

    handleTextSelection(){
        
        // Get currently selected text
        const selectionObj = window.getSelection();
        console.log("selectionObj", selectionObj);
        const selectedText = selectionObj.toString();
        console.log("selectedText", selectedText);
        
        // Confirm that anchorNode and focusNode have the same parent
            // (if they don't, then don't make a parameter, it doesn't make sense, because basically the user is selecting text that includes an existing param too)
            // or, if no anchorNode, then just ignore, not a real selection
        if(selectionObj.anchorNode && selectionObj.focusNode && selectionObj.anchorNode.parentElement === selectionObj.focusNode.parentElement){
            console.log("selectionObj.anchorNode.parentElement === selectionObj.focusNode.parentElement");
            
            // Ignore if in edit mode
            if(!this.state.inEditMode){
                if(selectedText.length > 0){
                    
                    // Now need to split this 
                    // Create a param from this text
                    
                    const anchorOffset = selectionObj.anchorOffset;
                    const focusOffset = selectionObj.focusOffset;

                    if(!isNaN(anchorOffset) && !isNaN(focusOffset)){
                        let startIndex = Math.min(anchorOffset, focusOffset);
                        let endIndex = Math.max(anchorOffset, focusOffset);
                        
                        const textOnLeft = selectionObj.anchorNode.textContent.substring(0, startIndex);
                        const textOnRight = selectionObj.anchorNode.textContent.substring(endIndex);

                        const newItemOnLeft = {
                            text: textOnLeft,
                            uuid: uuidv4(),
                            isParam: false,
                            paramName: "<enter param name here>",
                            possibleValues: [],
                            hovered: false
                        };
                        const newParamItem = {
                            text: selectedText,
                            uuid: uuidv4(),
                            isParam: true,
                            paramName: "<enter param name here>",
                            possibleValues: [selectedText],
                            hovered: true
                        };
                        const newItemOnRight = {
                            text: textOnRight,
                            uuid: uuidv4(),
                            isParam: false,
                            paramName: "<enter param name here>",
                            possibleValues: [],
                            hovered: false
                        };

                        // Find corresponding item in textItems and replace with a regular text item on the left, a param item in the middle, and regular text item on the right
                        const uuid = selectionObj.anchorNode.parentElement.getAttribute("uuid");
                        this.operateOnItem(uuid, function(item, index){
                            const items = _.cloneDeep(this.state.textItems);
                            items.splice(index, 1, newItemOnLeft, newParamItem, newItemOnRight);

                            // Clear text selection
                            selectionObj.removeAllRanges();

                            // Update whole textItems to make sure we re-render
                            this.setState({
                                textItems: items
                            });
                        });
                    }

                    //this.exitEditMode();
                }else{
                    // Selection length is 0, so just a single cursor click
                    
                    // Check selectionObj and only set edit mode to true if this a regular text item (e.g., not part of the param form, not param text)
                    if(selectionObj.anchorNode && selectionObj.anchorNode.parentElement && selectionObj.anchorNode.parentElement.getAttribute("text-item-type") === "regular"){
                        const thisUuid = selectionObj.anchorNode.parentElement.getAttribute("uuid");
                        
                        // Assume this means the user is trying to edit text, so let's update inEditMode
                        this.setState({
                            inEditMode: thisUuid
                        });
        
                        // This is a bit hacky, but we want to make sure to give the contentEditable area focus as soon as the user clicks it (don't want them to have to click twice)
                        /*setTimeout(function(obj){
                            obj.mainText.focus();
                        }, 0, this);*/
                        setTimeout(function(){
                            document.querySelector(`[uuid="${thisUuid}"]`).focus();
                        }, 0);
                    }
                }
            }
        }
    }

    exitEditMode() {
        this.setState({
            inEditMode: null
        });
    }

    handleSave(){
        // uuid that was being edited - this.state.inEditMode
        const editedElement = document.querySelector(`[uuid="${this.state.inEditMode}"]`);
        const newText = editedElement.textContent;

        // update it's text in state
        this.operateOnItem(this.state.inEditMode, function(item, index){
            const items = _.cloneDeep(this.state.textItems);
            items[index].text = newText;

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items,
                inEditMode: null
            });
            this.exitEditMode();
        });

        // then set inEditMode to null
        // then call this.exitEditMode();

        /*console.log("handleSave");
        // Process all the text in the DOM and update textItems as appropriate
        // Get all the text elements (both regular and param)
        const textElements = document.querySelectorAll('[start-index]');

        let newTextItems;
        newTextItems = [];
        // Loop through all of these and create new textItems (i.e., completely replacing what we have already, not just modifying the existing list)
        for(let elIndex = 0; elIndex < textElements.length; elIndex++){
            const el = textElements[elIndex];
            
            // Use last item to identify new start index
            let newStartIndex;
            if(newTextItems.length > 0){
                newStartIndex = newTextItems[newTextItems.length-1].endIndex;
            }else{
                newStartIndex = 0;
            }

            if(el.getAttribute("text-item-type") === "regular"){
                // If length > 1, split into individual letters
                const elText = el.textContent;
                for (let i = 0; i < elText.length; i++) {
                    const char = elText[i];
                    newTextItems.push(
                        {
                            text: char,
                            startIndex: newStartIndex + i,
                            endIndex: newStartIndex + i+1,
                            isParam: false,
                            paramName: "",
                            possibleValues: [],
                            hovered: false
                        }
                    );
                }
                
                if(elText.length > 1){
                    // Set text in DOM to the original value?
                    const origStartIndex = parseInt(el.getAttribute("start-index"));
                    const origEndIndex = parseInt(el.getAttribute("end-index"));
                    this.operateOnItem(origStartIndex, origEndIndex, function(item, index){
                        const origText = item.text;
                        el.textContent = origText;
                    });
                }
            }else{
                // el.getAttribute("text-item-type") === "param"
                const origStartIndex = parseInt(el.getAttribute("start-index"));
                const origEndIndex = parseInt(el.getAttribute("end-index"));
                // Clone the corresponding item in this.state.textItems
                // Then change startIndex and endIndex as appropriate
                this.operateOnItem(origStartIndex, origEndIndex, function(item, index){
                    const newItem = _.cloneDeep(item);
                    const newEndIndex = newStartIndex + (origEndIndex - origStartIndex);
                    newItem.startIndex = newStartIndex;
                    newItem.endIndex = newEndIndex;
                    newTextItems.push(newItem);
                });
            }
        }

        this.setState({
            textItems: newTextItems
        });

        this.exitEditMode();*/
    }

    handleOnMouseEnter(uuid, e){
        console.log("handleOnMouseEnter");
        console.log("uuid", uuid);
    
        // Change 'hovered' attribute for the item in textItems that has uuid
        // Need to loop through this.state.textItems to find correct item
        this.operateOnItem(uuid, function(item, index){
            const items = _.cloneDeep(this.state.textItems);
            items[index].hovered = true;

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
    }
    
    handleOnMouseLeave(uuid, e){
        console.log("handleOnMouseLeave");
        console.log("uuid", uuid);
    
        // Change 'hovered' attribute for the item in textItems that has uuid
        // Need to loop through this.state.textItems to find correct item
        this.operateOnItem(uuid, function(item, index){
            const items = _.cloneDeep(this.state.textItems);
            items[index].hovered = false;

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
    }

    handleParamNameChange(e, uuid) {
        console.log("handleParamNameChange");
        console.log("e", e);
        this.operateOnItem(uuid, function(item, index){
            console.log("e.target.value", e.target.value);
            const items = _.cloneDeep(this.state.textItems);
            items[index].paramName = e.target.value;

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
        //this.exitEditMode();
    }

    handleParamValueChange(e, i, uuid) {
        console.log("handleParamValueChange");
        console.log("e", e);
        this.operateOnItem(uuid, function(item, index){
            console.log("e.target.value", e.target.value);
            const items = _.cloneDeep(this.state.textItems);
            items[index].possibleValues[i] = e.target.value;

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
        //this.exitEditMode();
    }

    handleAddBlankParamValue(uuid){
        console.log("handleAddBlankParamValue");
        this.operateOnItem(uuid, function(item, index){
            const items = _.cloneDeep(this.state.textItems);
            items[index].possibleValues.push("");

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
        //this.exitEditMode();
    }

    removeParam(uuid, e){
        console.log("removeParam");
        console.log("uuid", uuid);

        // Need to merge this item with REGULAR text items on its immediate left and right (if they exist)
        this.operateOnItem(uuid, function(item, index){
            let startingIndexToReplace = index; // default to this item's index (in case left neighbor doesn't need to be replaced)
            let numItemsToRemove = 1; // default to 1, because will definitely at least replace this item
            let mergedText = "";
            if(index > 0){
                // See if left neighbor is regular (i.e., not param); if so, merge
                if(!this.state.textItems[index-1].isParam){
                    mergedText += this.state.textItems[index-1].text;
                    startingIndexToReplace -= 1;
                    numItemsToRemove += 1;
                }
            }
            mergedText += item.text;
            if(index < this.state.textItems.length-1){
                // See if right neighbor is regular (i.e., not param); if so, merge
                if(!this.state.textItems[index+1].isParam){
                    mergedText += this.state.textItems[index+1].text;
                    numItemsToRemove += 1;
                }
            }
            console.log("mergedText", mergedText);
            
            const mergedItem = {
                text: mergedText,
                uuid: uuidv4(),
                isParam: false,
                paramName: "<enter param name here>",
                possibleValues: [],
                hovered: false
            };

            console.log("startingIndexToReplace", startingIndexToReplace);
            console.log("numItemsToRemove", numItemsToRemove);

            const items = _.cloneDeep(this.state.textItems);
            items.splice(startingIndexToReplace, numItemsToRemove, mergedItem);

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
        //this.exitEditMode();
    }

    removeValue(i, uuid, e){
        console.log("removeValue");
        console.log("i", i);
        console.log("uuid", uuid);

        this.operateOnItem(uuid, function(item, index){
            const items = _.cloneDeep(this.state.textItems);

            // Remove this particular param value
            items[index].possibleValues.splice(i, 1);

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
        //this.exitEditMode();
    }

    operateOnItem(uuid, callback){
        for(let i = 0; i < this.state.textItems.length; i++){
            const textItem = this.state.textItems[i];
            if(textItem.uuid === uuid){
                callback.call(this, textItem, i);
                //callback(textItem);
                return;
            }
        }
    }

/*     componentDidUpdate(){
        console.log("componentDidUpdate");
        if(this.state.inEditMode){
            this.mainText.focus();
        }
    } */

    render() {
        const textItems = this.state.textItems;

        // Render each item as appropriate (using TextItem component)
        const domTextItems = textItems.map((textItem, i) => {
            const key = i + "_" + textItem.text;
            if(textItem.isParam){
                return(
                    <span
                        key={key}
                        className={styles.itemContainer}
                    >
                        <ParamTextItem
                            text={textItem.text}
                            uuid={textItem.uuid}
                            paramName={textItem.paramName}
                            possibleValues={textItem.possibleValues}
                            onMouseEnter={() => this.handleOnMouseEnter(textItem.uuid)}
                            onMouseLeave={() => this.handleOnMouseLeave(textItem.uuid)}
                            removeParam={() => this.removeParam(textItem.uuid)}
                            removeValue={(i) => this.removeValue(i, textItem.uuid)}
                            handleParamNameChange={(e) => this.handleParamNameChange(e, textItem.uuid)}
                            handleAddBlankParamValue={() => this.handleAddBlankParamValue(textItem.uuid)}
                            handleParamValueChange={(e, i) => this.handleParamValueChange(e, i, textItem.uuid)}
                            hovered={textItem.hovered}
                            inEditMode={this.state.inEditMode}
                        />
                    </span>
                );
            }else{
                return(
                    <span
                        key={key}
                        className={styles.itemContainer}
                    >
                        <RegularTextItem
                            text={textItem.text}
                            uuid={textItem.uuid}
                            inEditMode={this.state.inEditMode}
                        />
                    </span>
                );
            }
        });

        let saveButton;
        if(this.state.inEditMode){
            saveButton = <button
                            onClick={() => this.handleSave()}
                            className={styles.saveButton}
                        >Save</button>;
        }else{
            saveButton = <button
                            onClick={() => this.handleSave()}
                            className={`${styles.saveButton} ${styles.displayNone}`}
                        >Save</button>;
        }

        return (
            <div
                // className={(this.state.inEditMode ? styles.editBackground : '')}
            >
                <div
                    className={styles.request}
                    onMouseUp={() => this.handleTextSelection()}
                    ref={(input) => { this.mainText = input; }} 
                >
                    {domTextItems}
                </div>
                {saveButton}
            </div>
        );
    }
}