import React, {useRef} from 'react';
import { withRouter } from 'next/router';
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
                className={`${styles.inputNaturalLanguage} ${(props.uuidInEditMode === props.uuid ? styles.editBackground : '')} ${(props.uuidInEditMode && props.uuidInEditMode !== props.uuid || props.groupSelectionMode ? styles.grayedOut : '')}`}
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
                    className={`${(this.props.uuidInEditMode && this.props.uuidInEditMode !== this.props.uuid || this.props.groupSelectionMode ? styles.grayedOut : '')}`}
                    type="text"
                    value={value}
                    onChange={(e) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                    disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                >
                </input>
                <button
                    onClick={() => this.props.removeValue(i, this.props.uuid)}
                    className={styles.removeValueButton}
                    disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                    title="Delete"
                >x</button>
            </li>
        );
        return (
            <div
                className={styles.paramDataChunk}
            >
                {this.props.examplesText}
                <ul>{possibleValues}</ul>
                <button
                    onClick={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                    className={styles.addValuesButton}
                    disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
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
                    groupSelectionMode={this.props.groupSelectionMode}
                    removeValue={(i) => this.props.removeValue(i, this.props.uuid)}
                    examplesText="What are some values the user can type in?"
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
                    groupSelectionMode={this.props.groupSelectionMode}
                    removeValue={(i) => this.props.removeValue(i, this.props.uuid)}
                    examplesText="What are some values the user can choose?"
                />
                <div
                    className={styles.paramDataChunk}
                >
                    How many of these values can the user choose?
                    <div>
                        <input
                            type="radio"
                            name={`one_numValuesAllowed_${this.props.uuid}`}
                            id={`one_numValuesAllowed_${this.props.uuid}`}
                            value="one"
                            checked={!this.props.paramMultipleValuesAllowed}
                            onChange={(e) => this.props.handleParamNumValuesAllowedChange(e, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                        />
                        <label htmlFor={`one_numValuesAllowed_${this.props.uuid}`}>Just 1</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            name={`multiple_numValuesAllowed_${this.props.uuid}`}
                            id={`multiple_numValuesAllowed_${this.props.uuid}`}
                            value="multiple"
                            checked={this.props.paramMultipleValuesAllowed}
                            onChange={(e) => this.props.handleParamNumValuesAllowedChange(e, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                        />
                        <label htmlFor={`multiple_numValuesAllowed_${this.props.uuid}`}>1 or more</label>
                    </div>
                </div>
            </div>
        );
    }
}
class FlagParam extends React.Component {
    render(){
        return (
            /* Nothing to show */
            <div>
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
                            name={`past_dateRestrictions_${this.props.uuid}`}
                            id={`past_dateRestrictions_${this.props.uuid}`}
                            value="past"
                            checked={this.props.dateRestriction === "past"}
                            onChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                        />
                        <label htmlFor={`past_dateRestrictions_${this.props.uuid}`}>Restricted to dates in the past</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name={`future_dateRestrictions_${this.props.uuid}`}
                            id={`future_dateRestrictions_${this.props.uuid}`}
                            value="future"
                            checked={this.props.dateRestriction === "future"}
                            onChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                        />
                        <label htmlFor={`future_dateRestrictions_${this.props.uuid}`}>Restricted to dates in the future</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name={`none_dateRestrictions_${this.props.uuid}`}
                            id={`none_dateRestrictions_${this.props.uuid}`}
                            value="none"
                            checked={this.props.dateRestriction === "none"}
                            onChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                        />
                        <label htmlFor={`none_dateRestrictions_${this.props.uuid}`}>No restrictions</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name={`other_dateRestrictions_${this.props.uuid}`}
                            id={`other_dateRestrictions_${this.props.uuid}`}
                            value="other"
                            checked={this.props.dateRestriction === "other"}
                            onChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                        />
                        <label htmlFor={`other_dateRestrictions_${this.props.uuid}`}>Other</label>
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
                            id={`integers_${this.props.uuid}`}
                            value="integers"
                            checked={this.props.restrictedToIntegers}
                            onChange={(e) => this.props.handleParamNumberRestrictionChange(e, "restrictedToIntegers", this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                        />
                        <label htmlFor={`integers_${this.props.uuid}`}>Restricted to integers</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name={`range_${this.props.uuid}`}
                            id={`range_${this.props.uuid}`}
                            value="range"
                            checked={this.props.restrictedToRange}
                            onChange={(e) => this.props.handleParamNumberRestrictionChange(e, "restrictedToRange", this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                        />
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
                                id={`rangeStart_${this.props.uuid}`}
                                value={this.props.rangeStart}
                                onChange={(e) => this.props.handleParamNumberRestrictionChange(e, "rangeStart", this.props.uuid)}
                                disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                            >
                            </input>
                        </div>
                        <div>
                            <label htmlFor={`rangeEnd_${this.props.uuid}`}>Range end: </label>
                            <input
                                type="text"
                                name={`rangeEnd_${this.props.uuid}`}
                                id={`rangeEnd_${this.props.uuid}`}
                                value={this.props.rangeEnd}
                                onChange={(e) => this.props.handleParamNumberRestrictionChange(e, "rangeEnd", this.props.uuid)}
                                disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
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
        // Based on what this.props.paramTypeData.type is, render appropriate type
        let paramTypeSpecificForm = ""; // empty unless there is a param type we should render
        if(this.props.paramTypeData.type.length > 0){
            if(this.props.paramTypeData.type === "freeform"){
                paramTypeSpecificForm = <FreeformParam
                                            uuid={this.props.uuid}                            
                                            possibleValues={this.props.paramTypeData.possibleValues}
                                            handleAddBlankParamValue={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                                            handleParamValueChange={(e, i) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            groupSelectionMode={this.props.groupSelectionMode}
                                            removeValue={(i) => this.props.removeValue(i, this.props.uuid)}
                                        />;
            }else if(this.props.paramTypeData.type === "enumeration"){
                paramTypeSpecificForm = <EnumerationParam
                                            uuid={this.props.uuid}
                                            possibleValues={this.props.paramTypeData.possibleValues}
                                            paramMultipleValuesAllowed={this.props.paramMultipleValuesAllowed}
                                            handleAddBlankParamValue={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                                            handleParamValueChange={(e, i) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                                            handleParamNumValuesAllowedChange={(e) => this.props.handleParamNumValuesAllowedChange(e, this.props.uuid)}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            groupSelectionMode={this.props.groupSelectionMode}
                                            removeValue={(i) => this.props.removeValue(i, this.props.uuid)}
                                        />;
            }else if(this.props.paramTypeData.type === "flag"){
                paramTypeSpecificForm = <FlagParam/>;
            }else if(this.props.paramTypeData.type === "date"){
                paramTypeSpecificForm = <DateParam
                                            dateRestriction={this.props.paramTypeData.dateRestriction}
                                            uuid={this.props.uuid}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            groupSelectionMode={this.props.groupSelectionMode}
                                            handleParamDateRestrictionChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)}
                                        />;
            }else if(this.props.paramTypeData.type === "number"){
                paramTypeSpecificForm = <NumberParam
                                            restrictedToIntegers={this.props.paramTypeData.restrictedToIntegers}
                                            restrictedToRange={this.props.paramTypeData.restrictedToRange}
                                            rangeStart={this.props.paramTypeData.rangeStart}
                                            rangeEnd={this.props.paramTypeData.rangeEnd}
                                            uuid={this.props.uuid}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            groupSelectionMode={this.props.groupSelectionMode}
                                            handleParamNumberRestrictionChange={(e, restrictionToChange) => this.props.handleParamNumberRestrictionChange(e, restrictionToChange, this.props.uuid)}
                                        />;
            }
        }

        return (
            <span>
                <input
                    className={`${this.props.paramAnnotatorCreated ? styles.paramTextAnnotatorCreated : styles.paramText} ${styles.inputNaturalLanguage} ${(this.props.uuidInEditMode && this.props.uuidInEditMode !== this.props.uuid || this.props.groupSelectionMode ? styles.grayedOut : '')}`}
                    uuid={this.props.uuid}
                    text-item-type="param"
                    type="text"
                    size={Math.max(this.props.paramName.length, 20)}
                    value={this.props.paramName}
                    onChange={(e) => this.props.handleParamNameChange(e, this.props.uuid)}
                    disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                >
                </input>
                {
                    this.props.paramAnnotatorCreated ? (
                        <div
                            className={styles.paramTextAnnotatorCreatedLabel}
                        >
                            User-created
                        </div>
                    ) : (
                        <div
                            className={styles.paramTextOriginalTextLabel}
                        >
                            Original text: {this.props.text}
                        </div>
                    )
                }
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
                        disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                    >
                        <option value="">--Select value type--</option>
                        <option value="freeform">Something the user types in</option>
                        <option value="enumeration">Something user selects from a list</option>
                        <option value="flag">Yes/no</option>
                        <option value="date">A date</option>
                        <option value="number">A number</option>
                    </select>

                    {paramTypeSpecificForm}

                    {/* Only show these questions after the user has selected a parameter type
                    (because we want the user to focus on that first) */}
                    {this.props.paramTypeData.type !== "" && this.props.paramTypeData.type !== "flag" ? (
                        <div
                            className={styles.paramDataChunk}
                        >
                            Can the user leave this value blank?
                            <div>
                                <input
                                    type="radio"
                                    name={`optional_paramOptional_${this.props.uuid}`}
                                    id={`optional_paramOptional_${this.props.uuid}`}
                                    value="optional"
                                    checked={this.props.paramIsOptional}
                                    onChange={(e) => this.props.handleParamOptionalChange(e, this.props.uuid)}
                                    disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                                />
                                <label htmlFor={`optional_paramOptional_${this.props.uuid}`}>Yes, this value is optional</label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    name={`notOptional_paramOptional_${this.props.uuid}`}
                                    id={`notOptional_paramOptional_${this.props.uuid}`}
                                    value="notOptional"
                                    checked={!this.props.paramIsOptional}
                                    onChange={(e) => this.props.handleParamOptionalChange(e, this.props.uuid)}
                                    disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                                />
                                <label htmlFor={`notOptional_paramOptional_${this.props.uuid}`}>No, the user has to choose a value</label>
                            </div>
                        </div>
                    ) : (
                        ""
                    ) }
                </div>
            </span>
        );
    }
}

class NaturalLanguage extends React.Component {
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
            currentlySelected: false,
            paramIsOptional: false,
            paramMultipleValuesAllowed: false,
            paramTypeData: null,
            paramAnnotatorCreated: false
        };

        // Creating a root element to represent top-level
        initialTextItems["root"] = {
            text: null,
            uuid: "root",
            type: null,
            itemIDs: [firstUuid],
            parentID: null,
            paramName: "",
            currentlySelected: false,
            paramIsOptional: false,
            paramMultipleValuesAllowed: false,
            paramTypeData: null,
            paramAnnotatorCreated: false
        };

        this.state = {
            text: props.text,
            //textItems: initialTextItems,
            idToItem: initialTextItems,
            groupSelectionMode: false,
            //uuidInEditMode: false
            uuidInEditMode: null,
            hoveredID: null,
            errorMessage: null,
            websiteUrl: props.websiteUrl,
            textEditable: props.textEditable,
            clientID: props.clientID
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
            
            // Ignore if in edit mode or group selection mode
            if(!this.state.uuidInEditMode && !this.state.groupSelectionMode){
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
                            currentlySelected: false,
                            paramIsOptional: false,
                            paramMultipleValuesAllowed: false,
                            paramTypeData: null,
                            paramAnnotatorCreated: false
                        };
                        const newParamItem = {
                            text: selectedText,
                            uuid: uuidv4(),
                            type: "param",
                            itemIDs: [],
                            parentID: parentID,
                            //paramName: `<name for *${selectedText}*>`,
                            paramName: `<name>`,
                            currentlySelected: false,
                            paramIsOptional: false,
                            paramMultipleValuesAllowed: false,
                            paramTypeData: {
                                type: "",
                                possibleValues: [selectedText],
                            },
                            paramAnnotatorCreated: false
                        };
                        const newItemOnRight = {
                            text: textOnRight,
                            uuid: uuidv4(),
                            type: "text",
                            itemIDs: [],
                            parentID: parentID,
                            paramName: null,
                            currentlySelected: false,
                            paramIsOptional: false,
                            paramMultipleValuesAllowed: false,
                            paramTypeData: null,
                            paramAnnotatorCreated: false
                        };

                        // Add replacement items
                        const idToItemClone = _.cloneDeep(this.state.idToItem);
                        idToItemClone[newItemOnLeft.uuid] = newItemOnLeft;
                        idToItemClone[newParamItem.uuid] = newParamItem;
                        idToItemClone[newItemOnRight.uuid] = newItemOnRight;

                        // Remove old item
                        delete idToItemClone[uuid];

                        // Update ID list
                        const itemIDsList = idToItemClone[parentID].itemIDs;

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
                            hoveredID: newParamItem.uuid
                        });

                        this.scrollParamIntoViewAndHighlightNameText(newParamItem.uuid);
                    }

                    //this.exitEditMode();
                }else if(this.state.textEditable){
                    // Enter edit mode, only if allowed (i.e., this.state.textEditable is true)

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
    
        this.setState({
            hoveredID: uuid
        });
    }
    
    handleOnMouseLeave(uuid, e){
        console.log("handleOnMouseLeave");
        console.log("uuid", uuid);

        // Change the hoveredID to the parent, because at this point the parent is being hovered still
            // but we just aren't hearing any explicit mouseenter event for it
            // It's ok if parentID is null (i.e., for root's parent), just nothing will get hover effect
        const newHoveredID = this.state.idToItem[uuid].parentID;
    
        this.setState({
            hoveredID: newHoveredID
        });
    }

    handleGroupNameChange(e, uuid) {
        console.log("handleGroupNameChange");
        console.log("e", e);
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        idToItemClone[uuid].groupName = e.target.value;
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
        if(uuid){
            // Set initial selection, only if a non-null uuid is passed in
            idToItemClone[uuid].currentlySelected = true;
        }
        this.setState({
            groupSelectionMode: true,
            idToItem: idToItemClone
        });
    }

    exitGroupCreationMode(e){
        // Make sure all items currently not selected
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        for (const item of Object.values(idToItemClone)) {
            item.currentlySelected = false;
        }
        // Set to not be in group selection mode, and set error to null
        this.setState({
            groupSelectionMode: false,
            idToItem: idToItemClone,
            errorMessage: null
        });
    }

    createGroup(e){
        // Identify all the items that are selected
        // Either do this from which checkboxes in the UI are selected, or use the currentlySelected attribute value
        // Then identify the first selected item and last selected item, then group everything inbetween
        
        let selectedIDs = [];
        // Might not be best practice to use querySelectorAll, but for now easier than trying to store and keep track of a state variable
        document.querySelectorAll("input[type=checkbox]:checked").forEach(function(el){
            selectedIDs.push(el.getAttribute("uuid"));
        });

        console.log("selectedIDs", selectedIDs);

        // Don't create a group if 0 items selected. For now we'll let users create a group of size 1 (could be use cases for that)
        if(selectedIDs.length > 0){
            // For now, verify that all in selectedIDs have same parent; if they don't, show user an error
                // Easiest for us right now, so that we don't have to worry about finding https://en.wikipedia.org/wiki/Lowest_common_ancestor
            let sameParentID = true;
            let parentID = this.state.idToItem[selectedIDs[0]].parentID;
            //console.log("parentID", parentID);
            for(let i = 1; i < selectedIDs.length; i++){
                if(this.state.idToItem[selectedIDs[i]].parentID !== this.state.idToItem[selectedIDs[i-1]].parentID){
                    sameParentID = false;
                }
            }

            if(!sameParentID){
                // TODO - for now, show an error; but in future, maybe find common ancestor to join over
                console.log("!sameParentID");
                this.setState({
                    errorMessage: "You can only group items that have the same parent. Please change your item selections."
                })
            }else{
                // Group from selectedIDs[0] to selectedIDs[selectedIDs.length-1] within parent's itemIDs (so this should include parameters and regular text in between)
                const childIDs = this.state.idToItem[parentID].itemIDs;
                const firstSelectedID = selectedIDs[0];
                const lastSelectedID = selectedIDs[selectedIDs.length-1];
                const firstSelectedIDIndex = childIDs.indexOf(firstSelectedID);
                //console.log("firstSelectedIDIndex", firstSelectedIDIndex);
                const lastSelectedIDIndex = childIDs.indexOf(lastSelectedID);
                //console.log("lastSelectedIDIndex", lastSelectedIDIndex);

                // Merge everything between firstSelectedIDIndex and lastSelectedIDIndex
                const newGroupItem = {
                    text: null,
                    uuid: uuidv4(),
                    type: "group",
                    itemIDs: childIDs.slice(firstSelectedIDIndex, lastSelectedIDIndex + 1),
                    parentID: parentID,
                    paramName: null,
                    currentlySelected: false,
                    paramIsOptional: false,
                    paramMultipleValuesAllowed: false,
                    paramTypeData: null,
                    paramAnnotatorCreated: false,
                    groupName: "<name>"
                };

                // Replace childIDs from firstSelectedIDIndex to lastSelectedIDIndex with newGroupItem.uuid
                // Also remove each of these items from idToItem, and then add newGroupItem


                // Add replacement items
                const idToItemClone = _.cloneDeep(this.state.idToItem);
                idToItemClone[newGroupItem.uuid] = newGroupItem;

                // For each item that's in the group, update its id to be newGroupItem.uuid
                for(let i = firstSelectedIDIndex; i <= lastSelectedIDIndex; i++){
                    idToItemClone[childIDs[i]].parentID = newGroupItem.uuid;
                }

                // Update ID list
                const itemIDsList = idToItemClone[parentID].itemIDs;

                itemIDsList.splice(firstSelectedIDIndex, (lastSelectedIDIndex - firstSelectedIDIndex + 1), newGroupItem.uuid);

                // Make sure all items currently not selected
                for (const item of Object.values(idToItemClone)) {
                    item.currentlySelected = false;
                }

                // Update whole textItems to make sure we re-render
                this.setState({
                    idToItem: idToItemClone,
                    groupSelectionMode: false,
                    hoveredID: newGroupItem.uuid,
                    errorMessage: null
                });

                this.scrollGroupIntoViewAndHighlightNameText(newGroupItem.uuid);
            }
        }else{
            this.exitGroupCreationMode();
        }
    }

    removeItem(uuid, e){
        console.log("removeItem");
        console.log("uuid", uuid);

        const idToItemClone = _.cloneDeep(this.state.idToItem);

        // Need to merge this item with REGULAR text items on its immediate left and right (if they exist)

        const parentID = idToItemClone[uuid].parentID;

        const itemIDsList = idToItemClone[parentID].itemIDs;

        let index;
        for(let i = 0; i < itemIDsList.length; i++){
            const itemID = itemIDsList[i];
            if(itemID === uuid){
                index = i;
            }
        }

        // Changes for when removing param
        function mergeWithAdjacentText(){
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
                currentlySelected: false,                
                paramIsOptional: false,
                paramMultipleValuesAllowed: false,
                paramTypeData: null,
                paramAnnotatorCreated: false
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
        }

        // Changes for when removing group
        function mergeIntoParent(){
            const idsToMergeIn = idToItemClone[uuid].itemIDs;

            const beginningOfItemIDsList = itemIDsList.slice(0, index);
            const endOfItemIDsList = itemIDsList.slice(index+1);

            const newItemIDsList = beginningOfItemIDsList.concat(idsToMergeIn, endOfItemIDsList);

            // Update each child item to have correct parentID
            newItemIDsList.forEach(function(id){
                idToItemClone[id].parentID = parentID;
            })

            // Update IDs list
            idToItemClone[parentID].itemIDs = newItemIDsList;

            // Remove old group from map
            delete idToItemClone[uuid];
        }

        if(idToItemClone[uuid].type === "param"){
            mergeWithAdjacentText();
        }else if(idToItemClone[uuid].type === "group"){
            mergeIntoParent();
        }

        // Update to make sure we re-render
        this.setState({
            idToItem: idToItemClone,
            hoveredID: null
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
        }else if(value === "flag"){
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
        const value = target.value === "optional";
        
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

    addParameter(uuid){
        // Get uuid's item, create a new empty param obj to add to the end of it

        const newParamItem = {
            text: "",
            uuid: uuidv4(),
            type: "param",
            itemIDs: [],
            parentID: uuid,
            paramName: `<name>`,
            currentlySelected: false,
            paramIsOptional: false,
            paramMultipleValuesAllowed: false,
            paramTypeData: {
                type: "",
                possibleValues: [],
            },
            paramAnnotatorCreated: true
        };
        
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        idToItemClone[newParamItem.uuid] = newParamItem;
        
        const itemIDsList = idToItemClone[uuid].itemIDs;
        
        // Add to end of list
        itemIDsList.push(newParamItem.uuid);
        
        // Update whole textItems to make sure we re-render
        this.setState({
            idToItem: idToItemClone,
            hoveredID: newParamItem.uuid
        });

        this.scrollParamIntoViewAndHighlightNameText(newParamItem.uuid);
    }

/*     componentDidUpdate(){
        console.log("componentDidUpdate");
        if(this.state.uuidInEditMode){
            this.mainText.focus();
        }
    } */

    scrollParamIntoViewAndHighlightNameText(uuid){
        // This is a bit hacky, but want to wait long enough for the state to update to include this new param, then we'll scroll to it and highlight the text
        setTimeout(function(){
            document.querySelector(`[uuid="${uuid}"]`).closest("[container]").scrollIntoView({block: "end", inline: "nearest"});
            document.querySelector(`[uuid="${uuid}"]`).select();
        }, 0);
    }

    scrollGroupIntoViewAndHighlightNameText(uuid){
        // This is a bit hacky, but want to wait long enough for the state to update to include this new group, then we'll scroll to it and highlight the text
        setTimeout(function(){
            //document.querySelector(`[uuid="${uuid}"]`).closest("[container]").scrollIntoView({block: "start", inline: "nearest"});
            const groupTop = document.querySelector(`[uuid="${uuid}"]`).closest("[container]").getBoundingClientRect().top;
            const contentAreaTop = document.querySelector("[content-area]").getBoundingClientRect().top;
            const relativeChange = groupTop - contentAreaTop;
            window.scroll(0, relativeChange);
            document.querySelector(`[uuid="${uuid}"] [group-name]`).select();
        }, 0);
    }

    async handleSubmit(){
        console.log("handleSubmit");

        // Save data to db
        await fetch('/api/new', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idToItem: this.state.idToItem,
                clientID: this.state.clientID
            }),
        })

        // Show "finished" view
        this.props.router.push("/finished");
    }

    renderItemsList(itemIDs){
        
        function renderParamOrGroup(key, textItem){
            let itemContents = null;
            if(textItem.type === "param"){
                // Fill in itemContents
                itemContents = (
                    <span
                        key={key}
                    >
                        <ParamTextItem
                            text={textItem.text}
                            uuid={textItem.uuid}
                            paramName={textItem.paramName}
                            paramTypeData={textItem.paramTypeData}
                            paramAnnotatorCreated={textItem.paramAnnotatorCreated}
                            onMouseEnter={() => this.handleOnMouseEnter(textItem.uuid)}
                            onMouseLeave={() => this.handleOnMouseLeave(textItem.uuid)}
                            removeItem={() => this.removeItem(textItem.uuid)}
                            enterGroupSelection={() => this.enterGroupSelection(textItem.uuid)}
                            removeValue={(i) => this.removeValue(i, textItem.uuid)}
                            handleParamNameChange={(e) => this.handleParamNameChange(e, textItem.uuid)}
                            handleAddBlankParamValue={() => this.handleAddBlankParamValue(textItem.uuid)}
                            handleParamValueChange={(e, i) => this.handleParamValueChange(e, i, textItem.uuid)}
                            hoveredID={this.state.hoveredID}
                            groupSelectionMode={this.state.groupSelectionMode}
                            currentlySelected={textItem.currentlySelected}
                            uuidInEditMode={this.state.uuidInEditMode}
                            groupSelectionMode={this.state.groupSelectionMode}
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
            }else if(textItem.type === "group"){
                // Fill in itemContents
                itemContents = (
                    <span
                        className={styles.group}
                        uuid={textItem.uuid}
                    >
                        <span
                            className={styles.groupNameContainer}
                        >
                            <input
                                group-name=""
                                className={`${styles.groupName} ${(this.state.uuidInEditMode && this.state.uuidInEditMode !== textItem.uuid || this.state.groupSelectionMode ? styles.grayedOut : '')}`}
                                type="text"
                                value={textItem.groupName}
                                onChange={(e) => this.handleGroupNameChange(e, textItem.uuid)}
                                disabled={this.state.uuidInEditMode || this.state.groupSelectionMode}
                            ></input>
                        </span>
                        {this.renderItemsList(textItem.itemIDs)}
                    </span>
                );
            }

            return (
                <span
                    container=""
                    className={`${styles.container} ${(this.state.uuidInEditMode && this.state.uuidInEditMode !== textItem.uuid || this.state.groupSelectionMode ? styles.grayedOut : '')} ${(this.state.hoveredID === textItem.uuid ? styles.hovered : styles.notHovered)} ${(textItem.currentlySelected ? styles.itemSelected : '')}`}
                    onMouseEnter={() => this.handleOnMouseEnter(textItem.uuid)}
                    onMouseLeave={() => this.handleOnMouseLeave(textItem.uuid)}
                >
                    {
                    // Group selection mode has highest priority; if not in group selection mode, see if currently hovered
                    this.state.groupSelectionMode ? (
                        <input
                            className={styles.groupSelectionCheckbox}
                            type="checkbox"
                            name={`groupSelection_${textItem.uuid}`}
                            value="groupSelected"
                            uuid={textItem.uuid}
                            checked={textItem.currentlySelected}
                            onChange={(e) => this.handleGroupSelectionChange(e, textItem.uuid)}
                        />
                    ) : (
                        this.state.hoveredID === textItem.uuid ? (
                            <span>
                                <button
                                    className={styles.removeButton}
                                    onClick={() => this.removeItem(textItem.uuid)}
                                    disabled={this.state.uuidInEditMode || this.state.groupSelectionMode}
                                    title={textItem.type === "param" ? "Delete parameter" : "Delete group"}
                                >x</button>
                                <span
                                    className={styles.operationsButtonGroup}
                                >
                                    <button
                                        className={styles.groupButton}
                                        onClick={() => this.enterGroupSelection(textItem.uuid)}
                                        disabled={this.state.uuidInEditMode || this.state.groupSelectionMode}
                                    >Group</button>
                                    { textItem.type === "group" ? (
                                        <button
                                            className={styles.addParameterButton}
                                            onClick={() => this.addParameter(textItem.uuid)}
                                            disabled={this.state.uuidInEditMode || this.state.groupSelectionMode}
                                        >Add item</button>
                                    ):(
                                        ""
                                    ) }
                                </span>
                            </span>
                        ) : (
                            ""
                        )
                    )}
                    { itemContents }
                </span>
            );
        }
        
        console.log("itemIDs", itemIDs);
        const domTextItems = itemIDs.map((itemID, i) => {
            //console.log("itemID", itemID);
            const textItem = this.state.idToItem[itemID];
            //const key = i + "_" + textItem.text;
            const key = i + "_" + textItem.type + "_" + (textItem.text? textItem.text : "");
            //console.log("textItem.type", textItem.type);
            
            if(textItem.type === "param" || textItem.type === "group"){
                return renderParamOrGroup.call(this, key, textItem);
            }else{
                return(
                    <span
                        key={key}
                    >
                        <RegularTextItem
                            text={textItem.text}
                            uuid={textItem.uuid}
                            uuidInEditMode={this.state.uuidInEditMode}
                            groupSelectionMode={this.state.groupSelectionMode}
                            handleSave={(textElement) => this.handleSave(textElement, textItem.uuid)}
                            handleTextSelection={(textElement) => this.handleTextSelection(textElement, textItem.uuid)}
                        />
                    </span>
                );
            }
        });
    
        return domTextItems;
    }

    render() {
        console.log("this.state.idToItem", this.state.idToItem);
        // Render each item as appropriate (using TextItem component)
        const domTextItems = this.renderItemsList(this.state.idToItem["root"].itemIDs);

        return (
            <div
                // className={(this.state.uuidInEditMode ? styles.editBackground : '')}
            >
                
                <span
                    className={styles.topButtonRow}
                >
                    <div>
                        <button
                            className={styles.topButton}
                            onClick={() => this.addParameter("root")}
                            disabled={this.state.uuidInEditMode || this.state.groupSelectionMode}
                        >
                            Add item
                        </button>
                        <button
                            className={styles.topButton}
                            onClick={() => this.enterGroupSelection(null)}
                            disabled={this.state.uuidInEditMode || this.state.groupSelectionMode}
                        >
                            Group
                        </button>
                        {/* State-specific buttons */}
                        {this.state.groupSelectionMode ? (
                            <span>
                                <button
                                    className={styles.topButton}
                                    onClick={() => this.createGroup()}
                                >
                                    Create group
                                </button>
                                <button
                                    className={styles.topButton}
                                    onClick={() => this.exitGroupCreationMode()}
                                >
                                    Cancel
                                </button>
                            </span>
                        ) : (
                            ""
                        )}
                        <button
                            onClick={() => this.handleSubmit()}
                            className={`${styles.submitButton} ${styles.topButton}`}
                            disabled={this.state.uuidInEditMode || this.state.groupSelectionMode}
                        >
                            Submit
                        </button>
                    </div>
                    <div>
                        <p
                            className={styles.errorMessage}
                        >
                        {this.state.errorMessage}
                    </p>
                </div>
                </span>
                
                <div
                    className={styles.contentArea}
                    content-area=""
                >
                    <div
                        className={styles.request}
                    >
                        <span
                            container=""
                            className={`${styles.container} ${(this.state.hoveredID === "root" ? styles.hoveredOuterContainer : styles.notHovered)}`}
                            onMouseEnter={() => this.handleOnMouseEnter("root")}
                            onMouseLeave={() => this.handleOnMouseLeave("root")}
                        >
                            {this.state.hoveredID === "root" && !this.state.groupSelectionMode ? (
                                <span
                                    className={styles.operationsButtonGroup}
                                >
                                    <button
                                        className={styles.addParameterButton}
                                        onClick={() => this.addParameter("root")}
                                        disabled={this.state.uuidInEditMode || this.state.groupSelectionMode}
                                    >Add item</button>
                                </span>
                            ) : (
                                ""
                            ) }
                            {domTextItems}
                        </span>
                    </div>
                    <iframe
                        width="100%"
                        height="700"
                        src={this.state.websiteUrl}>
                    </iframe>
                </div>
                <button
                    onClick={() => this.handleSubmit()}
                    className={`${styles.submitButton} ${styles.topButton}`}
                    disabled={this.state.uuidInEditMode || this.state.groupSelectionMode}
                >
                    Submit
                </button>
            </div>
        );
    }
}

export default withRouter(NaturalLanguage);