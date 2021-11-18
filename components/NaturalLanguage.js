import React, {useRef} from 'react';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import styles from './NaturalLanguage.module.css';

function RegularTextItem(props){
    const textElement = useRef(null);

    let saveButton;
    if(props.uuidInEditMode === props.uuid){
        saveButton = <button
                        onClick={() => props.handleSave(textElement)}
                        className={styles.saveButton}
                    >Save</button>;
    }else{
        saveButton = <button
                        onClick={() => props.handleSave(textElement)}
                        className={`${styles.saveButton} ${styles.displayNone}`}
                    >Save</button>;
    }

    return (
        <span
            className={styles.relative}
        >
            <span
                className={`${styles.inputNaturalLanguage} ${(props.uuidInEditMode === props.uuid ? styles.editBackground : '')} ${(props.uuidInEditMode && props.uuidInEditMode !== props.uuid ? styles.grayedOut : '')}`}
                uuid={props.uuid}
                text-item-type="regular"
                contentEditable={props.uuidInEditMode === props.uuid}
                onMouseUp={() => props.handleTextSelection(textElement, props.uuid)}
                ref={textElement}
            >
                {props.text}
            </span>
            {saveButton}
        </span>
    );
}

class UserProvidedExamples extends React.Component {
    render(){
        const possibleValues = this.props.possibleValues.map((value, i) =>
            <li
                // key={`${value}_${i}`}
                //key={value}
            >
                <input
                    className={`${(this.props.uuidInEditMode && this.props.uuidInEditMode !== this.props.uuid ? styles.grayedOut : '')}`}
                    type="text"
                    value={value}
                    onChange={(e) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                    disabled={this.props.uuidInEditMode}
                >
                </input>
                <button
                    onClick={() => this.props.removeValue(i, this.props.uuid)}
                    className={styles.removeValueButton}
                    disabled={this.props.uuidInEditMode}
                >x</button>
            </li>
        );
        return (
            <div
                className={styles.paramDataChunk}
            >
                Give some examples:
                <ul>{possibleValues}</ul>
                <button
                    onClick={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                    className={styles.addValuesButton}
                    disabled={this.props.uuidInEditMode}
                >
                    Add another value
                </button>
            </div>
        )
    }
}

class FreeformParam extends React.Component {
    render(){
        return (
            <div>
                <div>Freeform</div>
                <UserProvidedExamples
                    possibleValues={this.props.possibleValues}
                    handleAddBlankParamValue={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                    handleParamValueChange={(e, i) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                    uuidInEditMode={this.props.uuidInEditMode}
                    removeValue={(i) => this.props.removeValue(i, this.props.uuid)}
                />
            </div>
        );
    }
}
class EnumerationParam extends React.Component {
    render(){
        return (
            <div>
                <div>Enumeration</div>
                <UserProvidedExamples
                    possibleValues={this.props.possibleValues}
                    handleAddBlankParamValue={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                    handleParamValueChange={(e, i) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                    uuidInEditMode={this.props.uuidInEditMode}
                    removeValue={(i) => this.props.removeValue(i, this.props.uuid)}
                />
            </div>
        );
    }
}
class DateParam extends React.Component {
    render(){
        return (
            <div>
                <div>Date</div>
                <div
                    className={styles.paramDataChunk}
                >
                    Are there any restrictions on this date?
                    <div>
                        <input
                            type="radio"
                            name={`dateRestrictions_${this.props.uuid}`}
                            value="past"
                            checked={this.props.dateRestriction === "past"}
                            onChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)} />
                        <label htmlFor="past">Restricted to dates in the past</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name={`dateRestrictions_${this.props.uuid}`}
                            value="future"
                            checked={this.props.dateRestriction === "future"}
                            onChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)} />
                        <label htmlFor="future">Restricted to dates in the future</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name={`dateRestrictions_${this.props.uuid}`}
                            value="none"
                            checked={this.props.dateRestriction === "none"}
                            onChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)} />
                        <label htmlFor="none">No restrictions</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name={`dateRestrictions_${this.props.uuid}`}
                            value="other"
                            checked={this.props.dateRestriction === "other"}
                            onChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)} />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
            </div>
        );
    }
}
class NumberParam extends React.Component {
    render(){
        return (
            <div>
                <div>Number</div>
                <div
                    className={styles.paramDataChunk}
                >
                    Are there any restrictions on this number?
                    <div>
                        <input
                            type="checkbox"
                            name={`numberRestrictions_${this.props.uuid}`}
                            value="integers"
                            checked={this.props.restrictedToIntegers}
                            onChange={(e) => this.props.handleParamNumberRestrictionChange(e, "restrictedToIntegers", this.props.uuid)} />
                        <label htmlFor="integers">Restricted to integers</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name={`numberRestrictions_${this.props.uuid}`}
                            value="range"
                            checked={this.props.restrictedToRange}
                            onChange={(e) => this.props.handleParamNumberRestrictionChange(e, "restrictedToRange", this.props.uuid)} />
                        <label htmlFor="range">Restricted to range</label>
                    </div>
                </div>
            </div>
        );
    }
}

