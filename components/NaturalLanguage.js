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
                    examplesText="What are some things the user can type in?"
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
                    examplesText="What are some things the user can choose?"
                />
                <div
                    className={styles.paramDataChunk}
                >
                    How many of these can the user choose?
                    <div>
                        <input
                            type="radio"
                            name={`numValuesAllowed_${this.props.uuid}`}
                            value="one"
                            checked={!this.props.paramMultipleValuesAllowed}
                            onChange={(e) => this.props.handleParamNumValuesAllowedChange(e, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                        />
                        <label htmlFor="one">1</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            name={`numValuesAllowed_${this.props.uuid}`}
                            value="multiple"
                            checked={this.props.paramMultipleValuesAllowed}
                            onChange={(e) => this.props.handleParamNumValuesAllowedChange(e, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                        />
                        <label htmlFor="multiple">1 or more</label>
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
                            onChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                        />
                        <label htmlFor="past">Restricted to dates in the past</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name={`dateRestrictions_${this.props.uuid}`}
                            value="future"
                            checked={this.props.dateRestriction === "future"}
                            onChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                        />
                        <label htmlFor="future">Restricted to dates in the future</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name={`dateRestrictions_${this.props.uuid}`}
                            value="none"
                            checked={this.props.dateRestriction === "none"}
                            onChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                        />
                        <label htmlFor="none">No restrictions</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name={`dateRestrictions_${this.props.uuid}`}
                            value="other"
                            checked={this.props.dateRestriction === "other"}
                            onChange={(e) => this.props.handleParamDateRestrictionChange(e, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                        />
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
                            onChange={(e) => this.props.handleParamNumberRestrictionChange(e, "restrictedToIntegers", this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                        />
                        <label htmlFor={`integers_${this.props.uuid}`}>Restricted to integers</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name={`range_${this.props.uuid}`}
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
                                            possibleValues={this.props.paramTypeData.possibleValues}
                                            handleAddBlankParamValue={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                                            handleParamValueChange={(e, i) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            groupSelectionMode={this.props.groupSelectionMode}
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
                                            groupSelectionMode={this.props.groupSelectionMode}
                                            removeValue={(i) => this.props.removeValue(i, this.props.uuid)}
                                        />;
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
                    className={`${styles.paramText} ${styles.inputNaturalLanguage} ${(this.props.uuidInEditMode && this.props.uuidInEditMode !== this.props.uuid || this.props.groupSelectionMode ? styles.grayedOut : '')}`}
                    uuid={this.props.uuid}
                    text-item-type="param"
                    type="text"
                    size={Math.max(this.props.paramName.length, 20)}
                    value={this.props.paramName}
                    onChange={(e) => this.props.handleParamNameChange(e, this.props.uuid)}
                    disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
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
                        disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                    >
                        <option value="">--Select parameter type--</option>
                        <option value="freeform">Something the user types in</option>
                        <option value="enumeration">Something user selects from a list</option>
                        <option value="date">A date</option>
                        <option value="number">A number</option>
                    </select>

                    {paramTypeSpecificForm}

                    {/* Only show these questions after the user has selected a parameter type
                    (because we want the user to focus on that first) */}
                    {this.props.paramTypeData.type !== "" ? (
                        <div
                            className={styles.paramDataChunk}
                        >
                            Parameter is optional:
                            <input
                                name={`paramOptional_${this.props.uuid}`}
                                type="checkbox"
                                checked={this.props.paramIsOptional}
                                onChange={(e) => this.props.handleParamOptionalChange(e, this.props.uuid)}
                                disabled={this.props.uuidInEditMode || this.props.groupSelectionMode}
                            />
                        </div>
                    ) : (
                        ""
                    ) }
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
            hoveredID: null,
            errorMessage: null,
            websiteUrl: props.websiteUrl,
            textEditable: props.textEditable
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
                            paramTypeData: null
                        };
                        const newParamItem = {
                            text: selectedText,
                            uuid: uuidv4(),
                            type: "param",
                            itemIDs: [],
                            parentID: parentID,
                            paramName: `<set param name for *${selectedText}*>`,
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
                            rootItemIDs: rootItemIDsClone,
                            hoveredID: newParamItem.uuid
                        });
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

        // If item with uuid has a non-root parent (i.e., it is within a group),
            // change the hoveredID to the parent, because at this point the parent is being hovered still
            // but we just aren't hearing any explicit mouseenter event for it
        let newHoveredID = null;
        const parentID = this.state.idToItem[uuid].parentID;
        if(parentID !== "root"){
            newHoveredID = parentID;
        }
    
        this.setState({
            hoveredID: newHoveredID
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

        // Doesn't make sense to group if only 1
        if(selectedIDs.length > 1){
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
                let childIDs;
                if(parentID !== "root"){
                    childIDs = this.state.idToItem[parentID].itemIDs;
                }else{
                    // parentID is null because it's root
                    childIDs = this.state.rootItemIDs;
                }
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
                    paramTypeData: null
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

                // If parent isn't root, then instead of using this.state.rootItemIDs, use parent's itemIDs attribute
                // Update ID list
                const rootItemIDsClone = _.cloneDeep(this.state.rootItemIDs);

                let itemIDsList;
                if(parentID === "root"){
                    itemIDsList = rootItemIDsClone;
                }else{
                    itemIDsList = idToItemClone[parentID].itemIDs;
                }

                itemIDsList.splice(firstSelectedIDIndex, (lastSelectedIDIndex - firstSelectedIDIndex + 1), newGroupItem.uuid);

                // Make sure all items currently not selected
                for (const item of Object.values(idToItemClone)) {
                    item.currentlySelected = false;
                }

                // Update whole textItems to make sure we re-render
                this.setState({
                    idToItem: idToItemClone,
                    rootItemIDs: rootItemIDsClone,
                    groupSelectionMode: false,
                    hoveredID: newGroupItem.uuid,
                    errorMessage: null
                });
            }
        }else{
            this.exitGroupCreationMode();
        }
    }

    removeItem(uuid, e){
        console.log("removeItem");
        console.log("uuid", uuid);

        let rootItemIDsClone = _.cloneDeep(this.state.rootItemIDs);
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
            if(parentID === "root"){
                rootItemIDsClone = newItemIDsList;
            }else{
                idToItemClone[parentID].itemIDs = newItemIDsList;
            }

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
            rootItemIDs: rootItemIDsClone,
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
                    >
                        {this.renderItemsList(textItem.itemIDs)}
                    </span>
                );
            }

            return (
                <span
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
                                <button
                                    className={styles.groupButton}
                                    onClick={() => this.enterGroupSelection(textItem.uuid)}
                                    disabled={this.state.uuidInEditMode || this.state.groupSelectionMode}
                                >Group</button>
                            </span>
                        ) : (
                            ""
                        )
                    )}
                    { itemContents }
                </span>
            );
        }
        
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

        //return this.renderItemsList(this.state.rootItemIDs);

        //const textItems = this.state.textItems;
        const rootItemIDs = this.state.rootItemIDs;
        console.log("rootItemIDs", rootItemIDs);

        console.log("this.state.idToItem", this.state.idToItem);
        // Render each item as appropriate (using TextItem component)
        const domTextItems = this.renderItemsList(this.state.rootItemIDs);

        return (
            <div
                // className={(this.state.uuidInEditMode ? styles.editBackground : '')}
            >
                {this.state.groupSelectionMode ? (
                    <span
                    className={styles.topButtonRow}
                    >
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
                <div>
                    <p
                        className={styles.errorMessage}
                    >
                        {this.state.errorMessage}
                    </p>
                </div>
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