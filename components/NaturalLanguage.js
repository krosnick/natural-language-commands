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
        return (
            <span
                className={styles.relative}
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
                <span
                    className={`${styles.paramText} ${styles.inputNaturalLanguage}`}
                    start-index={this.props.startIndex}
                    end-index={this.props.endIndex}
                >
                    {this.props.text}
                </span>
                <div
                    className={styles.paramData}
                >
                    <label>
                        Name:
                        <input
                            type="text"
                            value={this.props.paramName}
                            onChange={(e) => this.props.handleParamNameChange(e, this.props.startIndex, this.props.endIndex)}
                        />
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
            textItems: initialTextItems
        }
    }

    handleTextSelection(){
        
        // Get currently selected text
        const selectionObj = window.getSelection();
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
                paramName: "",
                possibleValues: [],
                hovered: true
            });

            // Update state (update textItems as appropriate)
            this.setState({
                textItems: updatedTextItems
            });
        }
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
                    <span key={key}>
                        <ParamTextItem
                            text={textItem.text}
                            startIndex={textItem.startIndex}
                            endIndex={textItem.endIndex}
                            paramName={textItem.paramName}
                            onMouseEnter={() => this.handleOnMouseEnter(textItem.startIndex, textItem.endIndex)}
                            onMouseLeave={() => this.handleOnMouseLeave(textItem.startIndex, textItem.endIndex)}
                            removeParam={() => this.removeParam(textItem.startIndex, textItem.endIndex)}
                            handleParamNameChange={(e) => this.handleParamNameChange(e, textItem.startIndex, textItem.endIndex)}
                            hovered={textItem.hovered}
                        />
                    </span>
                );
            }else{
                return(
                    <span key={key}>
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
            <div onMouseUp={() => this.handleTextSelection()}>
                {domTextItems}
            </div>
        );
    }
}