import React from 'react';
import _ from 'lodash';
import styles from './NaturalLanguage.module.css';

function RegularTextItem(props){
    return (
        <span
            className={styles.inputNaturalLanguage}
            start-index={props.startIndex}
            end-index={props.endIndex}
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
                    onChange={(e) => this.props.handleParamValueChange(e, i, this.props.startIndex, this.props.endIndex)}
                >
                </input>
                <button
                    onClick={() => this.props.removeValue(i, this.props.startIndex, this.props.endIndex)}
                >x</button>
            </li>
        );

        return (
            <span
                className={styles.container}
                onMouseEnter={() => this.props.onMouseEnter(this.props.startIndex, this.props.endIndex)}
                onMouseLeave={() => this.props.onMouseLeave(this.props.startIndex, this.props.endIndex)}
            >
                {hovered ? (
                    <button
                        className={styles.removeButton}
                        onClick={() => this.props.removeParam(this.props.startIndex, this.props.endIndex)}
                    >x</button>
                ) : (
                    <span></span>
                )}
                <input
                    className={`${styles.paramText} ${styles.inputNaturalLanguage}`}
                    start-index={this.props.startIndex}
                    end-index={this.props.endIndex}
                    type="text"
                    value={this.props.paramName}
                    onChange={(e) => this.props.handleParamNameChange(e, this.props.startIndex, this.props.endIndex)}
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
                            onClick={() => this.props.handleAddBlankParamValue(this.props.startIndex, this.props.endIndex)}
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
        for (let i = 0; i < props.text.length; i++) {
            const char = props.text[i];
            initialTextItems.push(
                {
                    text: char,
                    startIndex: i,
                    endIndex: i+1,
                    isParam: false,
                    paramName: "",
                    possibleValues: [],
                    hovered: false
                }
            );
        }

        this.state = {
            text: props.text,
            textItems: initialTextItems,
            inEditMode: false
        }
    }

    handleTextSelection(){
        
        // Get currently selected text
        const selectionObj = window.getSelection();
        console.log("selectionObj", selectionObj);
        const selectedText = selectionObj.toString();
    
        // Ignore if single cursor click (i.e., no text selected)
        if(selectedText.length > 0){
            console.log("selectionObj", selectionObj);
            console.log("selectedText", selectedText);
    
            // Create a param from this text
            
            // Get start and end indices
            const anchorElement= selectionObj.anchorNode.parentElement;
            //console.log("anchorElement", anchorElement);
            const firstIndex = parseInt(anchorElement.getAttribute("start-index"));
            //console.log("startIndex", startIndex);
            const focusElement = selectionObj.focusNode.parentElement;
            //console.log("focusElement", focusElement);
            const lastIndex = parseInt(focusElement.getAttribute("end-index"));
            //console.log("endIndex", endIndex);

            // Only makes sense to highlight text if it's a text span that got selected (so ensure both indices are not NaN)
            if(!isNaN(firstIndex) && !isNaN(lastIndex)){
                // Make sure startIndex is smaller than endIndex (regardless of whether user dragged from left-to-right or right-to-left)
                let startIndex;
                let endIndex;
                if(firstIndex < lastIndex){
                    startIndex = firstIndex;
                    endIndex = lastIndex;
                }else{
                    startIndex = lastIndex-1; // -1 to fix offset since we had grabbed end-index instead of start-index
                    endIndex = firstIndex+1; // +1 to fix offset since we had grabbed start-index instead of end-index
                }

                // Clear text selection
                selectionObj.removeAllRanges();

                // Find corresponding items in textItems and replace them with a single param item
                // Filter to remove items
                const updatedTextItems = this.state.textItems.filter(
                    function(item){
                        return item.startIndex < startIndex || item.endIndex > endIndex;
                    }
                );
                
                // Append new combined param item
                updatedTextItems.push({
                    text: selectedText,
                    startIndex: startIndex,
                    endIndex: endIndex,
                    isParam: true,
                    //paramName: "",
                    paramName: "<enter param name here>",
                    possibleValues: [selectedText],
                    hovered: true
                });

                // Update state (update textItems as appropriate)
                this.setState({
                    textItems: updatedTextItems
                });
            }

            this.exitEditMode();
        }else{
            // Selection length is 0, so just a single cursor click
            
            // Check selectionObj and only set edit mode to true if this is the outer text (e.g., not part of the param form)
            console.log("selectionObj.anchorNode.parentElement", selectionObj.anchorNode.parentElement);
            console.log('selectionObj.anchorNode.parentElement.getAttribute("start-index")', selectionObj.anchorNode.parentElement.getAttribute("start-index"));
            if(selectionObj.anchorNode.parentElement.getAttribute("start-index")){
                // Assume this means the user is trying to edit text, so let's update inEditMode
                this.setState({
                    inEditMode: true
                });

                // This is a bit hacky, but we want to make sure to give the contentEditable area focus as soon as the user clicks it (don't want them to have to click twice)
                setTimeout(function(obj){
                    obj.mainText.focus();
                }, 0, this);
            }
        }
    }

    exitEditMode() {
        this.setState({
            inEditMode: false
        });
    }

    handleOnMouseEnter(startIndex, endIndex, e){
        console.log("handleOnMouseEnter");
        console.log("startIndex", startIndex);
        console.log("endIndex", endIndex);
    
        // Change 'hovered' attribute for the item in textItems that has startIndex, endIndex
        // Need to loop through this.state.textItems to find correct item
        this.operateOnItem(startIndex, endIndex, function(item, index){
            const items = _.cloneDeep(this.state.textItems);
            items[index].hovered = true;

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
    }
    
    handleOnMouseLeave(startIndex, endIndex, e){
        console.log("handleOnMouseLeave");
        console.log("startIndex", startIndex);
        console.log("endIndex", endIndex);
    
        // Change 'hovered' attribute for the item in textItems that has startIndex, endIndex
        // Need to loop through this.state.textItems to find correct item
        this.operateOnItem(startIndex, endIndex, function(item, index){
            const items = _.cloneDeep(this.state.textItems);
            items[index].hovered = false;

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
    }

    handleParamNameChange(e, startIndex, endIndex) {
        console.log("handleParamNameChange");
        console.log("e", e);
        this.operateOnItem(startIndex, endIndex, function(item, index){
            console.log("e.target.value", e.target.value);
            const items = _.cloneDeep(this.state.textItems);
            items[index].paramName = e.target.value;

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
        this.exitEditMode();
    }

    handleParamValueChange(e, i, startIndex, endIndex) {
        console.log("handleParamValueChange");
        console.log("e", e);
        this.operateOnItem(startIndex, endIndex, function(item, index){
            console.log("e.target.value", e.target.value);
            const items = _.cloneDeep(this.state.textItems);
            items[index].possibleValues[i] = e.target.value;

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
        this.exitEditMode();
    }

    handleAddBlankParamValue(startIndex, endIndex){
        console.log("handleAddBlankParamValue");
        this.operateOnItem(startIndex, endIndex, function(item, index){
            const items = _.cloneDeep(this.state.textItems);
            items[index].possibleValues.push("");

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
        this.exitEditMode();
    }

    removeParam(startIndex, endIndex, e){
        console.log("removeParam");
        console.log("startIndex", startIndex);
        console.log("endIndex", endIndex);

        // Need to replace this item with a list of items, one per letter

        // Change 'isParam' attribute for the item in textItems that has startIndex, endIndex to false, to clear param
        // Need to loop through this.state.textItems to find correct item
        this.operateOnItem(startIndex, endIndex, function(item, index){
            //console.log("index", index);
            //console.log("item.text", item.text);
            const items = _.cloneDeep(this.state.textItems);
            // Create new item for each letter. Append to end of list (order doesn't matter, since we sort before rendering)
            for (let i = 0; i < item.text.length; i++) {
                const char = item.text[i];
                items.push(
                    {
                        text: char,
                        startIndex: startIndex + i, // to account for the chars ahead of this param
                        endIndex: startIndex + i+1, // to account for the chars ahead of this param
                        isParam: false,
                        paramName: "",
                        possibleValues: [],
                        hovered: false
                    }
                );
            }

            // Remove this item from the list
            items.splice(index, 1);

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
        this.exitEditMode();
    }

    removeValue(i, startIndex, endIndex, e){
        console.log("removeValue");
        console.log("i", i);
        console.log("startIndex", startIndex);
        console.log("endIndex", endIndex);

        this.operateOnItem(startIndex, endIndex, function(item, index){
            const items = _.cloneDeep(this.state.textItems);

            // Remove this particular param value
            items[index].possibleValues.splice(i, 1);

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
        this.exitEditMode();
    }

    operateOnItem(startIndex, endIndex, callback){
        for(let i = 0; i < this.state.textItems.length; i++){
            const textItem = this.state.textItems[i];
            if(textItem.startIndex === startIndex && textItem.endIndex === endIndex){
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

        // Sort textItems to make sure it's in ascending order by startIndex
        textItems.sort(function(firstEl, secondEl){
            return firstEl.startIndex - secondEl.startIndex;
        });

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
                            startIndex={textItem.startIndex}
                            endIndex={textItem.endIndex}
                            paramName={textItem.paramName}
                            possibleValues={textItem.possibleValues}
                            onMouseEnter={() => this.handleOnMouseEnter(textItem.startIndex, textItem.endIndex)}
                            onMouseLeave={() => this.handleOnMouseLeave(textItem.startIndex, textItem.endIndex)}
                            removeParam={() => this.removeParam(textItem.startIndex, textItem.endIndex)}
                            removeValue={(i) => this.removeValue(i, textItem.startIndex, textItem.endIndex)}
                            handleParamNameChange={(e) => this.handleParamNameChange(e, textItem.startIndex, textItem.endIndex)}
                            handleAddBlankParamValue={() => this.handleAddBlankParamValue(textItem.startIndex, textItem.endIndex)}
                            handleParamValueChange={(e, i) => this.handleParamValueChange(e, i, textItem.startIndex, textItem.endIndex)}
                            hovered={textItem.hovered}
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
                            startIndex={textItem.startIndex}
                            endIndex={textItem.endIndex}
                        />
                    </span>
                );
            }
        });

        return (
            <div>
                <div
                    contentEditable={this.state.inEditMode}
                    className={styles.request}
                    onMouseUp={() => this.handleTextSelection()}
                    onBlur={() => this.exitEditMode()}
                    ref={(input) => { this.mainText = input; }} 
                >
                    {domTextItems}
                </div>
                { this.state.inEditMode && <button>Save</button> }
            </div>
        );
    }
}