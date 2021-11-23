import React, {useRef} from 'react';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import styles from './NaturalLanguage.module.css';

function RegularTextItem(props){
    const textElement = useRef(null);

    let saveButton;
    if(props.uuidInEditMode === props.uuid){
        saveButton = <button
                        onClick={() => props.handleSave(textElement, props.uuid)}
                        className={styles.saveButton}
                    >Save</button>;
    }else{
        saveButton = <button
                        onClick={() => props.handleSave(textElement, props.uuid)}
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
                <UserProvidedExamples
                    possibleValues={this.props.possibleValues}
                    handleAddBlankParamValue={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                    handleParamValueChange={(e, i) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                    uuidInEditMode={this.props.uuidInEditMode}
                    removeValue={(i) => this.props.removeValue(i, this.props.uuid)}
                />
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
            </div>
        );
    }
}
class DateParam extends React.Component {
    render(){
        return (
            <div>
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
                <div
                    className={styles.paramDataChunk}
                >
                    Are there any restrictions on this number?
                    <div>
                        <input
                            type="checkbox"
                            name={`integers_${this.props.uuid}`}
                            value="integers"
                            checked={this.props.restrictedToIntegers}
                            onChange={(e) => this.props.handleParamNumberRestrictionChange(e, "restrictedToIntegers", this.props.uuid)} />
                        <label htmlFor={`integers_${this.props.uuid}`}>Restricted to integers</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name={`range_${this.props.uuid}`}
                            value="range"
                            checked={this.props.restrictedToRange}
                            onChange={(e) => this.props.handleParamNumberRestrictionChange(e, "restrictedToRange", this.props.uuid)} />
                        <label htmlFor={`range_${this.props.uuid}`}>Restricted to range</label>
                    </div>

                    {/* Range-specific form */}
                    <div
                        className={styles.indented}
                    >
                        <div>
                            <label htmlFor={`rangeStart_${this.props.uuid}`}>Range start: </label>
                            <input
                                type="text"
                                name={`rangeStart_${this.props.uuid}`}
                                value={this.props.rangeStart}
                                onChange={(e) => this.props.handleParamNumberRestrictionChange(e, "rangeStart", this.props.uuid)}
                                disabled={this.props.uuidInEditMode}
                            >
                            </input>
                        </div>
                        <div>
                            <label htmlFor={`rangeEnd_${this.props.uuid}`}>Range end: </label>
                            <input
                                type="text"
                                name={`rangeEnd_${this.props.uuid}`}
                                value={this.props.rangeEnd}
                                onChange={(e) => this.props.handleParamNumberRestrictionChange(e, "rangeEnd", this.props.uuid)}
                                disabled={this.props.uuidInEditMode}
                            >
                            </input>
                        </div>
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
                                            paramMultipleValuesAllowed={this.props.paramMultipleValuesAllowed}
                                            handleAddBlankParamValue={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                                            handleParamValueChange={(e, i) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                                            handleParamNumValuesAllowedChange={(e) => this.props.handleParamNumValuesAllowedChange(e, this.props.uuid)}
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
                                            rangeStart={this.props.paramTypeData.rangeStart}
                                            rangeEnd={this.props.paramTypeData.rangeEnd}
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
                {
                // Group selection mode has highest priority; if not in group selection mode, see if currently hovered
                this.props.groupSelectionMode ? (
                    <input
                        className={styles.groupSelectionCheckbox}
                        type="checkbox"
                        name={`groupSelection_${this.props.uuid}`}
                        value="groupSelected"
                        checked={this.props.currentlySelected}
                        onChange={(e) => this.props.handleGroupSelectionChange(e, this.props.uuid)}
                    />
                ) : (
                    hovered ? (
                        <span>
                            <button
                                className={styles.removeButton}
                                onClick={() => this.props.removeParam(this.props.uuid)}
                                disabled={this.props.uuidInEditMode}
                            >x</button>
                            <button
                                className={styles.groupButton}
                                onClick={() => this.props.enterGroupSelection(this.props.uuid)}
                                disabled={this.props.uuidInEditMode}
                            >Group</button>
                        </span>
                    ) : (
                        <span></span>
                    )
                )}
                <input
                    className={`${styles.paramText} ${styles.inputNaturalLanguage} ${(this.props.uuidInEditMode && this.props.uuidInEditMode !== this.props.uuid ? styles.grayedOut : '')}`}
                    uuid={this.props.uuid}
                    text-item-type="param"
                    type="text"
                    size={Math.max(this.props.paramName.length, 20)}
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
                    </label>
                </div>
            </span>
        );
    }
}

export default class NaturalLanguage extends React.Component {
    constructor(props){
        super(props);

        const initialTextItems = {};
        const firstUuid = uuidv4();
        initialTextItems[firstUuid] = {
            text: props.text,
            uuid: firstUuid,
            type: "text",
            itemIDs: [],
            parentID: "root",
            paramName: "",
            hovered: false,
            currentlySelected: false,
            paramIsOptional: false,
            paramMultipleValuesAllowed: false,
            paramTypeData: null
        };

        this.state = {
            text: props.text,
            //textItems: initialTextItems,
            rootItemIDs: [firstUuid],
            idToItem: initialTextItems,
            groupSelectionMode: false,
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

                        const parentID = this.state.idToItem[uuid].parentID;

                        const newItemOnLeft = {
                            text: textOnLeft,
                            uuid: uuidv4(),
                            type: "text",
                            itemIDs: [],
                            parentID: parentID,
                            paramName: null,
                            hovered: false,
                            currentlySelected: false,
                            paramIsOptional: false,
                            paramMultipleValuesAllowed: false,
                            paramTypeData: null
                        };
                        const newParamItem = {
                            text: selectedText,
                            uuid: uuidv4(),
                            type: "param",
                            itemIDs: [],
                            parentID: parentID,
                            paramName: `<set param name for *${selectedText}*>`,
                            hovered: true,
                            currentlySelected: false,
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
                            type: "text",
                            itemIDs: [],
                            parentID: parentID,
                            paramName: null,
                            hovered: false,
                            currentlySelected: false,
                            paramIsOptional: false,
                            paramMultipleValuesAllowed: false,
                            paramTypeData: null
                        };

                        // Add replacement items
                        const idToItemClone = _.cloneDeep(this.state.idToItem);
                        idToItemClone[newItemOnLeft.uuid] = newItemOnLeft;
                        idToItemClone[newParamItem.uuid] = newParamItem;
                        idToItemClone[newItemOnRight.uuid] = newItemOnRight;

                        // Remove old item
                        delete idToItemClone[uuid];

                        // If parent isn't root, then instead of using this.state.rootItemIDs, use parent's itemIDs attribute
                        // Update ID list
                        const rootItemIDsClone = _.cloneDeep(this.state.rootItemIDs);

                        let itemIDsList;
                        console.log("parentID", parentID);
                        if(parentID === "root"){
                            itemIDsList = rootItemIDsClone;
                        }else{
                            itemIDsList = idToItemClone[parentID].itemIDs;
                        }

                        for(let i = 0; i < itemIDsList.length; i++){
                            if(itemIDsList[i] === uuid){
                                itemIDsList.splice(i, 1, newItemOnLeft.uuid, newParamItem.uuid, newItemOnRight.uuid);
                            }
                        }

                        // Clear text selection
                        selectionObj.removeAllRanges();

                        // Update whole textItems to make sure we re-render
                        this.setState({
                            idToItem: idToItemClone,
                            rootItemIDs: rootItemIDsClone
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

    handleSave(textElement, uuid){
        const newText = textElement.current.textContent;

        // update it's text in state
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        idToItemClone[uuid].text = newText;
        this.setState({
            idToItem: idToItemClone,
            uuidInEditMode: null
        });
        this.exitEditMode();
    }

    handleOnMouseEnter(uuid, e){
        console.log("handleOnMouseEnter");
        console.log("uuid", uuid);
    
        // Change 'hovered' attribute for the item in textItems that has uuid
        // Need to loop through this.state.textItems to find correct item
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        idToItemClone[uuid].hovered = true;
        this.setState({
            idToItem: idToItemClone
        });
    }
    
    handleOnMouseLeave(uuid, e){
        console.log("handleOnMouseLeave");
        console.log("uuid", uuid);
    
        // Change 'hovered' attribute for the item in textItems that has uuid
        // Need to loop through this.state.textItems to find correct item
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        idToItemClone[uuid].hovered = false;
        this.setState({
            idToItem: idToItemClone
        });
    }

    handleParamNameChange(e, uuid) {
        console.log("handleParamNameChange");
        console.log("e", e);
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        idToItemClone[uuid].paramName = e.target.value;
        this.setState({
            idToItem: idToItemClone
        });
        //this.exitEditMode();
    }

    handleParamValueChange(e, i, uuid) {
        console.log("handleParamValueChange");
        console.log("e", e);
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        idToItemClone[uuid].paramTypeData.possibleValues[i] = e.target.value;
        this.setState({
            idToItem: idToItemClone
        });
        //this.exitEditMode();
    }

    handleAddBlankParamValue(uuid){
        console.log("handleAddBlankParamValue");
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        idToItemClone[uuid].paramTypeData.possibleValues.push("");
        this.setState({
            idToItem: idToItemClone
        });
        //this.exitEditMode();
    }

    handleGroupSelectionChange(e, uuid){
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        idToItemClone[uuid].currentlySelected = e.target.checked;
        this.setState({
            idToItem: idToItemClone
        });
    }

    enterGroupSelection(uuid, e){
        console.log("enterGroupSelection");
        // Add checkbox in top-right corner of each parameter

        const idToItemClone = _.cloneDeep(this.state.idToItem);
        idToItemClone[uuid].currentlySelected = true;
        this.setState({
            groupSelectionMode: true,
            idToItem: idToItemClone
        });
    }

    removeParam(uuid, e){
        console.log("removeParam");
        console.log("uuid", uuid);

        const rootItemIDsClone = _.cloneDeep(this.state.rootItemIDs);
        const idToItemClone = _.cloneDeep(this.state.idToItem);

        // Need to merge this item with REGULAR text items on its immediate left and right (if they exist)

        const parentID = idToItemClone[uuid].parentID;

        let itemIDsList;
        if(parentID === "root"){
            itemIDsList = rootItemIDsClone;
        }else{
            itemIDsList = idToItemClone[parentID].itemIDs;
        }

        let index;
        for(let i = 0; i < itemIDsList.length; i++){
            const itemID = itemIDsList[i];
            if(itemID === uuid){
                index = i;
            }
        }
        let startingIndexToReplace = index;
        let numItemsToRemove = 1; // default to 1, because will definitely at least replace this item
        let mergedText = "";
        if(index > 0){
            // See if left neighbor is regular (i.e., not param); if so, merge
            const leftNeighbor = idToItemClone[itemIDsList[index-1]];
            if(leftNeighbor.type !== "param"){
                mergedText += leftNeighbor.text;
                startingIndexToReplace -= 1;
                numItemsToRemove += 1;
            }
        }
        mergedText += idToItemClone[itemIDsList[index]].text;
        if(index < itemIDsList.length-1){
            // See if right neighbor is regular (i.e., not param); if so, merge
            const rightNeighbor = idToItemClone[itemIDsList[index+1]];
            if(rightNeighbor.type !== "param"){
                mergedText += rightNeighbor.text;
                numItemsToRemove += 1;
            }
        }
        console.log("mergedText", mergedText);
        
        const mergedItem = {
            text: mergedText,
            uuid: uuidv4(),
            type: "text",
            itemIDs: [],
            parentID: parentID,
            paramName: null,
            hovered: false,
            currentlySelected: false,                
            paramIsOptional: false,
            paramMultipleValuesAllowed: false,
            paramTypeData: null
        };

        console.log("startingIndexToReplace", startingIndexToReplace);
        console.log("numItemsToRemove", numItemsToRemove);

        // Remove appropriate item IDs and replace with new ID
        const removedIDs = itemIDsList.splice(startingIndexToReplace, numItemsToRemove, mergedItem.uuid);

        // Remove items from map and insert new item
        idToItemClone[mergedItem.uuid] = mergedItem;
        removedIDs.forEach(function(id){
            delete idToItemClone[id];
        });

        // Update to make sure we re-render
        this.setState({
            rootItemIDs: rootItemIDsClone,
            idToItem: idToItemClone
        });
        //this.exitEditMode();
    }

    removeValue(i, uuid, e){
        console.log("removeValue");
        console.log("i", i);
        console.log("uuid", uuid);

        const idToItemClone = _.cloneDeep(this.state.idToItem);
        idToItemClone[uuid].paramTypeData.possibleValues.splice(i, 1);
        this.setState({
            idToItem: idToItemClone
        });
        //this.exitEditMode();
    }

    handleParamTypeChange(e, uuid){
        const target = e.target;
        console.log("handleParamTypeChange target", target);
        const value = target.value;
        
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        
        // Update paramOptional checkbox value
        let paramTypeData = {
            type: value,
            possibleValues: idToItemClone[uuid].paramTypeData.possibleValues
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
            paramTypeData.rangeStart = "";
            paramTypeData.rangeEnd = "";
        }
        idToItemClone[uuid].paramTypeData = paramTypeData;

        this.setState({
            idToItem: idToItemClone
        });
    }

    handleParamOptionalChange(e, uuid){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        idToItemClone[uuid].paramIsOptional = value;
        this.setState({
            idToItem: idToItemClone
        });
    }

    handleParamNumValuesAllowedChange(e, uuid){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log("value", value);

        const idToItemClone = _.cloneDeep(this.state.idToItem);
        
        // Update paramOptional checkbox value
        if(value === "one"){
            idToItemClone[uuid].paramMultipleValuesAllowed = false;
        }else if(value === "multiple"){
            idToItemClone[uuid].paramMultipleValuesAllowed = true;
        }

        this.setState({
            idToItem: idToItemClone
        });
    }

    handleParamDateRestrictionChange(e, uuid){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        //console.log("value", value);

        const idToItemClone = _.cloneDeep(this.state.idToItem);
        idToItemClone[uuid].paramTypeData.dateRestriction = value;
        this.setState({
            idToItem: idToItemClone
        });
    }

    handleParamNumberRestrictionChange(e, restrictionToChange, uuid){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        // So restrictionToChange tells us which restriction to update in the state. And the new value for it will be e.target.checked
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        
        idToItemClone[uuid].paramTypeData[restrictionToChange] = value;

        // If restrictionToChange is "rangeStart" or "rangeEnd" and the value is a number (e.g., isn't an empty string), ensure that "restrictedToRange" attribute is true
        if(!isNaN(parseInt(value))){
            idToItemClone[uuid].paramTypeData["restrictedToRange"] = true;
        }

        this.setState({
            idToItem: idToItemClone
        });
    }

/*     componentDidUpdate(){
        console.log("componentDidUpdate");
        if(this.state.uuidInEditMode){
            this.mainText.focus();
        }
    } */

    render() {
        //const textItems = this.state.textItems;
        const rootItemIDs = this.state.rootItemIDs;
        console.log("rootItemIDs", rootItemIDs);

        console.log("this.state.idToItem", this.state.idToItem);
        // Render each item as appropriate (using TextItem component)
        const domTextItems = rootItemIDs.map((itemID, i) => {
            console.log("itemID", itemID);
            const textItem = this.state.idToItem[itemID];
            const key = i + "_" + textItem.text;
            console.log("textItem.type", textItem.type);
            if(textItem.type === "param"){
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
                            enterGroupSelection={() => this.enterGroupSelection(textItem.uuid)}
                            removeValue={(i) => this.removeValue(i, textItem.uuid)}
                            handleParamNameChange={(e) => this.handleParamNameChange(e, textItem.uuid)}
                            handleAddBlankParamValue={() => this.handleAddBlankParamValue(textItem.uuid)}
                            handleParamValueChange={(e, i) => this.handleParamValueChange(e, i, textItem.uuid)}
                            hovered={textItem.hovered}
                            groupSelectionMode={this.state.groupSelectionMode}
                            currentlySelected={textItem.currentlySelected}
                            uuidInEditMode={this.state.uuidInEditMode}
                            paramIsOptional={textItem.paramIsOptional}
                            paramMultipleValuesAllowed={textItem.paramMultipleValuesAllowed}
                            handleParamOptionalChange={(e) => this.handleParamOptionalChange(e, textItem.uuid)}
                            handleParamTypeChange={(e) => this.handleParamTypeChange(e, textItem.uuid)}
                            handleParamNumValuesAllowedChange={(e) => this.handleParamNumValuesAllowedChange(e, textItem.uuid)}
                            handleParamDateRestrictionChange={(e) => this.handleParamDateRestrictionChange(e, textItem.uuid)}
                            handleParamNumberRestrictionChange={(e, restrictionToChange) => this.handleParamNumberRestrictionChange(e, restrictionToChange, textItem.uuid)}
                            handleGroupSelectionChange={(e) => this.handleGroupSelectionChange(e, textItem.uuid)}
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
                            handleSave={(textElement) => this.handleSave(textElement, textItem.uuid)}
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