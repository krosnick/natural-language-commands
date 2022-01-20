import React, {useRef} from 'react';
import { withRouter } from 'next/router';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import styles from './NaturalLanguage.module.css';
// import ChipotleClone from './website_clones/ChipotleClone';
// import OscarsClone from './website_clones/OscarsClone';
import Clone from './website_clones/Clone';
import { getValues, indexOfCaseInsensitive } from './valueExtraction';

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
                log-this-element=""
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
        console.log("this.props", this.props);
        console.log("this.props.possibleValues", this.props.possibleValues);
        const possibleValues = this.props.possibleValues.map((value, i) =>
            <li
                // key={`${value}_${i}`}
                //key={value}
            >
                <input
                    className={`${(this.props.uuidInEditMode && this.props.uuidInEditMode !== this.props.uuid || this.props.groupSelectionMode ? styles.grayedOut : '')}`}
                    log-this-element=""
                    type="text"
                    value={value}
                    onChange={(e) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                    onBlur={(e) => this.props.handleParamValueBlurred(e, i, this.props.uuid)}
                    disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
                >
                </input>
                <button
                    onClick={() => this.props.removeValue(i, this.props.uuid)}
                    className={styles.removeValueButton}
                    disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
                    title="Delete"
                >x</button>
            </li>
        );
        return (
            <div
                className={styles.paramDataChunk}
                examples-area=""
            >
                {this.props.examplesText}
                <div
                    className={styles.importantMessage}
                >
                    <div>
                        Please check the auto-populated values,
                    </div>
                    <div>
                        and make corrections as needed.
                    </div>
                </div>
                <ul>{possibleValues}</ul>
                <button
                    onClick={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                    className={styles.addValuesButton}
                    disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
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
                    handleParamValueBlurred={(e, i) => this.props.handleParamValueBlurred(e, i, this.props.uuid)}
                    uuidInEditMode={this.props.uuidInEditMode}
                    groupSelectionMode={this.props.groupSelectionMode}
                    viewOnlyMode={this.props.viewOnlyMode}
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
                    handleParamValueBlurred={(e, i) => this.props.handleParamValueBlurred(e, i, this.props.uuid)}
                    uuidInEditMode={this.props.uuidInEditMode}
                    groupSelectionMode={this.props.groupSelectionMode}
                    viewOnlyMode={this.props.viewOnlyMode}
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
                            log-this-element=""
                            name={`one_numValuesAllowed_${this.props.uuid}`}
                            id={`one_numValuesAllowed_${this.props.uuid}`}
                            value="one"
                            checked={!this.props.paramMultipleValuesAllowed}
                            onChange={(e) => this.props.handleParamNumValuesAllowedChange(e, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
                        />
                        <label htmlFor={`one_numValuesAllowed_${this.props.uuid}`}>Just 1</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            log-this-element=""
                            name={`multiple_numValuesAllowed_${this.props.uuid}`}
                            id={`multiple_numValuesAllowed_${this.props.uuid}`}
                            value="multiple"
                            checked={this.props.paramMultipleValuesAllowed}
                            onChange={(e) => this.props.handleParamNumValuesAllowedChange(e, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
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
                            log-this-element=""
                            name={`past_dateRestrictions_${this.props.uuid}`}
                            id={`past_dateRestrictions_${this.props.uuid}`}
                            value="past"
                            checked={this.props.dateRestriction === "past"}
                            onChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
                        />
                        <label htmlFor={`past_dateRestrictions_${this.props.uuid}`}>Restricted to dates in the past</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            log-this-element=""
                            name={`future_dateRestrictions_${this.props.uuid}`}
                            id={`future_dateRestrictions_${this.props.uuid}`}
                            value="future"
                            checked={this.props.dateRestriction === "future"}
                            onChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
                        />
                        <label htmlFor={`future_dateRestrictions_${this.props.uuid}`}>Restricted to dates in the future</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            log-this-element=""
                            name={`none_dateRestrictions_${this.props.uuid}`}
                            id={`none_dateRestrictions_${this.props.uuid}`}
                            value="none"
                            checked={this.props.dateRestriction === "none"}
                            onChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
                        />
                        <label htmlFor={`none_dateRestrictions_${this.props.uuid}`}>No restrictions</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            log-this-element=""
                            name={`other_dateRestrictions_${this.props.uuid}`}
                            id={`other_dateRestrictions_${this.props.uuid}`}
                            value="other"
                            checked={this.props.dateRestriction === "other"}
                            onChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
                        />
                        <label htmlFor={`other_dateRestrictions_${this.props.uuid}`}>Other: </label>
                        <input
                            type="text"
                            log-this-element=""
                            name={`other_dateRestrictions_text_${this.props.uuid}`}
                            id={`other_dateRestrictions_text_${this.props.uuid}`}
                            value={this.props.otherDataValue}
                            onChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)}
                            disabled={this.props.dateRestriction !== "other" || this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
                        >
                        </input>
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
                            log-this-element=""
                            name={`integers_${this.props.uuid}`}
                            id={`integers_${this.props.uuid}`}
                            value="integers"
                            checked={this.props.restrictedToIntegers}
                            onChange={(e) => this.props.handleParamNumberRestrictionChange(e, "restrictedToIntegers", this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
                        />
                        <label htmlFor={`integers_${this.props.uuid}`}>Restricted to integers</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            log-this-element=""
                            name={`range_${this.props.uuid}`}
                            id={`range_${this.props.uuid}`}
                            value="range"
                            checked={this.props.restrictedToRange}
                            onChange={(e) => this.props.handleParamNumberRestrictionChange(e, "restrictedToRange", this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
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
                                log-this-element=""
                                name={`rangeStart_${this.props.uuid}`}
                                id={`rangeStart_${this.props.uuid}`}
                                value={this.props.rangeStart}
                                onChange={(e) => this.props.handleParamNumberRestrictionChange(e, "rangeStart", this.props.uuid)}
                                disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
                            >
                            </input>
                        </div>
                        <div>
                            <label htmlFor={`rangeEnd_${this.props.uuid}`}>Range end: </label>
                            <input
                                type="text"
                                log-this-element=""
                                name={`rangeEnd_${this.props.uuid}`}
                                id={`rangeEnd_${this.props.uuid}`}
                                value={this.props.rangeEnd}
                                onChange={(e) => this.props.handleParamNumberRestrictionChange(e, "rangeEnd", this.props.uuid)}
                                disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
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
                                            handleParamValueBlurred={(e, i) => this.props.handleParamValueBlurred(e, i, this.props.uuid)}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            groupSelectionMode={this.props.groupSelectionMode}
                                            viewOnlyMode={this.props.viewOnlyMode}
                                            removeValue={(i) => this.props.removeValue(i, this.props.uuid)}
                                        />;
            }else if(this.props.paramTypeData.type === "enumeration"){
                paramTypeSpecificForm = <EnumerationParam
                                            uuid={this.props.uuid}
                                            possibleValues={this.props.paramTypeData.possibleValues}
                                            paramMultipleValuesAllowed={this.props.paramMultipleValuesAllowed}
                                            handleAddBlankParamValue={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                                            handleParamValueChange={(e, i) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                                            handleParamValueBlurred={(e, i) => this.props.handleParamValueBlurred(e, i, this.props.uuid)}
                                            handleParamNumValuesAllowedChange={(e) => this.props.handleParamNumValuesAllowedChange(e, this.props.uuid)}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            groupSelectionMode={this.props.groupSelectionMode}
                                            viewOnlyMode={this.props.viewOnlyMode}
                                            removeValue={(i) => this.props.removeValue(i, this.props.uuid)}
                                        />;
            }else if(this.props.paramTypeData.type === "flag"){
                paramTypeSpecificForm = <FlagParam/>;
            }else if(this.props.paramTypeData.type === "date"){
                paramTypeSpecificForm = <DateParam
                                            dateRestriction={this.props.paramTypeData.dateRestriction}
                                            otherDataValue={this.props.paramTypeData.otherDataValue}
                                            uuid={this.props.uuid}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            groupSelectionMode={this.props.groupSelectionMode}
                                            viewOnlyMode={this.props.viewOnlyMode}
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
                                            viewOnlyMode={this.props.viewOnlyMode}
                                            handleParamNumberRestrictionChange={(e, restrictionToChange) => this.props.handleParamNumberRestrictionChange(e, restrictionToChange, this.props.uuid)}
                                        />;
            }
        }

        return (
            <span>
                <input
                    className={`${this.props.paramAnnotatorCreated ? styles.paramTextAnnotatorCreated : styles.paramText} ${styles.inputNaturalLanguage} ${(this.props.uuidInEditMode && this.props.uuidInEditMode !== this.props.uuid || this.props.groupSelectionMode ? styles.grayedOut : '')}`}
                    log-this-element=""
                    uuid={this.props.uuid}
                    text-item-type="param"
                    type="text"
                    size={Math.max(this.props.paramName.length, 20)}
                    value={this.props.paramName}
                    onChange={(e) => this.props.handleParamNameChange(e, this.props.uuid)}
                    disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
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
                        log-this-element=""
                        value={this.props.paramTypeData.type}
                        onChange={(e) => this.props.handleParamTypeChange(e, this.props.uuid)}
                        disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
                        className={this.props.incompleteFormParamIDs.includes(this.props.uuid) ? styles.incompleteForm : "" }
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
                                    log-this-element=""
                                    name={`optional_paramOptional_${this.props.uuid}`}
                                    id={`optional_paramOptional_${this.props.uuid}`}
                                    value="optional"
                                    checked={this.props.paramIsOptional}
                                    onChange={(e) => this.props.handleParamOptionalChange(e, this.props.uuid)}
                                    disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
                                />
                                <label htmlFor={`optional_paramOptional_${this.props.uuid}`}>Yes, this value is optional</label>
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    log-this-element=""
                                    name={`notOptional_paramOptional_${this.props.uuid}`}
                                    id={`notOptional_paramOptional_${this.props.uuid}`}
                                    value="notOptional"
                                    checked={!this.props.paramIsOptional}
                                    onChange={(e) => this.props.handleParamOptionalChange(e, this.props.uuid)}
                                    disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
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

        this.runExtractionTimeout;

        this.state = {
            text: props.text,
            //textItems: initialTextItems,
            idToItem: props.idToItem || initialTextItems, // want to use existing data passed in via props (or if no data exists, then use initialTextItems)
            groupSelectionMode: false,
            //uuidInEditMode: false
            uuidInEditMode: null,
            hoveredID: null,
            errorMessage: null,
            //websiteUrl: props.websiteUrl,
            textEditable: props.textEditable,
            groupingSupported: props.groupingSupported,
            userFeedback: "",
            incompleteFormParamIDs: []
        }
    }

    handleTextSelection(textElement, uuid){
        if(!this.props.viewOnlyMode){
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

                            // Extract values from page, using the initial value highlighted in the NL
                                // Trim initial example value (in case user accidentally included whitespace at beginning or end when doing text selection)
                            const extractedExampleValues = getValues([selectedText.trim()], []);
                            
                            // Update these values in the data structure, so that it renders on the page
                            newParamItem.paramTypeData.possibleValues = extractedExampleValues;
                            // Include initial value from NL as added by user
                            newParamItem.paramTypeData.valuesExplicitlyAddedByUser = [selectedText.trim()];

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

        // Remove previous value of this textfield from valuesExplicitlyAddedByUser
        //let prevValueIndex = idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser.indexOf(idToItemClone[uuid].paramTypeData.possibleValues[i]);
        let prevValueIndex = indexOfCaseInsensitive(idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser, idToItemClone[uuid].paramTypeData.possibleValues[i]);
        if(prevValueIndex > -1){
            idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser.splice(prevValueIndex, 1);
        }

        // Add new value of this textfield to valuesExplicitlyAddedByUser
        idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser.push(e.target.value);
        // Also make sure new value of this textfield is not in valuesExplicitlyDeletedByUser (if it is, remove from valuesExplicitlyDeletedByUser)
        //let curValueIndex = idToItemClone[uuid].paramTypeData.valuesExplicitlyDeletedByUser.indexOf(e.target.value);
        let curValueIndex = indexOfCaseInsensitive(idToItemClone[uuid].paramTypeData.valuesExplicitlyDeletedByUser, e.target.value);
        if(curValueIndex > -1){
            idToItemClone[uuid].paramTypeData.valuesExplicitlyDeletedByUser.splice(curValueIndex, 1);
        }

        idToItemClone[uuid].paramTypeData.possibleValues[i] = e.target.value;

        // We don't want to run extraction algorithm after every keypress
            // That's going to be confusing and annoying (a copy of each intermediate string would appear as a new value)
        // So instead, we'll wait for x seconds of inactivity; at that point, we'll assume the user has finished typing their value and we'll run the extraction algorithm
        clearTimeout(this.runExtractionTimeout);
        this.runExtractionTimeout = setTimeout(function(context){            
            //const extractedExampleValues = getValues(idToItemClone[uuid].paramTypeData.possibleValues);
            console.log("idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser", idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser);
            console.log("idToItemClone[uuid].paramTypeData.valuesExplicitlyDeletedByUser", idToItemClone[uuid].paramTypeData.valuesExplicitlyDeletedByUser);
            const extractedExampleValues = getValues(idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser, idToItemClone[uuid].paramTypeData.valuesExplicitlyDeletedByUser);
            // Update these values in the data structure, so that it renders on the page
            idToItemClone[uuid].paramTypeData.possibleValues = extractedExampleValues;
            context.setState({
                idToItem: idToItemClone
            });
        }, 1500, this);

        this.setState({
            idToItem: idToItemClone
        });
        //this.exitEditMode();
    }

    handleParamValueBlurred(e, i, uuid) {
        console.log("handleParamValueBlurred");
        console.log("e", e);

        // Focus has left this example value textfield
        // In case the user just edited the value of this textfield, let's run the value extraction algorithm
        
        const idToItemClone = _.cloneDeep(this.state.idToItem);

        //const extractedExampleValues = getValues(idToItemClone[uuid].paramTypeData.possibleValues);
        const extractedExampleValues = getValues(idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser, idToItemClone[uuid].paramTypeData.valuesExplicitlyDeletedByUser);
        // Update these values in the data structure, so that it renders on the page
        idToItemClone[uuid].paramTypeData.possibleValues = extractedExampleValues;

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

        // Select/put cursor in newly added <input>
        setTimeout(function(){
            const exampleTextFields = document.querySelector(`[uuid="${uuid}"]`).closest("[container]").querySelectorAll("[examples-area] input[type='text']");
            const lastTextField = exampleTextFields[exampleTextFields.length-1];
            lastTextField.select();
        }, 0);
    }

    handleGroupSelectionChange(e, uuid){
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        idToItemClone[uuid].currentlySelected = e.target.checked;
        this.setState({
            idToItem: idToItemClone
        });
    }

    handleUserFeedbackChange(e, uuid) {
        this.setState({
            userFeedback: e.target.value
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

        const valueToRemove = idToItemClone[uuid].paramTypeData.possibleValues[i];
        // Make sure valueToRemove isn't in valuesExplicitlyAddedByUser
        //const indexOfValueInExplicitlyAddedValuesList = idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser.indexOf(valueToRemove);
        const indexOfValueInExplicitlyAddedValuesList = indexOfCaseInsensitive(idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser, valueToRemove);
        if(indexOfValueInExplicitlyAddedValuesList > -1){
            idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser.splice(indexOfValueInExplicitlyAddedValuesList, 1);
        }

        // Add valueToRemove to valuesExplicitlyDeletedByUser
        idToItemClone[uuid].paramTypeData.valuesExplicitlyDeletedByUser.push(valueToRemove);

        idToItemClone[uuid].paramTypeData.possibleValues.splice(i, 1);

        //const extractedExampleValues = getValues(idToItemClone[uuid].paramTypeData.possibleValues);
        const extractedExampleValues = getValues(idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser, idToItemClone[uuid].paramTypeData.valuesExplicitlyDeletedByUser);
        // Update these values in the data structure, so that it renders on the page
        idToItemClone[uuid].paramTypeData.possibleValues = extractedExampleValues;

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
            possibleValues: idToItemClone[uuid].paramTypeData.possibleValues,
            valuesExplicitlyAddedByUser: idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser || [],
            valuesExplicitlyDeletedByUser: idToItemClone[uuid].paramTypeData.valuesExplicitlyDeletedByUser || []
        };

        // Check if param type is actually set, and if so, make sure to remove the param's uuid from this.state.incompleteFormParamIDs if it is in there
        const incompleteFormParamIDsClone = _.cloneDeep(this.state.incompleteFormParamIDs);
        if(value !== ""){
            // Param type is set
            if(incompleteFormParamIDsClone.includes(uuid)){
                const index = incompleteFormParamIDsClone.indexOf(uuid);
                incompleteFormParamIDsClone.splice(index, 1);
            }
        }

        if(value === "freeform"){
            // Nothing else to set
        }else if(value === "enumeration"){
            // Nothing else to set
        }else if(value === "flag"){
            // Nothing else to set
        }else if(value === "date"){
            paramTypeData.dateRestriction = "";
            paramTypeData.otherDataValue = "";
        }else if(value === "number"){
            paramTypeData.restrictedToIntegers = false;
            paramTypeData.restrictedToRange = false;
            paramTypeData.rangeStart = "";
            paramTypeData.rangeEnd = "";
        }
        idToItemClone[uuid].paramTypeData = paramTypeData;

        this.setState({
            idToItem: idToItemClone,
            incompleteFormParamIDs: incompleteFormParamIDsClone
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

        const idToItemClone = _.cloneDeep(this.state.idToItem);

        // Check if type is "text", if it is then update otherDataValue value (and dateRestriction should be "other")
        if(target.type === "text"){
            idToItemClone[uuid].paramTypeData.dateRestriction = "other";
            idToItemClone[uuid].paramTypeData.otherDataValue = target.value;
        }else{
            const value = target.type === 'checkbox' ? target.checked : target.value;
            idToItemClone[uuid].paramTypeData.dateRestriction = value;
        }
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
            // Check if parameter element (specifically, its bottom) is currently within viewport. If it isn't, only then call scrollIntoView (we don't want to call scrollIntoView unnecessarily, because it will cause things to move around and confuse the user)
            if(document.querySelector(`[uuid="${uuid}"]`).closest("[container]").getBoundingClientRect().bottom > window.innerHeight){
                document.querySelector(`[uuid="${uuid}"]`).closest("[container]").scrollIntoView({block: "end", inline: "nearest"});
            }
            document.querySelector(`[uuid="${uuid}"]`).select(); // Select param name text so user can just start typing to edit
        }, 0);
    }

    scrollGroupIntoViewAndHighlightNameText(uuid){
        // This is a bit hacky, but want to wait long enough for the state to update to include this new group, then we'll scroll to it and highlight the text
        setTimeout(function(){
            const groupTop = document.querySelector(`[uuid="${uuid}"]`).closest("[container]").getBoundingClientRect().top;

            // Check if group top is in viewport. Only if it isn't, scroll to show it at top. Don't want to scroll unnecessarily (will make things move around and confuse the user)
            if(groupTop < 0){
                const topButtonRowHeight = document.querySelector("[top-button-row]").getBoundingClientRect().height;
                window.scroll(0, (groupTop + window.scrollY) - topButtonRowHeight);
                document.querySelector(`[uuid="${uuid}"] [group-name]`).select();
            }
        }, 0);
    }

    scrollToBottomOfPage(){
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth"
        });
    }

    async handleSubmit(){
        console.log("handleSubmit");

        // First, check that all parameter forms have been completed (for now, that a type has been selected from the <select> menu)
            // If a type hasn't been selected, then show user a pop-up alert and highlight the items that need to be fixed (e.g., with a red border)
        
        let incompleteFormParamIDs = [];
        for (const [key, value] of Object.entries(this.state.idToItem)) {
            // If it's a param, 
            if(value.type === "param"){
                if(value.paramTypeData.type === ""){
                    // The user didn't select a param type from the <select> menu yet
                    incompleteFormParamIDs.push(key);
                }
            }
        }

        if(incompleteFormParamIDs.length === 0){
            // All parameter forms have been filled in; confirm with user that they are finished, and then complete the submit operation
            
            const proceed = window.confirm("Are you sure you want to submit? You won't be able to make any further changes.");

            if(proceed){
                // Save data to db
                const dataObj = {
                    name: this.props.name,
                    idToItem: this.state.idToItem,
                    userFeedback: this.state.userFeedback
                };

                this.props.writeToDBAndDirectToNextPage(dataObj);
            }
        }else{
            // Some parameter forms haven't been filled in; show the user an error
            window.alert("Some forms not completed. Make sure to complete all forms before submitting.");

            // Show a red border around forms that haven't been filled in, to indicate error
            // Have a state variable for things that haven't been filled in
            this.setState({
                incompleteFormParamIDs: incompleteFormParamIDs
            });

            // Scroll to first form that isn't filled in
            setTimeout(function(){

                const firstFormUUID = incompleteFormParamIDs[0];
                const paramTop = document.querySelector(`[uuid="${firstFormUUID}"]`).closest("[container]").getBoundingClientRect().top;

                // Check if param top is in viewport. Only if it isn't, scroll to show it at top. Don't want to scroll unnecessarily (will make things move around and confuse the user)
                if(paramTop < 0){
                    const topButtonRowHeight = document.querySelector("[top-button-row]").getBoundingClientRect().height;
                    window.scroll(0, (paramTop + window.scrollY) - topButtonRowHeight);
                }
            }, 100);
        }
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
                            handleParamValueBlurred={(e, i) => this.handleParamValueBlurred(e, i, textItem.uuid)}
                            hoveredID={this.state.hoveredID}
                            groupSelectionMode={this.state.groupSelectionMode}
                            currentlySelected={textItem.currentlySelected}
                            uuidInEditMode={this.state.uuidInEditMode}
                            groupSelectionMode={this.state.groupSelectionMode}
                            viewOnlyMode={this.props.viewOnlyMode}
                            incompleteFormParamIDs={this.state.incompleteFormParamIDs}
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
                                log-this-element=""
                                value={textItem.groupName}
                                onChange={(e) => this.handleGroupNameChange(e, textItem.uuid)}
                                disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.props.viewOnlyMode}
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
                            log-this-element=""
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
                                    disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.props.viewOnlyMode}
                                    title={textItem.type === "param" ? "Delete parameter" : "Delete group"}
                                >x</button>
                                {this.state.groupingSupported ? (
                                    <span
                                        className={styles.operationsButtonGroup}
                                    >
                                        <button
                                            className={styles.groupButton}
                                            onClick={() => this.enterGroupSelection(textItem.uuid)}
                                            disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.props.viewOnlyMode}
                                        >Group</button>
                                        { textItem.type === "group" ? (
                                            <button
                                                className={styles.addParameterButton}
                                                onClick={() => this.addParameter(textItem.uuid)}
                                                disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.props.viewOnlyMode}
                                            >Add item</button>
                                        ):(
                                            ""
                                        ) }
                                    </span>
                                ) : (
                                    ""
                                ) }
                                
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
                            viewOnlyMode={this.props.viewOnlyMode}
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
                {!this.props.viewOnlyMode ? (
                    <span
                        className={styles.topButtonRow}
                        top-button-row=""
                    >
                        <div>
                            <button
                                className={styles.topButton}
                                onClick={() => this.addParameter("root")}
                                disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.props.viewOnlyMode}
                            >
                                Add item
                            </button>
                            {this.state.groupingSupported ? (
                                <button
                                    className={styles.topButton}
                                    onClick={() => this.enterGroupSelection(null)}
                                    disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.props.viewOnlyMode}
                                >
                                    Group
                                </button>
                            ) : (
                                ""
                            ) }
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
                                onClick={() => this.scrollToBottomOfPage()}
                                className={`${styles.submitButton} ${styles.topButton}`}
                                disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.props.viewOnlyMode}
                            >
                                Next
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
                ) : (
                    ""
                ) }
                
                <div
                    className={styles.contentArea}
                    content-area=""
                >
                    <div
                        className={styles.request}
                    >
                        {/* <span
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
                            ) } */}
                            {domTextItems}
                        {/* </span> */}
                    </div>
                    <div
                        className={styles.websiteIframe}
                    >
                        {/* <a
                            href={this.state.websiteUrl}
                        >
                            {this.state.websiteUrl}
                        </a> */}
                        {/* <iframe
                            width="98%"
                            height="700"
                            //src={this.state.websiteUrl}
                            src="/website_clones/chipotle_clone.html"
                        >
                        </iframe> */}
                        {/* <ChipotleClone /> */}
                        {/* <OscarsClone /> */}
                        <Clone
                            websiteHTML={this.props.websiteHTML}
                        />
                    </div>
                </div>
                {!this.props.viewOnlyMode ? (
                    <div
                        className={styles.userFeedbackArea}
                    >
                        <label
                            htmlFor="userFeedback"
                            className={styles.userFeedbackLabel}
                        >
                            Do you have any feedback for us, or is there any other information you wanted to share that the interface didn't let you share?
                        </label>
                        <textarea
                            className={styles.userFeedback}
                            id="userFeedback"
                            name="userFeedback"
                            rows="5"
                            cols="33"
                            value={this.state.userFeedback}
                            onChange={(e) => this.handleUserFeedbackChange(e)}
                        >
                        </textarea>
                    </div>
                ) : (
                    ""
                ) }
                {!this.props.viewOnlyMode ? (
                    <button
                        onClick={() => this.handleSubmit()}
                        className={`${styles.submitButton} ${styles.topButton}`}
                        disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.props.viewOnlyMode}
                    >
                        {this.props.submitText}
                    </button>
                ) : (
                    ""
                ) }
            </div>
        );
    }
}

export default withRouter(NaturalLanguage);