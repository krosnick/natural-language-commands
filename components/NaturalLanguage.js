import React from 'react';
import styles from './NaturalLanguage.module.css';

function RegularTextItem(props){
    return (
        <span
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
                    className={styles.paramText}
                    start-index={this.props.startIndex}
                    end-index={this.props.endIndex}
                >
                    {this.props.text}
                </span>
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
                    paramName: null,
                    possibleValues: null,
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
            const startIndex = parseInt(anchorElement.getAttribute("start-index"));
            //console.log("startIndex", startIndex);
            const focusElement = selectionObj.focusNode.parentElement;
            //console.log("focusElement", focusElement);
            const endIndex = parseInt(focusElement.getAttribute("end-index"));
            //console.log("endIndex", endIndex);

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
                paramName: null,
                possibleValues: null,
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
            item.hovered = true;

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: this.state.textItems
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
            item.hovered = false;

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: this.state.textItems
            });
        });
    }

    removeParam(startIndex, endIndex, e){
        console.log("removeParam");
        console.log("startIndex", startIndex);
        console.log("endIndex", endIndex);

        // TODO
        // Need to replace this item with a list of items, one per letter

        // Change 'isParam' attribute for the item in textItems that has startIndex, endIndex to false, to clear param
        // Need to loop through this.state.textItems to find correct item
        this.operateOnItem(startIndex, endIndex, function(item, index){
            /*item.isParam = false;
            item.paramName = null;
            item.possibleValues = null;
            item.hovered = false;*/

            const items = this.state.textItems.slice();
            // TODO - Create new item for each letter. Append to end of list (order doesn't matter, since we sort before rendering)
            for (let i = 0; i < item.text.length; i++) {
                const char = item.text[i];
                items.push(
                    {
                        text: char,
                        startIndex: index + i,
                        endIndex: index + i+1,
                        isParam: false,
                        paramName: null,
                        possibleValues: null,
                        hovered: false
                    }
                );
            }

            // TODO - remove this item from the list
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
                            onMouseEnter={() => this.handleOnMouseEnter(textItem.startIndex, textItem.endIndex)}
                            onMouseLeave={() => this.handleOnMouseLeave(textItem.startIndex, textItem.endIndex)}
                            removeParam={() => this.removeParam(textItem.startIndex, textItem.endIndex)}
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