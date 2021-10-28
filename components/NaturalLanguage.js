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

function ParamTextItem(props){
    return (
        <span
            className={styles.paramText}
            start-index={props.startIndex}
            end-index={props.endIndex}
        >
            {props.text}
        </span>
    );
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
                    possibleValues: null
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
                possibleValues: null
            });

            // Update state (update textItems as appropriate)
            this.setState({
                textItems: updatedTextItems
            });
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