class ParamTextItem extends React.Component {
    render() {
        const hovered = this.props.hovered;
        console.log("hovered", hovered);

        // Based on what this.props.paramTypeData.type is, render appropriate type
        let paramTypeSpecificForm = ""; // empty unless there is a param type we should render
        if(this.props.paramTypeData.type.length > 0){
            if(this.props.paramTypeData.type === "freeform"){
                paramTypeSpecificForm = <FreeformParam
                                            possibleValues={this.props.paramTypeData.possibleValues}
                                            handleAddBlankParamValue={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                                            handleParamValueChange={(e, i) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            removeValue={(i) => this.props.removeValue(i, this.props.uuid)}
                                        />;
            }else if(this.props.paramTypeData.type === "enumeration"){
                paramTypeSpecificForm = <EnumerationParam
                                            possibleValues={this.props.paramTypeData.possibleValues}
                                            handleAddBlankParamValue={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                                            handleParamValueChange={(e, i) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            removeValue={(i) => this.props.removeValue(i, this.props.uuid)}
                                        />;
            }else if(this.props.paramTypeData.type === "date"){
                paramTypeSpecificForm = <DateParam
                                            dateRestriction={this.props.paramTypeData.dateRestriction}
                                            uuid={this.props.uuid}
                                            handleParamDateRestrictionChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)}
                                        />;
            }else if(this.props.paramTypeData.type === "number"){
                paramTypeSpecificForm = <NumberParam
                                            restrictedToIntegers={this.props.paramTypeData.restrictedToIntegers}
                                            restrictedToRange={this.props.paramTypeData.restrictedToRange}
                                            uuid={this.props.uuid}
                                            handleParamNumberRestrictionChange={(e, restrictionToChange) => this.props.handleParamNumberRestrictionChange(e, restrictionToChange, this.props.uuid)}
                                        />;
            }
        }

        return (
            <span
                className={`${styles.container} ${(this.props.uuidInEditMode && this.props.uuidInEditMode !== this.props.uuid ? styles.grayedOut : '')}`}
                onMouseEnter={() => this.props.onMouseEnter(this.props.uuid)}
                onMouseLeave={() => this.props.onMouseLeave(this.props.uuid)}
            >
                {hovered ? (
                    <button
                        className={styles.removeButton}
                        onClick={() => this.props.removeParam(this.props.uuid)}
                        disabled={this.props.uuidInEditMode}
                    >x</button>
                ) : (
                    <span></span>
                )}
                <input
                    className={`${styles.paramText} ${styles.inputNaturalLanguage} ${(this.props.uuidInEditMode && this.props.uuidInEditMode !== this.props.uuid ? styles.grayedOut : '')}`}
                    uuid={this.props.uuid}
                    text-item-type="param"
                    type="text"
                    value={this.props.paramName}
                    onChange={(e) => this.props.handleParamNameChange(e, this.props.uuid)}
                    disabled={this.props.uuidInEditMode}
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
                    <select
                        name={`paramType_${this.props.uuid}`}
                        value={this.props.paramTypeData.type}
                        onChange={(e) => this.props.handleParamTypeChange(e, this.props.uuid)}
                    >
                        <option value="">--Select parameter type--</option>
                        <option value="freeform">Something the user types in</option>
                        <option value="enumeration">Something user selects from a list</option>
                        <option value="date">A date</option>
                        <option value="number">A number</option>
                    </select>

                    {paramTypeSpecificForm}

                    <label
                        className={styles.possibleValuesArea}
                    >
                        <div
                            className={styles.paramDataChunk}
                        >
                            Parameter is optional:
                            <input
                                name={`paramOptional_${this.props.uuid}`}
                                type="checkbox"
                                checked={this.props.paramIsOptional}
                                onChange={(e) => this.props.handleParamOptionalChange(e, this.props.uuid)} />
                        </div>
                        <div
                            className={styles.paramDataChunk}
                        >
                            How many values allowed at a time?
                            <div>
                                <input
                                    type="radio"
                                    name={`numValuesAllowed_${this.props.uuid}`}
                                    value="one"
                                    checked={!this.props.paramMultipleValuesAllowed}
                                    onChange={(e) => this.props.handleParamNumValuesAllowedChange(e, this.props.uuid)} />
                                <label htmlFor="one">1</label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    name={`numValuesAllowed_${this.props.uuid}`}
                                    value="multiple"
                                    checked={this.props.paramMultipleValuesAllowed}
                                    onChange={(e) => this.props.handleParamNumValuesAllowedChange(e, this.props.uuid)} />
                                <label htmlFor="multiple">Multiple</label>
                            </div>
                        </div>
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
                hovered: false,
                paramIsOptional: false,
                paramMultipleValuesAllowed: false,
                paramTypeData: null
            }
        );

        this.state = {
            text: props.text,
            textItems: initialTextItems,
            //uuidInEditMode: false
            uuidInEditMode: null,
            websiteUrl: props.websiteUrl
        }
    }

    handleTextSelection(textElement, uuid){
        
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
            if(!this.state.uuidInEditMode){
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
                            paramName: "<param name>",
                            hovered: false,
                            paramIsOptional: false,
                            paramMultipleValuesAllowed: false,
                            paramTypeData: null
                        };
                        const newParamItem = {
                            text: selectedText,
                            uuid: uuidv4(),
                            isParam: true,
                            paramName: "<param name>",
                            hovered: true,
                            paramIsOptional: false,
                            paramMultipleValuesAllowed: false,
                            paramTypeData: {
                                type: "",
                                possibleValues: [selectedText],
                            }
                        };
                        const newItemOnRight = {
                            text: textOnRight,
                            uuid: uuidv4(),
                            isParam: false,
                            paramName: "<param name>",
                            hovered: false,
                            paramIsOptional: false,
                            paramMultipleValuesAllowed: false,
                            paramTypeData: null
                        };

                        // Find corresponding item in textItems and replace with a regular text item on the left, a param item in the middle, and regular text item on the right
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
                    
                    // Assume this means the user is trying to edit text, so let's update uuidInEditMode
                    this.setState({
                        uuidInEditMode: uuid
                    });
    
                    // This is a bit hacky, but we want to make sure to give the contentEditable area focus as soon as the user clicks it (don't want them to have to click twice)
                    setTimeout(function(textElement){
                        textElement.current.focus();
                    }, 0, textElement);
                }
            }
        }
    }

    exitEditMode() {
        this.setState({
            uuidInEditMode: null
        });
    }

    handleSave(textElement){
        const newText = textElement.current.textContent;

        // update it's text in state
        this.operateOnItem(this.state.uuidInEditMode, function(item, index){
            const items = _.cloneDeep(this.state.textItems);
            items[index].text = newText;

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items,
                uuidInEditMode: null
            });
            this.exitEditMode();
        });
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
            items[index].paramTypeData.possibleValues[i] = e.target.value;

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
            items[index].paramTypeData.possibleValues.push("");

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
                paramName: "<param name>",
                hovered: false,
                paramIsOptional: false,
                paramMultipleValuesAllowed: false,
                paramTypeData: null
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
            items[index].paramTypeData.possibleValues.splice(i, 1);

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

    handleParamTypeChange(e, uuid){
        const target = e.target;
        console.log("handleParamTypeChange target", target);
        const value = target.value;
        
        this.operateOnItem(uuid, function(item, index){
            const items = _.cloneDeep(this.state.textItems);

            // Update paramOptional checkbox value
            let paramTypeData = {
                type: value,
                possibleValues: items[index].paramTypeData.possibleValues
            };
            if(value === "freeform"){
                // Nothing else to set
            }else if(value === "enumeration"){
                // Nothing else to set
            }else if(value === "date"){
                paramTypeData.dateRestriction = "";
            }else if(value === "number"){
                paramTypeData.restrictedToIntegers = false;
                paramTypeData.restrictedToRange = false;
            }
            items[index].paramTypeData = paramTypeData;

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
    }

    handleParamOptionalChange(e, uuid){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        
        this.operateOnItem(uuid, function(item, index){
            const items = _.cloneDeep(this.state.textItems);

            // Update paramOptional checkbox value
            items[index].paramIsOptional = value;

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
    }

    handleParamNumValuesAllowedChange(e, uuid){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log("value", value);

        this.operateOnItem(uuid, function(item, index){
            const items = _.cloneDeep(this.state.textItems);

            // Update paramOptional checkbox value
            if(value === "one"){
                items[index].paramMultipleValuesAllowed = false;
            }else if(value === "multiple"){
                items[index].paramMultipleValuesAllowed = true;
            }

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
    }

    handleParamDateRestrictionChange(e, uuid){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        //console.log("value", value);

        this.operateOnItem(uuid, function(item, index){
            const items = _.cloneDeep(this.state.textItems);

            // Update radio button value
            items[index].paramTypeData.dateRestriction = value;

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
    }

    handleParamNumberRestrictionChange(e, restrictionToChange, uuid){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        // So restrictionToChange tells us which restriction to update in the state. And the new value for it will be e.target.checked
        this.operateOnItem(uuid, function(item, index){
            const items = _.cloneDeep(this.state.textItems);

            // Update checkbox button value
            items[index].paramTypeData[restrictionToChange] = value;

            // Update whole textItems to make sure we re-render
            this.setState({
                textItems: items
            });
        });
    }

/*     componentDidUpdate(){
        console.log("componentDidUpdate");
        if(this.state.uuidInEditMode){
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
                            paramTypeData={textItem.paramTypeData}
                            onMouseEnter={() => this.handleOnMouseEnter(textItem.uuid)}
                            onMouseLeave={() => this.handleOnMouseLeave(textItem.uuid)}
                            removeParam={() => this.removeParam(textItem.uuid)}
                            removeValue={(i) => this.removeValue(i, textItem.uuid)}
                            handleParamNameChange={(e) => this.handleParamNameChange(e, textItem.uuid)}
                            handleAddBlankParamValue={() => this.handleAddBlankParamValue(textItem.uuid)}
                            handleParamValueChange={(e, i) => this.handleParamValueChange(e, i, textItem.uuid)}
                            hovered={textItem.hovered}
                            uuidInEditMode={this.state.uuidInEditMode}
                            paramIsOptional={textItem.paramIsOptional}
                            paramMultipleValuesAllowed={textItem.paramMultipleValuesAllowed}
                            handleParamOptionalChange={(e) => this.handleParamOptionalChange(e, textItem.uuid)}
                            handleParamTypeChange={(e) => this.handleParamTypeChange(e, textItem.uuid)}
                            handleParamNumValuesAllowedChange={(e) => this.handleParamNumValuesAllowedChange(e, textItem.uuid)}
                            handleParamDateRestrictionChange={(e) => this.handleParamDateRestrictionChange(e, textItem.uuid)}
                            handleParamNumberRestrictionChange={(e, restrictionToChange) => this.handleParamNumberRestrictionChange(e, restrictionToChange, textItem.uuid)}
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
                            uuidInEditMode={this.state.uuidInEditMode}
                            handleSave={(textElement) => this.handleSave(textElement)}
                            handleTextSelection={(textElement) => this.handleTextSelection(textElement, textItem.uuid)}
                        />
                    </span>
                );
            }
        });

        return (
            <div
                // className={(this.state.uuidInEditMode ? styles.editBackground : '')}
            >
                <div
                    className={styles.request}
                >
                    {domTextItems}
                </div>
                <iframe
                    width="100%"
                    height="700"
                    src={this.state.websiteUrl}>
                </iframe>

            </div>
        );
    }
}