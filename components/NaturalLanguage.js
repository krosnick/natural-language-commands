import React, {useRef, useState} from 'react';
import { withRouter } from 'next/router';
import _, { set } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import styles from './NaturalLanguage.module.css';
import ChipotleClone from './website_clones/ChipotleClone';
import OscarsClone from './website_clones/OscarsClone';
import ForbesClone from './website_clones/ForbesClone';
// import MLBClone from './website_clones/MLBClone';
import WikipediaClone from './website_clones/WikipediaClone';
import CSEFacultyClone from './website_clones/CSEFacultyClone';
import SteveWebsiteClone from './website_clones/SteveWebsiteClone';
import IMDBClone from './website_clones/IMDBClone';
import Clone from './website_clones/Clone';
import { /*getValues,*/ indexOfCaseInsensitive, getCandidateLists, makeXPathsMoreRobust } from './valueExtraction';
import { generateProgramAndIdentifyNeededDemos, executeProgram, replayDemo, getCommonPrefixLength } from './generateProgram';
import WebsiteEventListener from './WebsiteEventListener';
import MonacoEditor from "@monaco-editor/react";
import tfjs from '@tensorflow/tfjs';
import { load } from '@tensorflow-models/universal-sentence-encoder';
import * as acorn from 'acorn';
import * as fontoxpath from 'fontoxpath';
import chroma from "chroma-js";

const embeddedWebsiteXPathPrefix = '//*[@clone]';

// Adapted from https://developer.mozilla.org/en-US/docs/Web/XPath/Snippets
function getXPathForElement(el, xml) {
	var xpath = '';
	var pos, tempitem2;

	while(el !== xml.documentElement) {
		pos = 0;
		tempitem2 = el;
		while(tempitem2) {
			if (tempitem2.nodeType === 1 && tempitem2.nodeName === el.nodeName) { // If it is ELEMENT_NODE of the same name
				pos += 1;
			}
			tempitem2 = tempitem2.previousSibling;
		}

		//xpath = "*[name()='"+el.nodeName+"' and namespace-uri()='"+(el.namespaceURI===null?'':el.namespaceURI)+"']["+pos+']'+'/'+xpath;
        xpath = el.nodeName+"["+pos+']'+'/'+xpath;
		el = el.parentNode;
	}
    //xpath = '/*'+"[name()='"+xml.documentElement.nodeName+"' and namespace-uri()='"+(el.namespaceURI===null?'':el.namespaceURI)+"']"+'/'+xpath;
	xpath = "/"+xml.documentElement.nodeName+'/'+xpath;
	xpath = xpath.replace(/\/$/, '');
    xpath = xpath.toLowerCase();
	return xpath;
}

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

// When we're rendering the NL template (i.e., user has already parameterized the NL) for the user to fill in params' values for upcoming demo
function TemplateRegularTextItem(props){

    return (
        <span
            className={styles.relative}
        >
            <span
                className={`${styles.inputNaturalLanguage} ${(props.uuidInEditMode === props.uuid ? styles.editBackground : '')} ${(props.uuidInEditMode && props.uuidInEditMode !== props.uuid || props.groupSelectionMode ? styles.grayedOut : '')}`}
                uuid={props.uuid}
                text-item-type="regular"
            >
                {props.text}
            </span>
        </span>
    );
}

function ExtractedValueOptions(props){

    //const candidateLists = getCandidateLists([props.selectedText.trim()], false, '//*[@clone]');

    if(props.candidateLists.length === 0){
        props.handleInitialValuesSelected([], props.uuid);
        return null;
    }else if(props.candidateLists.length === 1){
        props.handleInitialValuesSelected(candidateLists[selectedExtractedValueIndex], props.uuid);
        return null;
    }else{               
        const [selectedExtractedValueIndex, updateSelectedExtractedValueIndex] = useState(-1);
        const radioButtonList = props.candidateLists.map(function(candidate, i){
            const valuesTextOnlyList = candidate.map((valueItem) => valueItem.textCandidate);
            return (
                <div
                    className={styles.extractedValueOptionText}
                >
                    <input
                        type="radio"
                        log-this-element=""
                        name={`extractedValueOption_${props.uuid}_${i}`}
                        id={`extractedValueOption_${props.uuid}_${i}`}
                        value={i}
                        checked={selectedExtractedValueIndex === i}
                        onChange={() => updateSelectedExtractedValueIndex(i)}
                        disabled={props.uuidInEditMode || props.groupSelectionMode || props.viewOnlyMode}
                    />
                    <label htmlFor={`extractedValueOption_${props.uuid}_${i}`}
                    >{valuesTextOnlyList.toString()}</label>
                </div>
            );
        });

        // Get list of values, which will be shown in UserProvidedExamples view
        function getListOfValues(){
            if(selectedExtractedValueIndex===props.candidateLists.length){
                // User chose the last radio button
                if(props.isSuperlative){
                    // user chose "most, least ____"
                    console.log("props.mostLeastAdjective", props.mostLeastAdjective);
                    return [
                        {
                            textCandidate: `most ${props.mostLeastAdjective || ""}`,
                            xPath: null
                        },
                        {
                            textCandidate: `least ${props.mostLeastAdjective || ""}`,
                            xPath: null
                        }
                    ]
                }else{
                    // User chose "none of these", so list should be length zero
                    return [];
                }
            }else{
                return props.candidateLists[selectedExtractedValueIndex];
            }
        }

        return (
            <div
                className={styles.extractedValueForm}
            >
                Select the set of possible values that is <b>most correct</b>.
                {props.isSuperlative ? (
                    ""
                ):(
                    'After you click "Select", you will be able to edit, add to, and delete from the list.'
                )}
                {radioButtonList}
                {props.isSuperlative ? (
                    // for superlative, the alternative to 'none of these' will be "most ____, least ____" which the user can fill in
                    <div
                        className={styles.extractedValueOptionText}
                    >
                        <input
                            type="radio"
                            log-this-element=""
                            name={`extractedValueOption_${props.uuid}_${props.candidateLists.length}`}
                            id={`extractedValueOption_${props.uuid}_${props.candidateLists.length}`}
                            value={props.candidateLists.length}
                            checked={selectedExtractedValueIndex === props.candidateLists.length}
                            onChange={() => updateSelectedExtractedValueIndex(props.candidateLists.length)}
                            disabled={props.uuidInEditMode || props.groupSelectionMode || props.viewOnlyMode}
                        />
                        <label htmlFor={`extractedValueOption_${props.uuid}_${props.candidateLists.length}`}
                        >
                            most, least
                            <input
                                className={`${(props.uuidInEditMode && props.uuidInEditMode !== props.uuid || props.groupSelectionMode ? styles.grayedOut : '')}`}
                                log-this-element=""
                                type="text"
                                value={props.mostLeastAdjective}
                                onChange={(e) => props.handleMostLeastAdjectiveChange(e, props.uuid)}
                                //onBlur={(e) => props.handleParamValueBlurred(e, i, props.uuid)}
                                disabled={props.uuidInEditMode || props.groupSelectionMode || props.viewOnlyMode}
                            />
                        </label>
                    </div>
                ):(
                    <div
                        className={styles.extractedValueOptionText}
                    >
                        <input
                            type="radio"
                            log-this-element=""
                            name={`extractedValueOption_${props.uuid}_${props.candidateLists.length}`}
                            id={`extractedValueOption_${props.uuid}_${props.candidateLists.length}`}
                            value={props.candidateLists.length}
                            checked={selectedExtractedValueIndex === props.candidateLists.length}
                            onChange={() => updateSelectedExtractedValueIndex(props.candidateLists.length)}
                            disabled={props.uuidInEditMode || props.groupSelectionMode || props.viewOnlyMode}
                        />
                        <label htmlFor={`extractedValueOption_${props.uuid}_${props.candidateLists.length}`}
                        >None of these</label>
                    </div>
                )}
                <button
                    className={styles.selectInitialValuesButton}
                    disabled={selectedExtractedValueIndex === -1 || props.uuidInEditMode || props.groupSelectionMode || props.viewOnlyMode}
                    onClick={() => props.handleInitialValuesSelected(getListOfValues(), props.uuid)} // Empty list if "None of these" is selected
                >
                    Select
                </button>
            </div>
        );
    }
}

class UserProvidedExamples extends React.Component {
    render(){
        console.log("this.props", this.props);
        console.log("this.props.possibleValues", this.props.possibleValues);
        const possibleValues = this.props.possibleValues.map((valueObj, i) =>
            <li
                // key={`${value}_${i}`}
                //key={value}
            >
                {this.props.isSuperlative ? (
                    // for superlative, don't want it to be editable
                    valueObj.textCandidate
                ):(
                    <>
                        <input
                            className={`${(this.props.uuidInEditMode && this.props.uuidInEditMode !== this.props.uuid || this.props.groupSelectionMode ? styles.grayedOut : '')}`}
                            log-this-element=""
                            type="text"
                            value={valueObj.textCandidate}
                            onChange={(e) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                            //onBlur={(e) => this.props.handleParamValueBlurred(e, i, this.props.uuid)}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
                        >
                        </input>
                        <button
                            onClick={() => this.props.removeValue(i, this.props.uuid)}
                            className={styles.removeValueButton}
                            disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
                            title="Delete"
                        >x</button>
                    </>
                )}
            </li>
        );
        return (
            <div
                className={styles.paramDataChunk}
                examples-area=""
            >
                {this.props.examplesText}
                {this.props.isSuperlative ? (
                    ""
                ):(
                    <div
                        className={styles.importantMessage}
                    >
                        Please check the auto-populated values, and make corrections as needed.
                    </div>
                )}
                <ul>{possibleValues}</ul>
                {this.props.isSuperlative ? (
                    ""
                ):(
                    <button
                        onClick={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                        className={styles.addValuesButton}
                        disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
                    >
                        Add another value
                    </button>
                )}
            </div>
        )
    }
}

class TemplateFreeformParam extends React.Component {
    render(){
        const defaultOption = `<${this.props.paramName}>`;
        return (
            // <input>
            <input
                //className={`${this.props.paramAnnotatorCreated ? styles.paramTextAnnotatorCreated : styles.paramText} ${styles.inputNaturalLanguage} ${(this.props.uuidInEditMode && this.props.uuidInEditMode !== this.props.uuid || this.props.groupSelectionMode ? styles.grayedOut : '')}`}
                log-this-element=""
                uuid={this.props.uuid}
                type="text"
                size={Math.max(this.props.paramName.length, 20)}
                value={this.props.paramValue || defaultOption}
                onChange={(e) => this.props.handleTemplateParamValueChange(e, this.props.uuid, this.props.demoIndex)}
                className={this.props.uuid === this.props.specificallyForParamUuid? styles.specialParam : ""}
                disabled={!this.props.valuesEditable || this.props.uuid === this.props.specificallyForParamUuid || this.props.demoIndexInRecordingMode !== null}
                //disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
            >
            </input>
        );
    }
}

class TemplateEnumerationParam extends React.Component {
    render(){
        // Create list of <option> elements based on possibleValues
        const optionItems = this.props.possibleValues.map((possibleValueObj, i) => {
            return (
                <option
                    value={possibleValueObj.textCandidate}
                >
                    {possibleValueObj.textCandidate}
                </option>
            );
        });

        const defaultOption = `<${this.props.paramName}>`;
        return (
            // <select>
            <select
                log-this-element=""
                value={this.props.paramValue || defaultOption}
                onChange={(e) => this.props.handleTemplateParamValueChange(e, this.props.uuid, this.props.demoIndex)}
                className={this.props.uuid === this.props.specificallyForParamUuid? styles.specialParam : ""}
                disabled={!this.props.valuesEditable || this.props.uuid === this.props.specificallyForParamUuid || this.props.demoIndexInRecordingMode !== null}
                //disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
                //className={this.props.incompleteFormParamIDs.includes(this.props.uuid) ? styles.incompleteForm : "" }
            >
                <option
                    value={defaultOption}
                >
                    {defaultOption}
                </option>
                {optionItems}
            </select>
        );
    }
}

// Currently identical to TemplateEnumerationParam
class TemplateSuperlativeParam extends React.Component {
    render(){
        // Create list of <option> elements based on possibleValues
        const optionItems = this.props.possibleValues.map((possibleValueObj, i) => {
            return (
                <option
                    value={possibleValueObj.textCandidate}
                >
                    {possibleValueObj.textCandidate}
                </option>
            );
        });

        const defaultOption = `<${this.props.paramName}>`;
        return (
            // <select>
            <select
                log-this-element=""
                value={this.props.paramValue || defaultOption}
                onChange={(e) => this.props.handleTemplateParamValueChange(e, this.props.uuid, this.props.demoIndex)}
                className={this.props.uuid === this.props.specificallyForParamUuid? styles.specialParam : ""}
                disabled={!this.props.valuesEditable || this.props.uuid === this.props.specificallyForParamUuid || this.props.demoIndexInRecordingMode !== null}
                //disabled={this.props.uuidInEditMode || this.props.groupSelectionMode || this.props.viewOnlyMode}
                //className={this.props.incompleteFormParamIDs.includes(this.props.uuid) ? styles.incompleteForm : "" }
            >
                <option
                    value={defaultOption}
                >
                    {defaultOption}
                </option>
                {optionItems}
            </select>
        );
    }
}

class TemplateFlagParam extends React.Component {
    render(){
        return (
            <div>Implement TemplateFlagParam</div>
        );
    }
}

class TemplateDateParam extends React.Component {
    render(){
        return (
            <div>Implement TemplateDateParam</div>
        );
    }
}

class TemplateNumberParam extends React.Component {
    render(){
        return (
            <div>Implement TemplateNumberParam</div>
        );
    }
}

class FreeformParam extends React.Component {
    render(){
        return (
            <div>
                {this.props.initialValuesSelected ? (
                    <UserProvidedExamples
                        possibleValues={this.props.possibleValues}
                        isSuperlative={false}
                        handleAddBlankParamValue={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                        handleParamValueChange={(e, i) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                        handleParamValueBlurred={(e, i) => this.props.handleParamValueBlurred(e, i, this.props.uuid)}
                        uuidInEditMode={this.props.uuidInEditMode}
                        groupSelectionMode={this.props.groupSelectionMode}
                        viewOnlyMode={this.props.viewOnlyMode}
                        removeValue={(i) => this.props.removeValue(i, this.props.uuid)}
                        examplesText="What are some values the user can type in?"
                    />
                ):(
                    <ExtractedValueOptions
                        candidateLists={this.props.candidateLists}
                        isSuperlative={false}
                        mostLeastAdjective={this.props.mostLeastAdjective}
                        selectedText={this.props.selectedText}
                        uuidInEditMode={this.props.uuidInEditMode}
                        groupSelectionMode={this.props.groupSelectionMode}
                        viewOnlyMode={this.props.viewOnlyMode}
                        uuid={this.props.uuid}
                        handleInitialValuesSelected={(listOfValues) => this.props.handleInitialValuesSelected(listOfValues, this.props.uuid)}
                        handleMostLeastAdjectiveChange={(e) => this.props.handleMostLeastAdjectiveChange(e, this.props.uuid)}
                    />
                )}
            </div>
        );
    }
}
class EnumerationParam extends React.Component {
    render(){
        return (
            <div>
                {this.props.initialValuesSelected ? (
                    <div>
                        <UserProvidedExamples
                            possibleValues={this.props.possibleValues}
                            isSuperlative={false}
                            handleAddBlankParamValue={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                            handleParamValueChange={(e, i) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                            handleParamValueBlurred={(e, i) => this.props.handleParamValueBlurred(e, i, this.props.uuid)}
                            uuidInEditMode={this.props.uuidInEditMode}
                            groupSelectionMode={this.props.groupSelectionMode}
                            viewOnlyMode={this.props.viewOnlyMode}
                            removeValue={(i) => this.props.removeValue(i, this.props.uuid)}
                            examplesText="What are some values the user can choose?"
                        />
                        {/* <div
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
                        </div> */}
                    </div>
                ):(
                    <ExtractedValueOptions
                        candidateLists={this.props.candidateLists}
                        isSuperlative={false}
                        mostLeastAdjective={this.props.mostLeastAdjective}
                        selectedText={this.props.selectedText}
                        uuidInEditMode={this.props.uuidInEditMode}
                        groupSelectionMode={this.props.groupSelectionMode}
                        viewOnlyMode={this.props.viewOnlyMode}
                        uuid={this.props.uuid}
                        handleInitialValuesSelected={(listOfValues) => this.props.handleInitialValuesSelected(listOfValues, this.props.uuid)}
                        handleMostLeastAdjectiveChange={(e) => this.props.handleMostLeastAdjectiveChange(e, this.props.uuid)}
                    />
                )}
            </div>
        );
    }
}
const superlativeCandidateLists = [
    [ { textCandidate: "most" }, { textCandidate: "least" } ],
    [ { textCandidate: "largest" }, { textCandidate: "smallest" } ],
    [ { textCandidate: "oldest" }, { textCandidate: "youngest" } ],
    [ { textCandidate: "highest" }, { textCandidate: "lowest" } ],
    //[ { textCandidate: "earliest" }, { textCandidate: "latest" } ]
];

function mostSuperlative(valuesList){
    let superlativeValue = undefined;
    let superlativeValueIndex = undefined;
    for(let i = 0; i < valuesList.length; i++){
        const currentValue = valuesList[i];
        if(currentValue !== null && !isNaN(currentValue)){
            if(superlativeValue === undefined || currentValue > superlativeValue){
                superlativeValue = currentValue;
                superlativeValueIndex = i;
            }
        }
    }

    return {
        superlativeValue,
        superlativeValueIndex
    }
}

function leastSuperlative(valuesList){
    let superlativeValue = undefined;
    let superlativeValueIndex = undefined;
    for(let i = 0; i < valuesList.length; i++){
        const currentValue = valuesList[i];
        if(currentValue !== null && !isNaN(currentValue)){
            if(superlativeValue === undefined || currentValue < superlativeValue){
                superlativeValue = currentValue;
                superlativeValueIndex = i;
            }
        }
    }

    return {
        superlativeValue,
        superlativeValueIndex
    }
}

const superlativeRules = {
    "most": mostSuperlative,
    "least": leastSuperlative,
    "largest": mostSuperlative,
    "smallest": leastSuperlative,
    "oldest": mostSuperlative,
    "youngest": leastSuperlative,
    "highest": mostSuperlative,
    "lowest": leastSuperlative,
    // "earliest": function(valuesList){

    // },
    // "latest": function(valuesList){
        
    // },
};
class SuperlativeParam extends React.Component {
    render(){
        return (
            <div>
                {this.props.initialValuesSelected ? (
                    <div>
                        <UserProvidedExamples
                            possibleValues={this.props.possibleValues}
                            isSuperlative={true}
                            handleAddBlankParamValue={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                            handleParamValueChange={(e, i) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                            handleParamValueBlurred={(e, i) => this.props.handleParamValueBlurred(e, i, this.props.uuid)}
                            uuidInEditMode={this.props.uuidInEditMode}
                            groupSelectionMode={this.props.groupSelectionMode}
                            viewOnlyMode={this.props.viewOnlyMode}
                            removeValue={(i) => this.props.removeValue(i, this.props.uuid)}
                            examplesText="What are some values the user can choose?"
                        />
                    </div>
                ):(
                    <ExtractedValueOptions
                        candidateLists={superlativeCandidateLists}
                        isSuperlative={true}
                        mostLeastAdjective={this.props.mostLeastAdjective}
                        selectedText={this.props.selectedText}
                        uuidInEditMode={this.props.uuidInEditMode}
                        groupSelectionMode={this.props.groupSelectionMode}
                        viewOnlyMode={this.props.viewOnlyMode}
                        uuid={this.props.uuid}
                        handleInitialValuesSelected={(listOfValues) => this.props.handleInitialValuesSelected(listOfValues, this.props.uuid)}
                        handleMostLeastAdjectiveChange={(e) => this.props.handleMostLeastAdjectiveChange(e, this.props.uuid)}
                    />
                )}
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
                                            selectedText={this.props.text}
                                            possibleValues={this.props.paramTypeData.possibleValues}
                                            mostLeastAdjective={this.props.paramTypeData.mostLeastAdjective}
                                            initialValuesSelected={this.props.paramTypeData.initialValuesSelected}
                                            candidateLists={this.props.paramTypeData.candidateLists}
                                            handleAddBlankParamValue={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                                            handleParamValueChange={(e, i) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                                            //handleParamValueBlurred={(e, i) => this.props.handleParamValueBlurred(e, i, this.props.uuid)}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            groupSelectionMode={this.props.groupSelectionMode}
                                            viewOnlyMode={this.props.viewOnlyMode}
                                            removeValue={(i) => this.props.removeValue(i, this.props.uuid)}
                                            handleInitialValuesSelected={(listOfValues) => this.props.handleInitialValuesSelected(listOfValues, this.props.uuid)}
                                        />;
            }else if(this.props.paramTypeData.type === "enumeration"){
                paramTypeSpecificForm = <EnumerationParam
                                            uuid={this.props.uuid}
                                            selectedText={this.props.text}
                                            possibleValues={this.props.paramTypeData.possibleValues}
                                            mostLeastAdjective={this.props.paramTypeData.mostLeastAdjective}
                                            initialValuesSelected={this.props.paramTypeData.initialValuesSelected}
                                            candidateLists={this.props.paramTypeData.candidateLists}
                                            paramMultipleValuesAllowed={this.props.paramMultipleValuesAllowed}
                                            handleAddBlankParamValue={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                                            handleParamValueChange={(e, i) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                                            //handleParamValueBlurred={(e, i) => this.props.handleParamValueBlurred(e, i, this.props.uuid)}
                                            handleParamNumValuesAllowedChange={(e) => this.props.handleParamNumValuesAllowedChange(e, this.props.uuid)}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            groupSelectionMode={this.props.groupSelectionMode}
                                            viewOnlyMode={this.props.viewOnlyMode}
                                            removeValue={(i) => this.props.removeValue(i, this.props.uuid)}
                                            handleInitialValuesSelected={(listOfValues) => this.props.handleInitialValuesSelected(listOfValues, this.props.uuid)}
                                            handleMostLeastAdjectiveChange={(e) => this.props.handleMostLeastAdjectiveChange(e, this.props.uuid)}
                                        />;
            }else if(this.props.paramTypeData.type === "superlative"){
                paramTypeSpecificForm = <SuperlativeParam
                                            uuid={this.props.uuid}
                                            selectedText={this.props.text}
                                            possibleValues={this.props.paramTypeData.possibleValues}
                                            mostLeastAdjective={this.props.paramTypeData.mostLeastAdjective}
                                            initialValuesSelected={this.props.paramTypeData.initialValuesSelected}
                                            //candidateLists={this.props.paramTypeData.candidateLists}
                                            paramMultipleValuesAllowed={this.props.paramMultipleValuesAllowed}
                                            handleAddBlankParamValue={() => this.props.handleAddBlankParamValue(this.props.uuid)}
                                            handleParamValueChange={(e, i) => this.props.handleParamValueChange(e, i, this.props.uuid)}
                                            //handleParamValueBlurred={(e, i) => this.props.handleParamValueBlurred(e, i, this.props.uuid)}
                                            handleParamNumValuesAllowedChange={(e) => this.props.handleParamNumValuesAllowedChange(e, this.props.uuid)}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            groupSelectionMode={this.props.groupSelectionMode}
                                            viewOnlyMode={this.props.viewOnlyMode}
                                            removeValue={(i) => this.props.removeValue(i, this.props.uuid)}
                                            handleInitialValuesSelected={(listOfValues) => this.props.handleInitialValuesSelected(listOfValues, this.props.uuid)}
                                            handleMostLeastAdjectiveChange={(e) => this.props.handleMostLeastAdjectiveChange(e, this.props.uuid)}
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
                        {/* <option value="freeform">Something the user types in</option> */}
                        <option value="enumeration">Something user selects from a list</option>
                        {/* <option value="date">A date</option>
                        <option value="number">A number</option> */}
                        <option value="superlative">A superlative</option>
                        {/* <option value="flag">Yes/no</option> */}
                    </select>

                    {paramTypeSpecificForm}

                    {/* Only show these questions after the user has selected a parameter type and has selected extracted values (if relevant)
                    (because we want the user to focus on that first) */}
                    {/* {this.props.paramTypeData.type !== "" && this.props.paramTypeData.type !== "flag" && this.props.paramTypeData.type !== "superlative" && (this.props.paramTypeData.initialValuesSelected || (this.props.paramTypeData.type !== "freeform" && this.props.paramTypeData.type !== "enumeration")) ? (
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
                    ) } */}
                </div>
            </span>
        );
    }
}

// When we're rendering the NL template (i.e., user has already parameterized the NL) for the user to fill in params' values for upcoming demo
class TemplateParamTextItem extends React.Component {
    render() {
        // Based on what this.props.paramTypeData.type is, render appropriate type
        let paramTemplate = ""; // empty unless there is a param type we should render
        if(this.props.paramTypeData.type.length > 0){
            if(this.props.paramTypeData.type === "freeform"){
                paramTemplate = <TemplateFreeformParam
                                            uuid={this.props.uuid}     
                                            demoIndexInRecordingMode = {this.props.demoIndexInRecordingMode}
                                            specificallyForParamUuid={this.props.specificallyForParamUuid}
                                            paramName={this.props.paramName}
                                            paramValue={this.props.paramValue}
                                            //selectedText={this.props.text}
                                            possibleValues={this.props.paramTypeData.possibleValues}
                                            initialValuesSelected={this.props.paramTypeData.initialValuesSelected}
                                            candidateLists={this.props.paramTypeData.candidateLists}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            groupSelectionMode={this.props.groupSelectionMode}
                                            viewOnlyMode={this.props.viewOnlyMode}
                                            demoIndex={this.props.demoIndex}
                                            handleTemplateParamValueChange={(e) => this.props.handleTemplateParamValueChange(e, this.props.uuid, this.props.demoIndex)}
                                            valuesEditable={this.props.valuesEditable}
                                        />;
            }else if(this.props.paramTypeData.type === "enumeration"){
                paramTemplate = <TemplateEnumerationParam
                                            uuid={this.props.uuid}
                                            demoIndexInRecordingMode = {this.props.demoIndexInRecordingMode}
                                            specificallyForParamUuid={this.props.specificallyForParamUuid}
                                            paramName={this.props.paramName}
                                            paramValue={this.props.paramValue}
                                            //selectedText={this.props.text}
                                            possibleValues={this.props.paramTypeData.possibleValues}
                                            initialValuesSelected={this.props.paramTypeData.initialValuesSelected}
                                            candidateLists={this.props.paramTypeData.candidateLists}
                                            paramMultipleValuesAllowed={this.props.paramMultipleValuesAllowed}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            groupSelectionMode={this.props.groupSelectionMode}
                                            viewOnlyMode={this.props.viewOnlyMode}
                                            demoIndex={this.props.demoIndex}
                                            handleTemplateParamValueChange={(e) => this.props.handleTemplateParamValueChange(e, this.props.uuid, this.props.demoIndex)}
                                            valuesEditable={this.props.valuesEditable}
                                        />;
            }else if(this.props.paramTypeData.type === "superlative"){
                paramTemplate = <TemplateSuperlativeParam
                                            uuid={this.props.uuid}
                                            demoIndexInRecordingMode = {this.props.demoIndexInRecordingMode}
                                            specificallyForParamUuid={this.props.specificallyForParamUuid}
                                            paramName={this.props.paramName}
                                            paramValue={this.props.paramValue}
                                            //selectedText={this.props.text}
                                            possibleValues={this.props.paramTypeData.possibleValues}
                                            initialValuesSelected={this.props.paramTypeData.initialValuesSelected}
                                            paramMultipleValuesAllowed={this.props.paramMultipleValuesAllowed}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            groupSelectionMode={this.props.groupSelectionMode}
                                            viewOnlyMode={this.props.viewOnlyMode}
                                            demoIndex={this.props.demoIndex}
                                            handleTemplateParamValueChange={(e) => this.props.handleTemplateParamValueChange(e, this.props.uuid, this.props.demoIndex)}
                                            valuesEditable={this.props.valuesEditable}
                                        />;
            }else if(this.props.paramTypeData.type === "flag"){
                paramTemplate = <TemplateFlagParam
                                            uuid={this.props.uuid}
                                            demoIndexInRecordingMode = {this.props.demoIndexInRecordingMode}
                                            specificallyForParamUuid={this.props.specificallyForParamUuid}         
                                            paramName={this.props.paramName}
                                            paramValue={this.props.paramValue}
                                            //selectedText={this.props.text}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            groupSelectionMode={this.props.groupSelectionMode}
                                            viewOnlyMode={this.props.viewOnlyMode}
                                            demoIndex={this.props.demoIndex}
                                            handleTemplateParamValueChange={(e) => this.props.handleTemplateParamValueChange(e, this.props.uuid, this.props.demoIndex)}
                                            valuesEditable={this.props.valuesEditable}
                                        />;
            }else if(this.props.paramTypeData.type === "date"){
                paramTemplate = <TemplateDateParam
                                            dateRestriction={this.props.paramTypeData.dateRestriction}
                                            otherDataValue={this.props.paramTypeData.otherDataValue}
                                            uuid={this.props.uuid}
                                            demoIndexInRecordingMode = {this.props.demoIndexInRecordingMode}
                                            specificallyForParamUuid={this.props.specificallyForParamUuid}
                                            paramName={this.props.paramName}
                                            paramValue={this.props.paramValue}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            groupSelectionMode={this.props.groupSelectionMode}
                                            viewOnlyMode={this.props.viewOnlyMode}
                                            demoIndex={this.props.demoIndex}
                                            handleTemplateParamValueChange={(e) => this.props.handleTemplateParamValueChange(e, this.props.uuid, this.props.demoIndex)}
                                            valuesEditable={this.props.valuesEditable}
                                        />;
            }else if(this.props.paramTypeData.type === "number"){
                paramTemplate = <TemplateNumberParam
                                            restrictedToIntegers={this.props.paramTypeData.restrictedToIntegers}
                                            restrictedToRange={this.props.paramTypeData.restrictedToRange}
                                            rangeStart={this.props.paramTypeData.rangeStart}
                                            rangeEnd={this.props.paramTypeData.rangeEnd}
                                            uuid={this.props.uuid}
                                            demoIndexInRecordingMode = {this.props.demoIndexInRecordingMode}
                                            specificallyForParamUuid={this.props.specificallyForParamUuid}
                                            paramName={this.props.paramName}
                                            paramValue={this.props.paramValue}
                                            uuidInEditMode={this.props.uuidInEditMode}
                                            groupSelectionMode={this.props.groupSelectionMode}
                                            viewOnlyMode={this.props.viewOnlyMode}
                                            demoIndex={this.props.demoIndex}
                                            handleTemplateParamValueChange={(e) => this.props.handleTemplateParamValueChange(e, this.props.uuid, this.props.demoIndex)}
                                            valuesEditable={this.props.valuesEditable}
                                        />;
            }
        }

        //return paramTemplate;
        return (
            <span
                className={styles.paramTemplate}
            >
                {paramTemplate}
                <span
                    className={styles.paramNameLabel}
                    style={
                        {
                            backgroundColor: this.props.color
                        }
                    }
                >
                    {this.props.paramName}
                </span>
            </span>
        );
    }
}

class NaturalLanguage extends React.Component {
    constructor(props){
        super(props);
        this.editorRef = React.createRef();

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
            incompleteFormParamIDs: [],
            demonstrations: [],
            demoIndexInCreateMode: null,
            demoIndexInRecordingMode: null,
            demoIndexInAboutToRecordMode: null,
            demoIndexInProgramInferenceMode: null,
            triggerWebsiteReload: Math.random(),
            generatedProgram: [],
            paramValuePairsForRunningProgram: {},
            websiteSelectedTextObject: null,
            programOutput: null,
            programOutputProgramIndex: null,
            showCodeEditor: false,
            currentProgramCode: null,
            freeformNLQuery: "",
            mostRelevantQueries: null,
            programRunInProgress: false
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
                                    possibleValues: [ { textCandidate: selectedText, xPath: null }],
                                    initialValuesSelected: undefined, // i.e., whether we're past the value extraction state
                                    candidateLists: undefined,
                                    mostLeastAdjective: null,
                                    color: null
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

                            // Since we've added a new parameter, let's update our parameter colors
                                // (to generate one for this new param, and to generate new ones for the rest of the params to ensure they're evenly spaced)
                            this.updateParamColors(idToItemClone);

                            // Clear text selection
                            selectionObj.removeAllRanges();

                            /*// Extract values from page, using the initial value highlighted in the NL
                                // Trim initial example value (in case user accidentally included whitespace at beginning or end when doing text selection)
                            const extractedExampleValues = getValues([selectedText.trim()], [], '//*[@clone]');
                            
                            // Update these values in the data structure, so that it renders on the page
                            newParamItem.paramTypeData.possibleValues = extractedExampleValues;
                            // Include initial value from NL as added by user
                            newParamItem.paramTypeData.valuesExplicitlyAddedByUser = [selectedText.trim()];*/

                            // Update whole textItems to make sure we re-render
                            this.setState({
                                idToItem: idToItemClone,
                                hoveredID: newParamItem.uuid
                            });

                            this.scrollParamIntoViewAndHighlightNameText(newParamItem.uuid);

                            // Do this in the background, as to not slow down initial param rendering
                            setTimeout(function(uuid, context){
                                let candidateLists = [];
                                if(selectedText.trim() !== "" && selectedText.trim().length > 1){
                                    // Don't want to run getCandidateLists on an empty string; not meaningful and it's going to crash the app; similarly don't want to run on a single character
                                    candidateLists = getCandidateLists([selectedText.trim()], false, embeddedWebsiteXPathPrefix);
                                }
                                const idToItemClone = _.cloneDeep(context.state.idToItem);
                                idToItemClone[uuid].paramTypeData.candidateLists = candidateLists;
                                context.setState({
                                    idToItem: idToItemClone
                                });
                            }, 0, newParamItem.uuid, this)
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

        /*// Remove previous value of this textfield from valuesExplicitlyAddedByUser
        //let prevValueIndex = idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser.indexOf(idToItemClone[uuid].paramTypeData.possibleValues[i]);
        let prevValueIndex = indexOfCaseInsensitive(idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser, idToItemClone[uuid].paramTypeData.possibleValues[i]);
        if(prevValueIndex > -1){
            idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser.splice(prevValueIndex, 1);
        }*/

        /*// Add new value of this textfield to valuesExplicitlyAddedByUser
        idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser.push(e.target.value);
        // Also make sure new value of this textfield is not in valuesExplicitlyDeletedByUser (if it is, remove from valuesExplicitlyDeletedByUser)
        //let curValueIndex = idToItemClone[uuid].paramTypeData.valuesExplicitlyDeletedByUser.indexOf(e.target.value);
        let curValueIndex = indexOfCaseInsensitive(idToItemClone[uuid].paramTypeData.valuesExplicitlyDeletedByUser, e.target.value);
        if(curValueIndex > -1){
            idToItemClone[uuid].paramTypeData.valuesExplicitlyDeletedByUser.splice(curValueIndex, 1);
        }*/

        // For now, keeping same xpath; should we get rid of it though?
        idToItemClone[uuid].paramTypeData.possibleValues[i].textCandidate = e.target.value;

        /*// We don't want to run extraction algorithm after every keypress
            // That's going to be confusing and annoying (a copy of each intermediate string would appear as a new value)
        // So instead, we'll wait for x seconds of inactivity; at that point, we'll assume the user has finished typing their value and we'll run the extraction algorithm
        clearTimeout(this.runExtractionTimeout);
        this.runExtractionTimeout = setTimeout(function(context){            
            const extractedExampleValues = getValues(idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser, idToItemClone[uuid].paramTypeData.valuesExplicitlyDeletedByUser, '//*[@clone]');
            // Update these values in the data structure, so that it renders on the page
            idToItemClone[uuid].paramTypeData.possibleValues = extractedExampleValues;
            context.setState({
                idToItem: idToItemClone
            });
        }, 1500, this);*/

        this.setState({
            idToItem: idToItemClone
        });
        //this.exitEditMode();
    }

    /*handleParamValueBlurred(e, i, uuid) {
        console.log("handleParamValueBlurred");
        console.log("e", e);

        // Focus has left this example value textfield
        // In case the user just edited the value of this textfield, let's run the value extraction algorithm
        
        const idToItemClone = _.cloneDeep(this.state.idToItem);

        //const extractedExampleValues = getValues(idToItemClone[uuid].paramTypeData.possibleValues);
        const extractedExampleValues = getValues(idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser, idToItemClone[uuid].paramTypeData.valuesExplicitlyDeletedByUser, '//*[@clone]');
        // Update these values in the data structure, so that it renders on the page
        idToItemClone[uuid].paramTypeData.possibleValues = extractedExampleValues;

        this.setState({
            idToItem: idToItemClone
        });
        //this.exitEditMode();
    }*/

    handleAddBlankParamValue(uuid){
        console.log("handleAddBlankParamValue");
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        idToItemClone[uuid].paramTypeData.possibleValues.push({ textCandidate: "", xPath: null });
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

        const isParam = this.state.idToItem[uuid].type === "param";

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

        if(isParam){
            // Since we've removed a new parameter, let's update our parameter colors
                // (to generate new ones for the rest of the params to ensure they're evenly spaced)
            this.updateParamColors(idToItemClone);
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

        /*const valueToRemove = idToItemClone[uuid].paramTypeData.possibleValues[i];
        // Make sure valueToRemove isn't in valuesExplicitlyAddedByUser
        //const indexOfValueInExplicitlyAddedValuesList = idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser.indexOf(valueToRemove);
        const indexOfValueInExplicitlyAddedValuesList = indexOfCaseInsensitive(idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser, valueToRemove);
        if(indexOfValueInExplicitlyAddedValuesList > -1){
            idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser.splice(indexOfValueInExplicitlyAddedValuesList, 1);
        }

        // Add valueToRemove to valuesExplicitlyDeletedByUser
        idToItemClone[uuid].paramTypeData.valuesExplicitlyDeletedByUser.push(valueToRemove);*/

        idToItemClone[uuid].paramTypeData.possibleValues.splice(i, 1);

        /*const extractedExampleValues = getValues(idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser, idToItemClone[uuid].paramTypeData.valuesExplicitlyDeletedByUser, '//*[@clone]');
        // Update these values in the data structure, so that it renders on the page
        idToItemClone[uuid].paramTypeData.possibleValues = extractedExampleValues;*/

        this.setState({
            idToItem: idToItemClone
        });
        //this.exitEditMode();
    }

    updateParamColors(idToItemObj){
        // Identify number of parameters
        const parameterUuids = [];
        for(let item of Object.values(idToItemObj)){
            if(item.paramTypeData){
                parameterUuids.push(item.uuid);
            }
        }
        
        // Then choose a distinct color per param that are evenly spread out
        const numParams = parameterUuids.length;
        for(let i = 0; i < numParams; i++){
            const color = chroma(360 * i/numParams, 1, 0.95, 'hsl').hex();
            //console.log(`color ${i}`, color);
            idToItemObj[parameterUuids[i]].paramTypeData.color = color;
        }

        return idToItemObj;
    }

    handleParamTypeChange(e, uuid){
        const target = e.target;
        console.log("handleParamTypeChange target", target);
        const value = target.value;
        
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        
        // Update paramOptional checkbox value
        let paramTypeData = {
            type: value,
            initialValuesSelected: idToItemClone[uuid].paramTypeData.initialValuesSelected,
            candidateLists: idToItemClone[uuid].paramTypeData.candidateLists,
            possibleValues: idToItemClone[uuid].paramTypeData.possibleValues,
            mostLeastAdjective: idToItemClone[uuid].paramTypeData.mostLeastAdjective,
            color: idToItemClone[uuid].paramTypeData.color
            /* ,
            valuesExplicitlyAddedByUser: idToItemClone[uuid].paramTypeData.valuesExplicitlyAddedByUser || [],
            valuesExplicitlyDeletedByUser: idToItemClone[uuid].paramTypeData.valuesExplicitlyDeletedByUser || [] */
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
            //paramTypeData.initialValuesSelected = []; // because we want it to be set (and not undefined)
        }else if(value === "date"){
            paramTypeData.dateRestriction = "";
            paramTypeData.otherDataValue = "";
            //paramTypeData.initialValuesSelected = []; // because we want it to be set (and not undefined)
        }else if(value === "number"){
            paramTypeData.restrictedToIntegers = false;
            paramTypeData.restrictedToRange = false;
            paramTypeData.rangeStart = "";
            paramTypeData.rangeEnd = "";
            //paramTypeData.initialValuesSelected = []; // because we want it to be set (and not undefined)
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

    handleInitialValuesSelected(listOfValues, uuid){
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        
        idToItemClone[uuid].paramTypeData.initialValuesSelected = listOfValues;

        // If length is 0, then just use what we already had for possibleValues (e.g., the original selected text)
        if(listOfValues.length > 0){
            idToItemClone[uuid].paramTypeData.possibleValues = listOfValues;
        }

        this.setState({
            idToItem: idToItemClone
        });
    }

    handleMostLeastAdjectiveChange(e, uuid){
        const value = e.target.value;
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        
        idToItemClone[uuid].paramTypeData.mostLeastAdjective = value;

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
                initialValuesSelected: [], // i.e., whether we're past the value extraction state
                candidateLists: [],
                mostLeastAdjective: null,
                color: null
            },
            paramAnnotatorCreated: true
        };
        
        const idToItemClone = _.cloneDeep(this.state.idToItem);
        idToItemClone[newParamItem.uuid] = newParamItem;
        
        const itemIDsList = idToItemClone[uuid].itemIDs;
        
        // Add to end of list
        itemIDsList.push(newParamItem.uuid);
        
        // Since we've added a new parameter, let's update our parameter colors
            // (to generate one for this new param, and to generate new ones for the rest of the params to ensure they're evenly spaced)
        this.updateParamColors(idToItemClone);

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

    async handleNext(){
        const dataObj = {
            name: this.props.name,
            idToItem: this.state.idToItem,
            userFeedback: this.state.userFeedback,
            text: this.state.text,
            demonstrations: this.state.demonstrations,
            generatedProgram: this.state.generatedProgram,
            paramValuePairsForRunningProgram: this.state.paramValuePairsForRunningProgram,
            currentProgramCode: this.state.currentProgramCode
        };
        this.props.writeAnnotationToDB(dataObj, this.props.queryIndexToAnnotate);
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
            
            //const proceed = window.confirm("Are you sure you want to submit? You won't be able to make any further changes.");
            const proceed = true;
            if(proceed){
                // Save data to db
                const dataObj = {
                    name: this.props.name,
                    idToItem: this.state.idToItem,
                    userFeedback: this.state.userFeedback,
                    text: this.state.text,
                    demonstrations: this.state.demonstrations,
                    generatedProgram: this.state.generatedProgram,
                    paramValuePairsForRunningProgram: this.state.paramValuePairsForRunningProgram,
                    currentProgramCode: this.state.currentProgramCode
                };

                // Remove originalEventObj from demonstrations (otherwise cross-origin issue in trying to save target element from page)
                for(const demo of dataObj.demonstrations){
                    for(const eventItem of demo.eventSequence){
                        if(eventItem.originalEventObj){
                            delete eventItem.originalEventObj;
                        }
                    }
                }

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

    handleEmbeddedWebsiteEvent(e){
        console.log("handleEmbeddedWebsiteEvent", e);
        console.log("window.getSelection()", window.getSelection());

        // Only process/capture events if user is currently in demo mode (so when demoIndexInCreateMode and demoIndexInRecordingMode are demo indices, not null)
        if(this.state.demoIndexInCreateMode !== null && this.state.demoIndexInRecordingMode !== null){
            // For now only process "click" events
            if(e.type === "click"){
                console.log("handleEmbeddedWebsiteEvent e.target", e.target);

                // Check if there is a text selection on the page
                if(window.getSelection() && window.getSelection().type === "Range"){
                    // There is text selected on the page
                    // We won't actually capture this as a demo event for now, but we'll give the user the option to extract that text (to add an 'print' event to the event sequence)
                    
                    // Let's calculate where "Extract" button should be placed based on this target element's position relative to [clone] sibling
                    const targetElementBoundingRect = e.target.getBoundingClientRect();
                    const websiteCloneBoundingRect = document.querySelector("[clone]").getBoundingClientRect();
                    const extractButtonX = targetElementBoundingRect.right - websiteCloneBoundingRect.left;
                    const extractButtonY = targetElementBoundingRect.top - websiteCloneBoundingRect.top;
                    this.setState({
                        websiteSelectedTextObject: {
                            event: e,
                            x: extractButtonX,
                            y: extractButtonY
                        }
                    });
                }else{
                    // Only a single Caret selection or no selection at all, so just add this event to demo event sequence
                    const targetXPath = getXPathForElement(e.target, document);
                    //console.log("targetXPath", targetXPath);
                    
                    /*// If page changes, drastically, not sure if this will actually be the original element. Yeah it isn't...
                    const clickedElement = document.evaluate(targetXPath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)[0];
                    console.log("clickedElement", clickedElement);*/

                    //debugger;
                    
                    // Handle events here. Process them. Store in React state as part of the demonstration, etc
                    const demonstrationsClone = _.cloneDeep(this.state.demonstrations);
                    // for now let's just include the whole event; later on if we want to store event sequence in db, we'll need to make sure it's serializable
                    demonstrationsClone[this.state.demoIndexInRecordingMode].eventSequence.push({
                        originalEventObj: e,
                        targetXPath,
                        eventType: e.type
                    });
                    this.setState({
                        demonstrations: demonstrationsClone,
                        websiteSelectedTextObject: null
                    });
                }
            }
        }
    }

    handleExtractText(){
        // Add event associated with this.state.websiteSelectedTextObject to current demo event sequence
        const targetXPath = getXPathForElement(this.state.websiteSelectedTextObject.event.target, document);
        const demonstrationsClone = _.cloneDeep(this.state.demonstrations);
        demonstrationsClone[this.state.demoIndexInRecordingMode].eventSequence.push({
            originalEventObj: this.state.websiteSelectedTextObject.event,
            targetXPath,
            eventType: "print"
        });
        this.setState({
            demonstrations: demonstrationsClone,
            websiteSelectedTextObject: null
        });
    }

    handleCreateDemo(demoIndexToUpdate){
        // Create new demo object
        // If demoIndexToUpdate is given, then clear the data for that demo
        // If demoIndexToUpdate is null, just add a new demo obj
        const demonstrationsClone = _.cloneDeep(this.state.demonstrations);
        const generatedProgramClone = _.cloneDeep(this.state.generatedProgram);
        console.log("handleCreateDemo demoIndexToUpdate", demoIndexToUpdate)
        if(demoIndexToUpdate === null){
            demonstrationsClone.push({
                eventSequence: [],
                paramValuePairs: {},
                specificallyForParamUuid: "",
                specificallyForValue: "",
            });
            generatedProgramClone.push({ program: null });
        }else{
            demonstrationsClone[demoIndexToUpdate] = {
                eventSequence: [],
                paramValuePairs: {},
                specificallyForParamUuid: "",
                specificallyForValue: "",
            };
            generatedProgramClone[demoIndexToUpdate] = { program: null };
        }

        console.log("handleCreateDemo generatedProgramClone", generatedProgramClone);

        this.setState({
            demonstrations: demonstrationsClone,
            demoIndexInCreateMode: demoIndexToUpdate === null ? demonstrationsClone.length-1 : demoIndexToUpdate,
            generatedProgram: generatedProgramClone    
        });
    }

    cancelNewDemo(demoIndex){
        // User doesn't want to create this demo, so remove the last obj that was recently added to demonstrations
        const demonstrationsClone = _.cloneDeep(this.state.demonstrations);
        const generatedProgramClone = _.cloneDeep(this.state.generatedProgram);

        if(this.state.demonstrations.length > 1 && demoIndex === 0){
            // Still need to have a placeholder for the main demo (because there are other demos after it) so just clear the obj
            demonstrationsClone[demoIndex] = {
                eventSequence: [],
                specificallyForParamUuid: "",
                //specificallyForParamName: "",
                specificallyForValue: "",
                paramValuePairs: {}
            };
            generatedProgramClone[demoIndex] = null;
        }else{
            // This is a refinement demo, so we'll just get rid of it
            demonstrationsClone.splice(demoIndex, 1);
            generatedProgramClone.splice(demoIndex, 1);
        }

        this.setState({
            demonstrations: demonstrationsClone,
            generatedProgram: generatedProgramClone,
            demoIndexInCreateMode: null
        });
    }

    handleStartRecordingDemo(demoIndex){
        console.log("handleStartRecordingDemo");
        
        // Reload embedded website page, to ensure clean slate when user starts performing demo
        this.forceReRenderEmbeddedWebsite();

        // Set demoIndexInAboutToRecordMode to this demoIndex (since the below xpath computations takes some time,
            // we'll update 'start recording' button to show 'wait a moment...' and in gray, so user knows to wait and can see that their click did do something;
            // otherwise they'll be confused that it lags in turning to 'stop recording')
        this.setState({
            demoIndexInAboutToRecordMode: demoIndex
        });

        setTimeout(() => {
            const idToItemClone = _.cloneDeep(this.state.idToItem);
            
            // For now at least, only try to make xpaths more robust before recording/re-recording the main demo (demoIndex === 0)
                // We don't want to do this for refinement demos (demoIndex > 0) because if that changes the xpaths, that could break the existing program for the main demo
                // (e.g., maybe main demo relied certain param value xpath suffixes, which now don't exist because the xpaths are different)
            // However, this could be a problem if the user edits param values in between making the main demo and refinement demos.
                // When a program is generated for a refinement demo, the xpaths will be null.
            // In general, it's a bad idea that we allow the user to edit params/values after some demos have been created; will lead to inconsistencies and break things
                // we should just disallow users from editing params/values once they start demonstrations.
            // Or ideally we should regenerate the program automatically each time the params/values change. Currently we can't do this because we aren't storing demo DOM state,
                // and not able to query it with document.evaluate
            if(demoIndex === 0){
                // Before recording demo, for each parameter, check values and see if we can make xpaths more robust (so that we have an xpath template that matches all/as many values as possible)
                for(let item of Object.values(idToItemClone)){
                    if(item.paramTypeData && item.paramTypeData.type !== "superlative"){
                        // This item is a param. Run makeXPathsMoreRobust on its values and update 
                        
                        // Only make xpaths more robust if an xpath exists for at least one param value; if it doesn't, then we'll just skip this (this could happen if none of the param value text actually appears on the page)
                        //let newValueXPathObjList = item.paramTypeData.possibleValues;
                        let newValueXPathObjList = [];
                        const listOfXPathObjsToRetry = []; // These are values that were single and had multiple matches, so we're not really sure what the right option is. We'll see if we can find a better option later after running makeXPathsMoreRobust and making our existing xpaths more robust
                        
                        // If an item in possibleValues is an empty string, don't include it
                        for(let possibleValueObj of item.paramTypeData.possibleValues){
                            if(possibleValueObj.textCandidate.trim().length > 0){
                                newValueXPathObjList.push(possibleValueObj);
                            }
                        }
                        console.log("newValueXPathObjList", newValueXPathObjList);

                        let paramValuesWithNullXPathToStillTry = [];
                        for(let valueObj of newValueXPathObjList){
                            // Just add them all
                            //if(!valueObj.xPath){ // xPath not defined, so add to paramValuesWithNullXPathToStillTry
                                paramValuesWithNullXPathToStillTry.push(valueObj.textCandidate);
                            //}
                        }
                        //console.log("paramValuesWithNullXPathToStillTry", paramValuesWithNullXPathToStillTry);
                        // Now, use getCandidateLists to fill in xpaths
                        while(paramValuesWithNullXPathToStillTry.length > 0){
                            // Seed with first value in paramValuesWithNullXPathToStillTry
                            const candidateLists = getCandidateLists([paramValuesWithNullXPathToStillTry[0].trim()], false, embeddedWebsiteXPathPrefix);
                            //console.log("candidateLists to fill in xpaths", candidateLists);

                            // Look through candidateLists and choose the one that has the most values from paramValuesWithNullXPathToStillTry
                            let bestMatchList = [];
                            for(let candidateList of candidateLists){
                                const matchList = [];
                                for(let valueObj of candidateList){
                                    for(let paramValue of paramValuesWithNullXPathToStillTry){
                                        if(valueObj.textCandidate.trim().toLowerCase() === paramValue.trim().toLowerCase()){
                                            // Update valueObj to use same text user had
                                            valueObj.textCandidate = paramValue;
                                            matchList.push(valueObj);
                                        }
                                    }
                                }
                                if(matchList.length > bestMatchList.length){
                                    bestMatchList = matchList;
                                }
                                if(bestMatchList.length === paramValuesWithNullXPathToStillTry.length){
                                    // We've found all the values
                                    break;
                                }
                            }
                            console.log("bestMatchList", bestMatchList);

                            // Update newValueXPathObjList objects based on bestMatchList
                            for(let match of bestMatchList){
                                // Find obj in newValueXPathObjList corresponding to match and replace it
                                for(let i = 0; i < newValueXPathObjList.length; i++){
                                    const existingValueObj = newValueXPathObjList[i];
                                    if(existingValueObj.textCandidate.trim().toLowerCase() === match.textCandidate.trim().toLowerCase()){
                                        match.textCandidate = existingValueObj.textCandidate;
                                        // Remove templateXPath if this list only has 1 match (because a template is meaningless here and we don't want to try using it later)
                                        if(bestMatchList.length === 1 && candidateLists.length > 1){
                                            match.templateXPath = null;
                                            listOfXPathObjsToRetry.push(match.textCandidate);
                                        }

                                        newValueXPathObjList[i] = match;
                                    }
                                }
                            }

                            if(bestMatchList.length === paramValuesWithNullXPathToStillTry.length){
                                // We've found all the values, so break out of while loop
                                break;
                            }

                            if(bestMatchList.length === 0){
                                // The value we seeded with ([paramValuesWithNullXPathToStillTry[0]) actually can't be found on the page anywhere
                                    // Let's just remove it from paramValuesWithNullXPathToStillTry so we can try with remaining values (since we're never going to find a match for this value)

                                // Update paramValuesWithNullXPathToStillTry to remove the first item
                                paramValuesWithNullXPathToStillTry.splice(0, 1);
                            }

                            // There are still param values without an xpath, so we need to return to top of loop and try with remaining values
                            // Update paramValuesWithNullXPathToStillTry to remove values that are in bestMatchList
                            for(let match of bestMatchList){
                                for(let i = 0; i < paramValuesWithNullXPathToStillTry.length; i++){
                                    let paramValue = paramValuesWithNullXPathToStillTry[i];
                                    if(match.textCandidate.trim().toLowerCase() === paramValue.trim().toLowerCase()){
                                        // A match has been found for paramValue, so remove paramValue from paramValuesWithNullXPathToStillTry
                                        paramValuesWithNullXPathToStillTry.splice(i, 1);
                                        break; // break out of inner loop because found value correspond to match value, and move on to next match value to look for
                                    }
                                }
                            }
                        }

                        for(let valueObj of newValueXPathObjList){
                            // Check if this value has an xpath
                            if(!valueObj.xPath){
                                
                                // If stringMatchesAnywhere has multiple text node matches, look at each of the matches and see which one is the "best" match, e.g., could be adjusted to have xPathSuffix at the end (that would be the most semantically meaningful one)
                                let newXPath;
                                const stringMatches = fontoxpath.evaluateXPathToNodes(`${embeddedWebsiteXPathPrefix} //text()[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), \"${valueObj.textCandidate.toLowerCase()}\")] /..`, document.documentElement);
                                console.log("stringMatches", stringMatches);
                                
                                if(stringMatches.length > 1){
                                    listOfXPathObjsToRetry.push(valueObj.textCandidate);
                                }
                                for(let snapshotIndex = 0; snapshotIndex < stringMatches.length; snapshotIndex++){   
                                    const matchingNode = stringMatches[snapshotIndex];
                                    console.log("matchingNode", matchingNode);
                                    if(matchingNode){
                                        const potentialXPath = getXPathForElement(matchingNode, document);
                                        // Make sure this xPath isn't/within a <script> or <style> tag; that wouldn't be a meaningful string match
                                        if(!potentialXPath.includes("script") && !potentialXPath.includes("style")){         
                                            newXPath = potentialXPath;
                                            break;
                                        }
                                    }
                                }
                                //}

                                if(newXPath){

                                    // Update in newValueXPathObjList
                                    valueObj.xPath = newXPath;
                                }
                                console.log("newXPath", newXPath);
                            }
                        }

                        let commonPrefixLengthAmongstXPaths = undefined; // common prefix across all xpaths; ideally all param nodes should be siblings; if they aren't, then our algorithm here won't work well, we won't find the "cols" really
                        //let rowPrefix;
                        for(let i = 0; i < item.paramTypeData.possibleValues.length-1; i++){
                            for(let j = i+1; j < item.paramTypeData.possibleValues.length; j++){
                                if(item.paramTypeData.possibleValues[i].xPath && item.paramTypeData.possibleValues[j].xPath){
                                    const commonPrefixLength = getCommonPrefixLength(item.paramTypeData.possibleValues[i].xPath, item.paramTypeData.possibleValues[j].xPath);
                                    //console.log(`commonPrefixLength ${i} ${j}`, commonPrefixLength);
                                    if(commonPrefixLengthAmongstXPaths === undefined || commonPrefixLength < commonPrefixLengthAmongstXPaths){
                                        commonPrefixLengthAmongstXPaths = commonPrefixLength;
                                        //rowPrefix = item.paramTypeData.possibleValues[i].xPath.substring(0, commonPrefixLengthAmongstXPaths);
                                    }
                                }
                            }
                        }
                        console.log("handleStartRecordingDemo commonPrefixLengthAmongstXPaths", commonPrefixLengthAmongstXPaths);
                        //console.log("handleStartRecordingDemo rowPrefix", rowPrefix);

                        let xPathSuffix;
                        
                        // Try to make existing xpaths more robust (so that hopefully param values that currently have a null xpath can get filled in)
                        console.log("newValueXPathObjList before makeXPathsMoreRobust", newValueXPathObjList);
                        const result = makeXPathsMoreRobust(newValueXPathObjList, item.paramName);
                        newValueXPathObjList = result.newValueXPathObjList;
                        xPathSuffix = result.xPathSuffix;
                        console.log("newValueXPathObjList after makeXPathsMoreRobust", newValueXPathObjList);
                        //}

                        console.log("xPathSuffix", xPathSuffix);
                        // Do we need this last part now or no?

                        if(xPathSuffix){
                            // Try these again, since we now know a common xPathSuffix and so we can try that xPathSuffix to try to see which xpath (of the multiple matches) is closest
                            //for(let valueObj of listOfXPathObjsToRetry){
                            for(let valueObj of newValueXPathObjList){
                                // Only need to try this for listOfXPathObjsToRetry
                                if(listOfXPathObjsToRetry.indexOf(valueObj.textCandidate) > -1){
                                    console.log("valueObj.textCandidate", valueObj.textCandidate);
                                    let newXPath;
                                    const stringMatches = fontoxpath.evaluateXPathToNodes(`${embeddedWebsiteXPathPrefix} //text()[contains(translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), \"${valueObj.textCandidate.toLowerCase()}\")] /..`, document.documentElement);
                                    console.log("stringMatches", stringMatches);
                                    let newSuffix = xPathSuffix;
                                    // if xPathSuffix includes [INSERT-ROW-INDEX-HERE], trim and only use suffix lower than that because we don't know what the index should be here
                                    if(xPathSuffix.lastIndexOf('[INSERT-ROW-INDEX-HERE]') > -1){
                                        newSuffix = xPathSuffix.substring(xPathSuffix.lastIndexOf('[INSERT-ROW-INDEX-HERE]') + '[INSERT-ROW-INDEX-HERE]'.length);
                                    }
                                    console.log("newSuffix", newSuffix);
                                    // For each of these matches, see if we can adjust the xpath to make it have suffix xPathSuffix. Then, choose the/an xpath that has this suffix
                                    // (having suffix xPathSuffix is a good indicator that this param value node is semantically related to the other param value nodes)
                                    for(let snapshotIndex = 0; snapshotIndex < stringMatches.length; snapshotIndex++){
                                        const node = stringMatches[snapshotIndex];
                                        //console.log("node", node);
                                        const xPath = getXPathForElement(node, document);
                                        console.log("xPath", xPath);
                                        
                                        // Make sure this xPath isn't/within a <script> or <style> tag; that wouldn't be a meaningful string match
                                        if(!xPath.includes("script") && !xPath.includes("style")){                        
                                            if(xPath.lastIndexOf(newSuffix) === -1 || (xPath.lastIndexOf(newSuffix) + newSuffix.length) !== xPath.length){
                                                // newSuffix is not the suffix. Let's try to see if we can adjust this xpath to use this newSuffix suffix (let's take a node off at a time and see if replace with this helps)
                                                let xPathPrefix = xPath;
                                                while(xPathPrefix.length > 0){
                                                    const xPathToTry = xPathPrefix + newSuffix;
                                                    console.log("xPathToTry", xPathToTry);
                                                    // See if xPathToTry is a valid xpath, and if it's index-based version equals xPath
                                                    //try{
                                                        const node = fontoxpath.evaluateXPathToNodes(xPathToTry, document.documentElement)[0];
                                                        console.log("new node", node);
                                                        if(node){
                                                            const indexBasedXPath = getXPathForElement(node, document);
                                                            console.log("indexBasedXPath", indexBasedXPath);
                                                            console.log("xPath", xPath);
                                                            if(indexBasedXPath === xPath){
                                                                // This means that xPathToTry was valid and does match the original xPath
                                                                // Let's set newXPath and break out of loop
                                                                newXPath = xPathToTry;
                                                                break;
                                                            }
                                                        }
                                                    //}catch{
                                                    //}
                                                    // Update xPathPrefix
                                                    xPathPrefix = xPathPrefix.substring(0, xPathPrefix.lastIndexOf("/"));
                                                }
                                            }else{
                                                // newSuffix is the suffix, so just use this
                                                newXPath = xPath;
                                            }
                                            if(newXPath){
                                                break;
                                            }
                                        }
                                    }
                                

                                    if(newXPath){
                                        // Update in newValueXPathObjList
                                        valueObj.xPath = newXPath;
                                    }
                                }
                            }
                        }


                        // Now, if some of the xpaths have already been made more robust through makeXPathsMoreRobust, then some of them have classes/attributes as the suffix of their xpath
                            // Because new xpaths have been added since then, let's now check these xpaths to see if they can be adjusted to use this more generalized xPathSuffix
                            // This is important because at program execution time we sometimes remove a suffix from param value xpaths (for matchingParam), so we want to try to adjust all our param value xpaths to have that suffix (if it's a valid xpath)
                        if(xPathSuffix){
                            let newSuffix = xPathSuffix;
                            // if xPathSuffix includes [INSERT-ROW-INDEX-HERE], trim and only use suffix lower than that because we don't know what the index should be here
                            if(xPathSuffix.lastIndexOf('[INSERT-ROW-INDEX-HERE]') > -1){
                                newSuffix = xPathSuffix.substring(xPathSuffix.lastIndexOf('[INSERT-ROW-INDEX-HERE]') + '[INSERT-ROW-INDEX-HERE]'.length);
                            }
                            //console.log("xPathSuffix", xPathSuffix);
                            //console.log("newSuffix", newSuffix)
                            for(let valueObj of newValueXPathObjList){
                                // Check if this param value xpath has newSuffix at the end
                                const xPath = valueObj.xPath;
                                if(xPath && (xPath.lastIndexOf(newSuffix) === -1 || (xPath.lastIndexOf(newSuffix) + newSuffix.length) !== xPath.length)){
                                    console.log("xPath to try to make more robust", xPath);
                                    console.log("valueObj.textCandidate", valueObj.textCandidate);
                                    // newSuffix is not the suffix. Let's try to see if we can adjust this xpath to use this newSuffix suffix (let's take a node off at a time and see if replace with this helps)
                                    let xPathPrefix = xPath;
                                    while(xPathPrefix.length > 0){
                                        console.log("xPathPrefix", xPathPrefix);
                                        console.log("newSuffix",newSuffix);
                                        const xPathToTry = xPathPrefix + newSuffix;
                                        console.log("xPathToTry", xPathToTry);
                                        // See if xPathToTry is a valid xpath, and if it's index-based version equals xPath
                                        try{
                                            const node = fontoxpath.evaluateXPathToNodes(xPathToTry, document.documentElement)[0];
                                            console.log("xPathToTry node", node);
                                            if(node){
                                                const indexBasedXPath = getXPathForElement(node, document);
                                                console.log("indexBasedXPath", indexBasedXPath);
                                                console.log("xPath", xPath);
                                                if(indexBasedXPath === xPath){
                                                    // This means that xPathToTry was valid and does match the original xPath
                                                    // Let's update our valueObj and then break out of loop
                                                    valueObj.xPath = xPathToTry;
                                                    break;
                                                }
                                            }
                                        }catch{
                                        }
                                        // Update xPathPrefix
                                        xPathPrefix = xPathPrefix.substring(0, xPathPrefix.lastIndexOf("/"));
                                    }
                                }
                            }
                        }

                        console.log("updated newValueXPathObjList", newValueXPathObjList);

                        idToItemClone[item.uuid].paramTypeData.possibleValues = newValueXPathObjList;
                    }
                }
            }

            this.setState({
                demoIndexInAboutToRecordMode: null,
                demoIndexInRecordingMode: demoIndex,
                idToItem: idToItemClone
            });
        }, 0);
    }

    findSuperlatives(nlString){
        // use superlativeRules
        const foundSuperlatives = [];
        for(let superlativeString of Object.keys(superlativeRules)){
            if(nlString.includes(superlativeString)){
                foundSuperlatives.push(superlativeString);
            }
        }
        return foundSuperlatives;
    }

    getConstantSuperlatives(){
        let constantSuperlatives = [];
        for(let item of Object.values(this.state.idToItem)){
            if(item.type === "text"){
                const text = item.text;
                const superlatives = this.findSuperlatives(text);
                if(superlatives.length > 0){
                    constantSuperlatives = constantSuperlatives.concat(superlatives);
                }
            }
        }
        return constantSuperlatives;
    }

    getDemoParamsNotYetFilledIn(demoIndex){
        let thisDemoParamValuePairs;
        if(demoIndex === "runningProgram"){
            thisDemoParamValuePairs = this.state.paramValuePairsForRunningProgram;
        }else{
            thisDemoParamValuePairs = this.state.demonstrations[demoIndex].paramValuePairs;
        }

        let thisDemoFilledInParamUuids = Object.keys(thisDemoParamValuePairs);

        // Filter out the ones whose value is <${paramName}>, because that's just the default value
        thisDemoFilledInParamUuids = thisDemoFilledInParamUuids.filter(uuid => thisDemoParamValuePairs[uuid] && thisDemoParamValuePairs[uuid].paramValue !== `<${thisDemoParamValuePairs[uuid].paramName}>`);

        // Need to look at what all the params are for the NL and see which ones aren't in thisDemoParamValuePairs
        const allParamUuids = Object.keys(this.getParamIDNameValueData().paramValueObj);
        
        // Identify all param uuids that are in allParamUuids but not in thisDemoFilledInParamUuids
        const paramUuidsMissing = _.difference(allParamUuids, thisDemoFilledInParamUuids);
        return paramUuidsMissing;
    }

    areAnyDemoParamsNotFilledIn(demoIndex){
        return this.getDemoParamsNotYetFilledIn(demoIndex).length > 0;
    }

    getParamColor(paramName){
        for(let item of Object.values(this.state.idToItem)){
            if(item.paramName === paramName){
                return item.paramTypeData.color;
            }
        }
    }

    // Similar to getParamValueData; just created a new version for now because i don't want to break getParamValueData
    getParamIDNameValueData(){
        let paramValueObj = {};
        let superlativeParameters = [];
        for(let item of Object.values(this.state.idToItem)){
            if(item.paramTypeData){
                // This item is a param. Add this param name and its param values/xpaths to paramValueObj
                const paramValues = {};
                for(let valueObj of item.paramTypeData.possibleValues){
                    const paramValue = valueObj.textCandidate;
                    const xPath = valueObj.xPath;
                    paramValues[paramValue] = xPath;
                }
                const paramName = item.paramName;
                const uuid = item.uuid;
                paramValueObj[uuid] = {
                    uuid,
                    paramName,
                    paramValues
                };
                if(item.paramTypeData.type === "superlative"){
                    // ideally should only be 1 superlative in the NL; not sure if we can meaningfully support multiple? not enough semantic input from user
                    superlativeParameters.push(paramName);
                }
            }
        }
        return {
            paramValueObj,
            superlativeParameters
        };
    }

    getParamValueData(){
        let paramValueObj = {};
        let superlativeParameters = [];
        for(let item of Object.values(this.state.idToItem)){
            if(item.paramTypeData){
                // This item is a param. Add this param name and its param values/xpaths to paramValueObj
                const thisParam = {};
                for(let valueObj of item.paramTypeData.possibleValues){
                    const paramValue = valueObj.textCandidate;
                    const xPath = valueObj.xPath;
                    thisParam[paramValue] = xPath;
                }
                const paramName = item.paramName;
                paramValueObj[paramName] = thisParam;
                if(item.paramTypeData.type === "superlative"){
                    // ideally should only be 1 superlative in the NL; not sure if we can meaningfully support multiple? not enough semantic input from user
                    superlativeParameters.push(paramName);
                }
            }
        }
        //console.log("paramValueObj", paramValueObj);
        //return paramValueObj;
        return {
            paramValueObj,
            superlativeParameters
        };
    }

    generateCodeStringFromProgramObj(program){
        console.log("generateCodeStringFromProgramObj operating on", program);
        let currentProgramCode;
            
        const paramValueObj = this.getParamValueData().paramValueObj;

        let programString = "[\n";
        for(let programVersion of program){
            if(programVersion && programVersion.program){
                programString += "[\n";
                for(let programStep of programVersion.program){
                    let programStepString = "{\n";
                    for(let [key, value] of Object.entries(programStep)){
                        if(typeof(value) === "string"){
                            programStepString += `"${key}": "${value}",\n`;
                        }else{
                            programStepString += `"${key}": ${value},\n`;
                        }
                        //programStepString += key + ": " + value + ", ";
                    }
                    programStepString += "}";
                    programString += programStepString + ",\n";
                }
                programString += "],\n";
            }else{
                programString += "null,\n";
            }
        }
        programString += "]";

        currentProgramCode = `const program = ${programString};\n
        const paramValueObj = ${JSON.stringify(paramValueObj)};`;
    

        return currentProgramCode;
    }

    handleStopRecordingDemo(demo_index){
        // Update mode state variables, and also generate program or update existing program
        console.log("handleStopRecordingDemo");
        console.log("demo_index", demo_index);

        this.setState({
            demoIndexInProgramInferenceMode: demo_index
        });

        setTimeout(() => {
            //let generatedProgram = this.state.generatedProgram;
            let generatedProgramClone = _.cloneDeep(this.state.generatedProgram);
            let currentProgramCode;
            let demonstrationsClone = _.cloneDeep(this.state.demonstrations);
            //if(this.state.demonstrations.length === 1){
            const demoObj = this.state.demonstrations[demo_index];
            
            let demoEventSequence = demoObj.eventSequence;
            
            let currentParamValuePairings = {};
            for(let paramNameValueObj of Object.values(demoObj.paramValuePairs)){
                // Don't include this param/value if this demo is specifically for this param/value
                // When we generate the program, we want to operate as if this param doesn't exist, so don't include it in currentParamValuePairings
                if(!this.state.demonstrations[demo_index].specificallyForParamUuid || this.state.idToItem[this.state.demonstrations[demo_index].specificallyForParamUuid].paramName !== paramNameValueObj.paramName){
                    const paramName = paramNameValueObj.paramName;
                    const paramValue = paramNameValueObj.paramValue;
                    currentParamValuePairings[paramName] = paramValue;
                }
            }
            console.log("currentParamValuePairings", currentParamValuePairings);

            const { paramValueObj, superlativeParameters } = this.getParamValueData();
            
            const constantSuperlatives = this.getConstantSuperlatives();
            
            //generatedProgram = generateProgramAndIdentifyNeededDemos(demoEventSequence, currentParamValuePairings, paramValueObj, superlativeParameters, constantSuperlatives, superlativeRules);
            const programResult = generateProgramAndIdentifyNeededDemos(demoEventSequence, currentParamValuePairings, paramValueObj, superlativeParameters, constantSuperlatives, superlativeRules);
            
            // If this demo is for a specific param/value, attach this info to the program obj, so that at execution we can figure out which program to run
            if(this.state.demonstrations[demo_index].specificallyForParamUuid){
                programResult.specificallyForParamName = this.state.idToItem[this.state.demonstrations[demo_index].specificallyForParamUuid].paramName;
                programResult.specificallyForValue = this.state.demonstrations[demo_index].specificallyForValue;
            }
            
            generatedProgramClone[demo_index] = programResult;
            console.log("generatedProgramClone", generatedProgramClone);

            currentProgramCode = this.generateCodeStringFromProgramObj(generatedProgramClone);

            // Want to note what the param value data was that was used during the demo;
                // later on when user runs program, we want to see if the param value data at that time is what it was at the time of the demo(s);
                // if it's different, then we'll want to warn user that they should probably re-demo so we can generate updated program
            demonstrationsClone[demo_index].paramValueDataUsed = this.getParamValueData();

            this.setState({
                generatedProgram: generatedProgramClone,
                demonstrations: demonstrationsClone,
                //currentProgramCode: "var x = 1; // sample code",
                currentProgramCode,
                demoIndexInRecordingMode: null,
                demoIndexInCreateMode: null, // for now, we'll also exit demo mode
                demoIndexInProgramInferenceMode: null,
                websiteSelectedTextObject: null
            });

            setTimeout(function(context){
                //console.log("context.editorRef.current", context.editorRef.current);
                // only if an editor instance already, format code
                if(context.editorRef && context.editorRef.current && context.editorRef.current.getAction('editor.action.formatDocument')){
                    context.editorRef.current.getAction('editor.action.formatDocument').run();
                }
            }, 1000, this);
        }, 0);
    }

    handleEditorDidMount(editor, monaco) {
        console.log("handleEditorDidMount");
        console.log("editor", editor);
        this.editorRef.current = editor; 

        setTimeout(function(context){
            //console.log("context.editorRef.current", context.editorRef.current);
            if(context.editorRef && context.editorRef.current && context.editorRef.current.getAction('editor.action.formatDocument')){
                context.editorRef.current.getAction('editor.action.formatDocument').run();
            }
        }, 1000, this);
    }

    removeProgramStep(step_index, programVersion_index){
        const generatedProgramClone = _.cloneDeep(this.state.generatedProgram);
        generatedProgramClone[programVersion_index].program.splice(step_index, 1);

        // Need to update code string to reflect program change we just made
        const currentProgramCode = this.generateCodeStringFromProgramObj(generatedProgramClone);

        this.setState({
            currentProgramCode,
            generatedProgram: generatedProgramClone
        });

        // We've programmatically updated the code, so we need to format it again
        setTimeout(function(context){
            //console.log("context.editorRef.current", context.editorRef.current);
            // only if an editor instance already, format code
            if(context.editorRef && context.editorRef.current && context.editorRef.current.getAction('editor.action.formatDocument')){
                context.editorRef.current.getAction('editor.action.formatDocument').run();
            }
        }, 1000, this);
    }

    removeDemoStep(step_index, demo_index){
        const demonstrationsClone = _.cloneDeep(this.state.demonstrations);
        demonstrationsClone[demo_index].eventSequence.splice(step_index, 1);

        this.setState({
            demonstrations: demonstrationsClone
        });
    }

    handleProgramStepInfluencedByChange(variableToChange, staticOrInferred, step_index, programVersion_index){
        const generatedProgramClone = _.cloneDeep(this.state.generatedProgram);
        if(variableToChange === "overall"){
            if(staticOrInferred === "static"){
                generatedProgramClone[programVersion_index].program[step_index].static = true;
            }else{
                // inferred
                generatedProgramClone[programVersion_index].program[step_index].static = false;
            }
        }else{
            // Here, staticOrInferred is an object
            for(let [attr, newValue] of Object.entries(staticOrInferred)){
                generatedProgramClone[programVersion_index].program[step_index][attr] = newValue;
            }
            //generatedProgramClone[programVersion_index].program[step_index][variableToChange] = staticOrInferred;
        }

        // Need to update code string to reflect program change we just made
        const currentProgramCode = this.generateCodeStringFromProgramObj(generatedProgramClone);

        this.setState({
            currentProgramCode,
            generatedProgram: generatedProgramClone
        });

        // We've programmatically updated the code, so we need to format it again
        setTimeout(function(context){
            //console.log("context.editorRef.current", context.editorRef.current);
            // only if an editor instance already, format code
            if(context.editorRef && context.editorRef.current && context.editorRef.current.getAction('editor.action.formatDocument')){
                context.editorRef.current.getAction('editor.action.formatDocument').run();
            }
        }, 1000, this);
    }


    // For NL template associated with demoIndex, user has set a new value for this param
    handleTemplateParamValueChange(e, paramUuid, demoIndex){
        const newParamValue = e.target.value;
        const paramName = this.state.idToItem[paramUuid].paramName;
        
        if(demoIndex === "runningProgram"){
            // We're rendering this template not for a demo but for running the generated program
            const paramValuePairsClone = _.cloneDeep(this.state.paramValuePairsForRunningProgram);
            paramValuePairsClone[paramUuid] = {
                paramName,
                paramValue: newParamValue
            };
            this.setState({
                paramValuePairsForRunningProgram: paramValuePairsClone
            });
        }else{
            // Set paramValuePairs for demo object
            const demonstrationsClone = _.cloneDeep(this.state.demonstrations);
            const demoObj = demonstrationsClone[demoIndex];
            demoObj.paramValuePairs[paramUuid] = {
                paramName,
                paramValue: newParamValue
            };

            this.setState({
                demonstrations: demonstrationsClone
            });
        }
    }

    handleRefinementDemoUpdate(e, demo_index, attributeToUpdate){
        const demonstrationsClone = _.cloneDeep(this.state.demonstrations);
        demonstrationsClone[demo_index][attributeToUpdate] = e.target.value;

        if(attributeToUpdate === "specificallyForParamUuid"){
            // Clear value, because user just changed param, so current value wouldn't make sense
            demonstrationsClone[demo_index]["specificallyForValue"] = "";
        }else if(attributeToUpdate === "specificallyForValue"){
            // Update param value for NL template
            // Wait a second, so that this setState doesn't conflict with one below
            setTimeout(function(context){
                context.handleTemplateParamValueChange(e, demonstrationsClone[demo_index]["specificallyForParamUuid"], demo_index);
            }, 0, this);
        }
        this.setState({
            demonstrations: demonstrationsClone
        });
    }

    handleUpdateFreeformNLQuery(e){
        this.setState({
            freeformNLQuery: e.target.value
        });
    }

    getRelevantQuery(){
        // get filled-in template string that best matches this.state.freeformNLQuery

        // Load the model.
        load().then(model => {
            
            const templateObj = this.generateTemplateString(this.state.idToItem["root"].itemIDs);
            //console.log("templateObj", templateObj);
            const templateString = "".concat(...templateObj.templateItems);
            

            //let possibleFilledInTemplates = [];
            let currentTemplates = [ templateString ];

            for(let [ paramID, valueList ] of Object.entries(templateObj.paramValueOptions)){
                let tempTemplates = [];
                for(let value of valueList){
                    for(let partialTemplate of currentTemplates){
                        const newString = partialTemplate.replace(`[param-${paramID}]`, value);
                        tempTemplates.push(newString);
                    }
                }
                //console.log("tempTemplates", tempTemplates);
                currentTemplates = tempTemplates;
            }
            console.log("currentTemplates", currentTemplates);

            /*let lowerCaseCurrentTemplates = [];
            for(let template of currentTemplates){
                lowerCaseCurrentTemplates.push(template.toLowerCase());
            }*/

            /*const possibleFilledInTemplates = [
                'For the MLB player who had the most home runs this year, how many stolen bases did they have?',
                'For the MLB player who had the most hits this year, how many stolen bases did they have?',
                'For the MLB player who had the most home runs this year, how many triples did they have?',
                'For the MLB player who had the most hits this year, how many triples did they have?',
            ];*/
            const freeformNLQuery = [
                //'Which player had the most home runs and how many triples did they have?'
                this.state.freeformNLQuery
            ];
            /*const lowerCaseFreeformNLQuery = [
                this.state.freeformNLQuery.toLowerCase()
            ];*/
            //model.embed(lowerCaseFreeformNLQuery).then(freeformNLQueryEmbedding => {
            model.embed(freeformNLQuery).then(freeformNLQueryEmbedding => {
                model.embed(currentTemplates).then(embeddings => {
                    // `embeddings` is a 2D tensor consisting of the 512-dimensional embeddings for each sentence.
                    // So in this example `embeddings` has the shape [2, 512].
                    const embed_freeformNLQuery = freeformNLQueryEmbedding.arraySync();
                    //console.log("embed_freeformNLQuery", embed_freeformNLQuery);

                    const embed_filledInTemplates = embeddings.arraySync();
                    //console.log("embed_filledInTemplates", embed_filledInTemplates);

                    /*let largestDotProdSoFar = 0;
                    let largestDotProdSoFarIndex = -1;*/
                    const comparisons = [];
                    // Dot product
                    for(let i = 0; i < currentTemplates.length; i++){
                        const dotProd = dotProduct(embed_freeformNLQuery[0], embed_filledInTemplates[i]);
                        //console.log(lowerCaseCurrentTemplates[i], dotProd);

                        /*if(dotProd > largestDotProdSoFar){
                            largestDotProdSoFar = dotProd;
                            largestDotProdSoFarIndex = i;
                        }*/
                        comparisons.push({
                            dotProd,
                            index: i,
                            sentence: currentTemplates[i]
                        });
                    }

                    comparisons.sort(function(a, b){
                        return b.dotProd - a.dotProd
                    });
                    
                    console.log("comparisons", comparisons);
                    
                    this.setState({
                        mostRelevantQueries: comparisons.slice(0, 3).map(function(obj){ return obj.sentence })
                    });
                });
            });
        });

        const dotProduct = (xs, ys) => {
            const sum = xs => xs ? xs.reduce((a, b) => a + b, 0) : undefined;

            return xs.length === ys.length ?
                sum(zipWith((a, b) => a * b, xs, ys))
                : undefined;
        }

        // zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
        const zipWith = (f, xs, ys) => {
            const ny = ys.length;
            return (xs.length <= ny ? xs : xs.slice(0, ny))
                .map((x, i) => f(x, ys[i]));
        }
    }

    handleRunProgram(){
        /*// First, cause website to re-render so we have clean slate
        this.forceReRenderEmbeddedWebsite();*/

        /*// Check if param value data has changed since demo(s) were recorded;
            // if they have, then we'll want to alert user that they probably should re-demo
            // (so we can generate updated program)
        const currentParamValueData = this.getParamValueData();
        console.log("currentParamValueData", currentParamValueData);
        let alertUserToReDemo = false;
        for(let demo of this.state.demonstrations){
            const demoParamValueDataUsed = demo.paramValueDataUsed;
            console.log("demoParamValueDataUsed", demoParamValueDataUsed);
            if(demoParamValueDataUsed && !_.isEqual(currentParamValueData, demoParamValueDataUsed)){
                console.log("not equal");
                alertUserToReDemo = true;
            }
        }*/

        // Clear current program output
        this.setState({
            programOutput: null,
            //programRunInProgress: !alertUserToReDemo
            programRunInProgress: true
        });

        /*if(alertUserToReDemo){
            window.alert("You've updated parameter values since you last created a demonstration. You should re-demo so we can generate an updated program.");
        }else{*/
        setTimeout(function(context){
            // No need to regenerate program anymore, because we won't let user run program if param values have changed (in which case, they'll have to create a new demo which will then regenerate the program)
            /*// This will regenerate program again, using the new xpaths
            context.handleStopRecordingDemo();*/

            // First, cause website to re-render so we have clean slate
            context.forceReRenderEmbeddedWebsite();

            // Wait a couple seconds to execute program
            setTimeout(async function(context){
                // Transform paramValuePairsForRunningProgram into { paramName: paramValue } format
                const paramToValueObj = {};
                for(let paramNameValueObj of Object.values(context.state.paramValuePairsForRunningProgram)){
                    const paramName = paramNameValueObj.paramName;
                    const paramValue = paramNameValueObj.paramValue;
                    paramToValueObj[paramName] = paramValue;
                }
                
                const programExecutionResult = await executeProgram(context.state.generatedProgram, paramToValueObj);
                const programOutput = programExecutionResult.valuesToReturn;
                const programOutputProgramIndex = programExecutionResult.selectedProgramIndex;
                const xPathsToHighlight = programExecutionResult.xPathsToHighlight;
                context.highlightXPaths(xPathsToHighlight);
                context.setState({
                    programOutput,
                    programOutputProgramIndex,
                    programRunInProgress: false
                });
            }, 2000, context);
        }, 0, this);
        //}
    }

    highlightXPaths(xPathList){
        for(let xPath of xPathList){
            const element = fontoxpath.evaluateXPathToNodes(xPath, document.documentElement)[0];
            element.style.backgroundColor = 'yellow';
        }
    }

    handleDemoReplay(demo_index){
        // First, cause website to re-render so we have clean slate
        this.forceReRenderEmbeddedWebsite();

        /*// Clear current program output
        this.setState({
            programOutput: null
        });*/

        // Wait a couple seconds to execute program
        setTimeout(async function(context){
            const replayResult = await replayDemo(context.state.demonstrations[demo_index].eventSequence);
            let valuesToReturn = replayResult.valuesToReturn;
            let xPathsToHighlight = replayResult.xPathsToHighlight;
            context.highlightXPaths(xPathsToHighlight);
        }, 2000, this);
    }

    toggleShowCodeEditor(){
        this.setState({
            showCodeEditor: !this.state.showCodeEditor
        });
    }

    generateTemplateString(itemIDs){
        console.log("generateTemplateString");
        const paramValueOptions = {}; // { paramUuid: [val1, val2, val3, ...]}
        function generateParamOrGroup(key, textItem){
            let itemContents = null;
            if(textItem.type === "param"){
                // Fill in itemContents
                itemContents = `[param-${textItem.uuid}]`;
                paramValueOptions[textItem.uuid] = textItem.paramTypeData.possibleValues.map((valueObj, i) => {
                    return valueObj.textCandidate;
                });
            }else if(textItem.type === "group"){
                itemContents = this.generateTemplateString(textItem.itemIDs);
            }

            return itemContents;
        }
        
        const templateItems = itemIDs.map((itemID, i) => {
            const textItem = this.state.idToItem[itemID];
            const key = i + "_" + textItem.type + "_" + (textItem.text? textItem.text : "");
            
            if(textItem.type === "param" || textItem.type === "group"){
                return generateParamOrGroup.call(this, key, textItem);
            }else{
                return textItem.text;
            }
        });
    
        //console.log("templateItems list", templateItems);
        //console.log("paramValueOptions", paramValueOptions);

        return {
            templateItems,
            paramValueOptions
        };
    }

    // For rendering the parameterized NL with widgets for the user to select param values for the upcoming demonstration
    renderNLTemplateItemsList(itemIDs, demoIndex, valuesEditable){
        // should be of the form { paramUuid: { paramName:, paramValue: } }
        function renderParamOrGroup(key, textItem){
            let itemContents = null;
            if(textItem.type === "param"){
                let paramValuePairs;
                // Populate paramValuePairs based on if this is for a demo or not
                if(demoIndex === "runningProgram"){
                    // We're rendering this template not for a demo but for running the generated program
                    paramValuePairs = this.state.paramValuePairsForRunningProgram;
                }else{
                    // Get paramValuePairs from demo object
                    paramValuePairs = this.state.demonstrations[demoIndex].paramValuePairs;
                }
                // Fill in itemContents
                itemContents = (
                    <span
                        key={key}
                    >
                        <TemplateParamTextItem
                            //text={textItem.text}
                            uuid={textItem.uuid}
                            demoIndexInRecordingMode = {this.state.demoIndexInRecordingMode}
                            color = {textItem.paramTypeData.color}
                            specificallyForParamUuid={this.state.demonstrations[demoIndex] ? this.state.demonstrations[demoIndex].specificallyForParamUuid : null}
                            paramName={textItem.paramName}
                            paramValue={paramValuePairs[textItem.uuid] ? paramValuePairs[textItem.uuid].paramValue : null } // have a backup value in case no value selected yet for this param
                            paramTypeData={textItem.paramTypeData}
                            paramAnnotatorCreated={textItem.paramAnnotatorCreated}
                            paramIsOptional={textItem.paramIsOptional}
                            paramMultipleValuesAllowed={textItem.paramMultipleValuesAllowed}
                            hoveredID={this.state.hoveredID}
                            groupSelectionMode={this.state.groupSelectionMode}
                            currentlySelected={textItem.currentlySelected}
                            uuidInEditMode={this.state.uuidInEditMode}
                            viewOnlyMode={this.props.viewOnlyMode}
                            demoIndex={demoIndex}
                            handleTemplateParamValueChange={(e) => this.handleTemplateParamValueChange(e, textItem.uuid, demoIndex)}
                            valuesEditable={valuesEditable}
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
                            <div
                                group-name=""
                                className={`${styles.groupName} ${(this.state.uuidInEditMode && this.state.uuidInEditMode !== textItem.uuid || this.state.groupSelectionMode ? styles.grayedOut : '')}`}
                            >
                                {textItem.groupName}
                            </div>
                        </span>
                        {this.renderNLTemplateItemsList(textItem.itemIDs, demoIndex, valuesEditable)}
                    </span>
                );
            }

            return (
                <span
                    container=""
                    className={`${styles.container} ${(this.state.uuidInEditMode && this.state.uuidInEditMode !== textItem.uuid || this.state.groupSelectionMode ? styles.grayedOut : '')}`}
                >
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
                        <TemplateRegularTextItem
                            text={textItem.text}
                            uuid={textItem.uuid}
                            uuidInEditMode={this.state.uuidInEditMode}
                            groupSelectionMode={this.state.groupSelectionMode}
                            viewOnlyMode={this.props.viewOnlyMode}
                        />
                    </span>
                );
            }
        });
    
        return domTextItems;
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
                            //handleParamValueBlurred={(e, i) => this.handleParamValueBlurred(e, i, textItem.uuid)}
                            hoveredID={this.state.hoveredID}
                            groupSelectionMode={this.state.groupSelectionMode}
                            currentlySelected={textItem.currentlySelected}
                            uuidInEditMode={this.state.uuidInEditMode}
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
                            handleInitialValuesSelected={(listOfValues) => this.handleInitialValuesSelected(listOfValues, textItem.uuid)}
                            handleMostLeastAdjectiveChange={(e) => this.handleMostLeastAdjectiveChange(e, textItem.uuid)}
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

    renderDemonstrations(demonstrations){
        const demonstrationItems = demonstrations.map((demonstration, demo_index) => {
            //const key = i + "_" + textItem.type + "_" + (textItem.text? textItem.text : "");
            const events = demonstration.eventSequence.map((e, e_index) => {
                // Should remove prefix before [clone]?
                //const targetXPath = getXPathForElement(e.target, document);
                return (
                    <div
                        key = {e_index}
                        className={styles.step}
                    >
                        {demo_index === this.state.demoIndexInCreateMode ? (
                            // Only allow user to delete a demo step during creation mode
                            <button
                                onClick={() => this.removeDemoStep(e_index, demo_index)}
                                className={styles.removeValueButton}
                                title="Delete"
                            >
                                x
                            </button>
                        ):(
                            ""
                        )}
                        <div
                            className={styles.stepPieceOfInfo}
                        >
                            Event type:&nbsp;&nbsp;
                            <span
                                className={styles.importantPieceOfInfo}
                            >
                                {e.eventType}
                            </span>
                        </div>
                        {/* <div>Target xPath: {targetXPath}</div> */}
                        <div
                            className={styles.stepPieceOfInfo}
                        >
                            Element text: {e.originalEventObj.target.textContent}
                        </div>
                        {/* <div
                            className={styles.stepPieceOfInfo}
                        >
                            Element tag name: {e.originalEventObj.target.tagName}
                        </div> */}
                    </div>
                );
            });
            const nlTemplateEditable = demo_index === this.state.demoIndexInCreateMode;
            const demoNLTemplateItems = this.renderNLTemplateItemsList(this.state.idToItem["root"].itemIDs, demo_index, nlTemplateEditable);
            return (
                <div
                    key={demo_index}
                    className={styles.demonstration}
                >
                    <div
                        className={styles.demonstrationName}
                    >
                        { demo_index === 0 ? "Main demonstration" : `Refinement demonstration ${demo_index}`}
                    </div>
                    {!nlTemplateEditable ?
                        <button
                            className={styles.replayDemoButton}
                            onClick={()=>this.handleDemoReplay(demo_index)}
                        >
                            Replay
                        </button>
                        : ""
                    }
                    {demo_index > 0 ? (
                        // This is a refinement demo, so user needs to choose param and value to make it for
                        <div
                            className={styles.margin}
                        >
                            <p>
                                This demonstration will apply only for a particular parameter value. Indicate which parameter and value you want this demonstration to be for.
                            </p>
                            <div>
                                <span>Parameter:</span>
                                <select
                                    log-this-element=""
                                    value={this.state.demonstrations[demo_index].specificallyForParamUuid}
                                    onChange={(e) => this.handleRefinementDemoUpdate(e, demo_index, "specificallyForParamUuid")}
                                    disabled={this.state.demonstrations[demo_index].eventSequence.length > 0 || demo_index === this.state.demoIndexInRecordingMode}
                                >
                                    <>
                                        <option
                                            value={""}
                                        >
                                            {"<Choose parameter>"}
                                        </option>
                                        {Object.entries(this.getParamIDNameValueData().paramValueObj).map(([key, data]) => {
                                            return (
                                                <option
                                                    value={data.uuid}
                                                >
                                                    {data.paramName}
                                                </option>
                                            );
                                        })}
                                    </>
                                </select>
                            </div>
                            <div>
                                <span>Value:</span>
                                <select
                                    log-this-element=""
                                    className={styles.specialParam}
                                    value={this.state.demonstrations[demo_index].specificallyForValue}
                                    onChange={(e) => this.handleRefinementDemoUpdate(e, demo_index, "specificallyForValue")}
                                    disabled={this.state.demonstrations[demo_index].eventSequence.length > 0 || demo_index === this.state.demoIndexInRecordingMode}
                                >
                                    {this.state.demonstrations[demo_index].specificallyForParamUuid ? (
                                        <>
                                            <option
                                                value={""}
                                            >
                                                {"<Choose value>"}
                                            </option>
                                            {Object.keys(this.getParamIDNameValueData().paramValueObj[this.state.demonstrations[demo_index].specificallyForParamUuid].paramValues).map((paramValue) => {
                                                return (
                                                    <option
                                                        value={paramValue}
                                                    >
                                                        {paramValue}
                                                    </option>
                                                );
                                            })}
                                        </>
                                    ):(
                                        ""
                                    )}
                                </select>
                            </div>
                        </div>
                    ):(
                        ""
                    )}
                    {demo_index === 0 || this.state.demonstrations[demo_index].specificallyForParamUuid && this.state.demonstrations[demo_index].specificallyForValue ? (
                        // Only let user edit param/values and record refinement demo if they've specified which specific param/value it is for
                        <div>
                            <div
                                className={styles.margin}
                            >
                                {demoNLTemplateItems}
                            </div>
                            <div>
                                {events}
                            </div>
                        </div>
                    ):(
                        ""
                    )}
                    {demo_index === this.state.demoIndexInCreateMode
                        ? ( // User has indicated they want to create a new demo; show start/stop recording button as appropriate
                        <>
                            {this.state.demoIndexInRecordingMode !== null ? (
                                <>{this.state.demoIndexInProgramInferenceMode !== null ? (
                                    <div>
                                        <button
                                            className={styles.waitAMomentButton}
                                            disabled={true}
                                        >Wait a moment...</button>
                                    </div>
                                ):(
                                    <div>
                                        <button
                                            className={styles.stopRecordingButton}
                                            onClick={() => this.handleStopRecordingDemo(demo_index)}
                                        >Stop recording</button>
                                    </div>
                                )}
                                </>
                            ) : (
                                <div>
                                    {demo_index === 0 || this.state.demonstrations[demo_index].specificallyForParamUuid && this.state.demonstrations[demo_index].specificallyForValue ? (
                                        // For refinement demo, only show "Start recording" button if user has already set specificallyForParamUuid and specificallyForValue
                                        <>
                                        {this.state.demoIndexInAboutToRecordMode === demo_index ? (
                                            <button
                                                className={styles.waitAMomentButton}
                                                disabled={true}
                                            >Wait a moment...</button>
                                        ):(
                                            <button
                                                className={styles.startRecordingButton}
                                                onClick={() => this.handleStartRecordingDemo(demo_index)}
                                                disabled={this.areAnyDemoParamsNotFilledIn(demo_index)}
                                            >Start recording</button>
                                        )}
                                        </>
                                    ):(
                                        ""
                                    )}
                                    <button
                                        className={styles.cancelButton}
                                        onClick={() => this.cancelNewDemo(demo_index)}
                                    >Cancel</button>
                                </div>
                            )}
                        </>
                        ):(
                            <>
                                {events.length > 0 || (demo_index === 0 && this.state.demonstrations.length > 0 && events.length === 0) ? (
                                    <button
                                        className={styles.createDemoButton}
                                        onClick={() => this.handleCreateDemo(demo_index)}
                                        disabled={this.state.demoIndexInCreateMode !== null} // Shouldn't be able to redo demo if another demo is currently being created
                                    >Redo demonstration</button>
                                ):(
                                    ""
                                )}
                            </>
                        )
                    }
                </div>
            );
        });

        return demonstrationItems; 
    }

    handleEditorChange(value, event) {
        console.log("handleEditorChange value", value);
        
        // Try/catch, for handling syntax error in code (e.g., if user is in middle of typing)
        try {
            const codeAST = acorn.parse(value, {
                ecmaVersion: 2020,
                locations: true
            });

            console.log("codeAST", codeAST);
            
            // Reconstruct "program" list
            const program = [];

            let programVarNode;
            let programListNode;
            for(let node of codeAST.body){
                if(node.type === "VariableDeclaration" && node.declarations[0].id.name === "program"){
                    programVarNode = node;
                    programListNode = node.declarations[0].init;
                }
            }
            
            if(programListNode){
                // Loop through programs
                for(let programObj of programListNode.elements){
                    // Loop through program steps
                    let programVersion = [];

                    // Check just to make sure this program isn't null
                    if(programObj && programObj.elements){
                        for(let stepObj of programObj.elements){
                            const programStep = {};
                            
                            // Loop through properties
                            for(let propertyObj of stepObj.properties){
                                
                                const keyObj = propertyObj.key;
                                const valueObj = propertyObj.value;
    
                                if(valueObj.type === "FunctionExpression"){
                                    const body = valueObj.body;
                                    const bodyString = value.substring(body.start, body.end);
    
                                    const params = valueObj.params;
                                    let paramString = "";
                                    for(let param of params){
                                        paramString += param.name + ", ";
                                    }
    
                                    const func = new Function(paramString, bodyString);
                                    programStep[keyObj.value] = func;
                                }else{
                                    // it's a string, undefined, etc; literal or similar
                                    programStep[keyObj.value] = valueObj.value;
                                }
                            }
                            
                            programVersion.push(programStep);
                        }
                    }else{
                        programVersion = null;
                    }
                    program.push(programVersion);
                }
                
                console.log("updated program obj", program);

            }

            // Shouldn't just replace generatedProgram; instead, need to update all attributes except "getElement" (unless customGetElement is true)

            // For each step in program, find the corresponding step in this.state.generatedProgram.program and reuse "getElement" unless customGetElement is true
            // update program
            
            const generatedProgramClone = _.cloneDeep(this.state.generatedProgram);

            for(let programVersionIndex = 0; programVersionIndex < program.length; programVersionIndex++){
                const programVersion = program[programVersionIndex];
                const updatedProgramVersion = [];
                // Check just to make sure this program isn't null
                if(programVersion){
                    for(let programStep of programVersion){
                        if(programStep.uuid){
                            // find programStep.uuid in this.state.generatedProgram.program
                            let correspondingOldProgramStep;
                            for(let oldProgramStep of this.state.generatedProgram[programVersionIndex].program){
                                if(oldProgramStep.uuid === programStep.uuid){
                                    correspondingOldProgramStep = oldProgramStep;
                                    break;
                                }
                            }
                            if(correspondingOldProgramStep){
                                // Potentially reuse parts of correspondingOldProgramStep
                                // Want to keep all literal values from programStep
                                // If customGetElement is true, then want to use new getElement from programStep; otherwise, use getElement from correspondingOldProgramStep
                                    // (we'll assume that means user hasn't written a custom function, in which case we want to use the existing func with the existing context)
                                if(!programStep.customGetElement){
                                    programStep.getElement = correspondingOldProgramStep.getElement;
                                    console.log("using existing getElement");
                                }
                                updatedProgramVersion.push(programStep);
                            }else{
                                // There isn't a corresponding program step from last version of program, so just include this new program step as is
                                updatedProgramVersion.push(programStep);
                            }
                        }else{
                            // no uuid for this program step, so we'll just include this program step as is (i.e., use the new getElement func that was just created)
                            updatedProgramVersion.push(programStep);
                        }
                    }
                    generatedProgramClone[programVersionIndex].program = updatedProgramVersion;
                }
            }

            //console.log("generatedProgramClone", generatedProgramClone);
            
            this.setState({
                currentProgramCode: value,
                generatedProgram: generatedProgramClone
            });   
        } catch (error) {

        }
    }

    forceReRenderEmbeddedWebsite(){
        console.log("forceReRenderEmbeddedWebsite");
        this.setState({
            triggerWebsiteReload: Math.random()
        });
    }

    render() {
        console.log("this.state.idToItem", this.state.idToItem);
        // Render each item as appropriate (using TextItem component)
        const domTextItems = this.renderItemsList(this.state.idToItem["root"].itemIDs);
        const demonstrationItems = this.renderDemonstrations(this.state.demonstrations);
        let runningProgramNLTemplateItems;
        let stepsForAllProgramVersions;
        // Actually should do this logic per program version
        if(this.state.generatedProgram){
            // A generated program exists, so show the NL template for setting param/value pairs for running this program
            runningProgramNLTemplateItems = this.renderNLTemplateItemsList(this.state.idToItem["root"].itemIDs, "runningProgram", true);
            const paramValueObj = this.getParamValueData().paramValueObj;
            // Show a representation of the program
            stepsForAllProgramVersions = this.state.generatedProgram.map((programVersion, programVersion_index) => {
                if(programVersion && programVersion.program){
                    let programSteps = programVersion.program.map((step, step_index) => {
                        return (
                            <div
                                key = {step_index}
                                className={styles.step}
                            >
                                <button
                                    onClick={() => this.removeProgramStep(step_index, programVersion_index)}
                                    className={styles.removeValueButton}
                                    title="Delete"
                                >
                                    x
                                </button>
                                <div
                                    className={styles.stepPieceOfInfo}
                                >
                                    Program step type:&nbsp;&nbsp;
                                    <span
                                        className={styles.importantPieceOfInfo}
                                    >
                                        {step.eventType}
                                    </span>
                                </div>
                                {/* <div>Target xPath: {targetXPath}</div> */}
                                <div
                                    className={styles.stepPieceOfInfo}
                                >
                                    { step.customGetElement ? (
                                        <div
                                            className={styles.importantPieceOfInfo}
                                        >
                                            Custom logic (see code)
                                        </div>
                                    ):(
                                        <>
                                            <div>
                                                Influenced by the following:
                                            </div>
                                            { step.relevantParam || step.filterParamForRowSelection || step.colParamForSuperlativeForRowSelection || step.superlativeParamForRowSelection || step.constantSuperlativeValueForRowSelection || step.relevantParamForCol ?  (
                                                <div>
                                                    <div>
                                                        {/* <input
                                                            type="radio"
                                                            log-this-element=""
                                                            name={`inferred_influencedBy_${step_index}_${programVersion_index}`}
                                                            id={`inferred_influencedBy_${step_index}_${programVersion_index}`}
                                                            value="inferred"
                                                            checked={!step.static}
                                                            onChange={() => this.handleProgramStepInfluencedByChange("overall", "inferred", step_index, programVersion_index)}
                                                            disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.state.viewOnlyMode}
                                                        />
                                                        <label htmlFor={`inferred_influencedBy_${step_index}_${programVersion_index}`}> */}
                                                            <span
                                                                //className={styles.importantPieceOfInfo}
                                                            >
                                                                { step.relevantParam ?
                                                                    <>
                                                                        <div>
                                                                            <input
                                                                                type="radio"
                                                                                log-this-element=""
                                                                                name={`inferred_influencedBy_${step_index}_${programVersion_index}`}
                                                                                id={`inferred_influencedBy_${step_index}_${programVersion_index}`}
                                                                                value="inferred"
                                                                                checked={!step.static}
                                                                                onChange={() => this.handleProgramStepInfluencedByChange("overall", "inferred", step_index, programVersion_index)}
                                                                                disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.state.viewOnlyMode}
                                                                            />
                                                                            <label htmlFor={`inferred_influencedBy_${step_index}_${programVersion_index}`}>
                                                                                <span
                                                                                    className={styles.importantPieceOfInfo}
                                                                                    style={
                                                                                        {
                                                                                            backgroundColor: this.getParamColor(step.relevantParam)
                                                                                        }
                                                                                    }
                                                                                >
                                                                                    {step.relevantParam} &nbsp;&nbsp;&nbsp;
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                        <div>
                                                                            <input
                                                                                type="radio"
                                                                                log-this-element=""
                                                                                name={`overallStatic_influencedBy_${step_index}_${programVersion_index}`}
                                                                                id={`overallStatic_influencedBy_${step_index}_${programVersion_index}`}
                                                                                value="static"
                                                                                checked={step.static}
                                                                                onChange={() => this.handleProgramStepInfluencedByChange("overall", "static", step_index, programVersion_index)}
                                                                                disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.state.viewOnlyMode}
                                                                            />
                                                                            <label htmlFor={`overallStatic_influencedBy_${step_index}_${programVersion_index}`}>
                                                                                <span
                                                                                    className={styles.importantPieceOfInfo}
                                                                                >
                                                                                    None
                                                                                </span>
                                                                                &nbsp; (static - simply replays recording)
                                                                            </label>
                                                                        </div>
                                                                    </>
                                                                : "" }
                                                                {/* { step.filterParamForRowSelection ? <span> Row determined by: {step.filterParamForRowSelection} &nbsp;&nbsp;&nbsp; </span> : "" } */}
                                                                { step.filterParamForRowSelection || step.colParamForSuperlativeForRowSelection || step.superlativeParamForRowSelection || step.constantSuperlativeValueForRowSelection ?
                                                                    <div
                                                                        className={styles.inferenceExplanationIndentation}
                                                                    >
                                                                        <div>
                                                                            {/* Row determined by: */}
                                                                            Entry determined by:
                                                                        </div>
                                                                        <div
                                                                            className={styles.inferenceExplanationIndentation}
                                                                        >
                                                                            {step.filterParamForRowSelection ?
                                                                                <div
                                                                                    className={styles.programRepRowSection}
                                                                                >
                                                                                    Filtered by:
                                                                                    {step.filterParamNamePossibleOptions.map((filterParamNamePossibleOption) => {
                                                                                        return <>
                                                                                            <span
                                                                                                className={styles.programRadioButtonOption}
                                                                                            >
                                                                                                <input
                                                                                                    type="radio"
                                                                                                    log-this-element=""
                                                                                                    name={`rowFilterParam_influencedBy_${step_index}_${programVersion_index}`}
                                                                                                    id={`rowFilterParam_influencedBy_${step_index}_${programVersion_index}`}
                                                                                                    value={filterParamNamePossibleOption}
                                                                                                    checked={step.valueForFilterParamForRowSelection === filterParamNamePossibleOption}
                                                                                                    onChange={() => this.handleProgramStepInfluencedByChange("valueForFilterParamForRowSelection", { valueForFilterParamForRowSelection: filterParamNamePossibleOption }, step_index, programVersion_index)}
                                                                                                    disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.state.viewOnlyMode}
                                                                                                />
                                                                                                <label htmlFor={`rowFilterParam_influencedBy_${step_index}_${programVersion_index}`}>
                                                                                                    <span
                                                                                                        className={styles.importantPieceOfInfo}
                                                                                                        style={
                                                                                                            {
                                                                                                                backgroundColor: this.getParamColor(filterParamNamePossibleOption)
                                                                                                            }
                                                                                                        }
                                                                                                    >
                                                                                                        {filterParamNamePossibleOption}
                                                                                                    </span>
                                                                                                </label>
                                                                                            </span>
                                                                                        </>
                                                                                    })}
                                                                                    <span
                                                                                        className={styles.programRadioButtonOption}
                                                                                    >
                                                                                        <input
                                                                                            type="radio"
                                                                                            log-this-element=""
                                                                                            name={`rowFilterStatic_influencedBy_${step_index}_${programVersion_index}`}
                                                                                            id={`rowFilterStatic_influencedBy_${step_index}_${programVersion_index}`}
                                                                                            value={null}
                                                                                            checked={step.valueForFilterParamForRowSelection === null}
                                                                                            onChange={() => this.handleProgramStepInfluencedByChange("valueForFilterParamForRowSelection", { valueForFilterParamForRowSelection: null }, step_index, programVersion_index)}
                                                                                            disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.state.viewOnlyMode}
                                                                                        />
                                                                                        <label htmlFor={`rowFilterStatic_influencedBy_${step_index}_${programVersion_index}`}>
                                                                                            None
                                                                                            {!step.superlativeParamForRowSelection && !step.constantSuperlativeValueForRowSelection ? (
                                                                                                // No superlative, so here in filter section want to show the original row #
                                                                                                <>
                                                                                                    &nbsp;(use original entry #{step.originalRowNumber + 1})
                                                                                                </>
                                                                                            ):(
                                                                                                ""
                                                                                            )}
                                                                                        </label>
                                                                                    </span>
                                                                                </div>
                                                                            :""}
                                                                            {step.superlativeParamForRowSelection || step.constantSuperlativeValueForRowSelection ?
                                                                                <div
                                                                                    className={styles.programRepRowSection}
                                                                                >
                                                                                    Superlative:&nbsp;&nbsp;
                                                                                    {step.superlativeParamForRowSelection ?
                                                                                        <span
                                                                                            className={styles.importantPieceOfInfo}
                                                                                            style={
                                                                                                {
                                                                                                    backgroundColor: this.getParamColor(step.superlativeParamForRowSelection)
                                                                                                }
                                                                                            }
                                                                                        >
                                                                                            {step.superlativeParamForRowSelection}
                                                                                        </span>
                                                                                    :""}
                                                                                    {step.constantSuperlativeValueForRowSelection ?
                                                                                        <span
                                                                                            className={styles.importantPieceOfInfo}
                                                                                        >
                                                                                            {step.constantSuperlativeValueForRowSelection}
                                                                                        </span>
                                                                                    :""}
                                                                                    <div
                                                                                        className={styles.superlativeOptions}
                                                                                    >
                                                                                        over
                                                                                        {step.superlativeColPossibleParamOptions.map((possibleParamOption) => {
                                                                                            return <>
                                                                                                <span
                                                                                                    className={styles.programRadioButtonOption}
                                                                                                >
                                                                                                    <input
                                                                                                        type="radio"
                                                                                                        log-this-element=""
                                                                                                        name={`superlativeColParam_influencedBy_${step_index}_${programVersion_index}`}
                                                                                                        id={`superlativeColParam_influencedBy_${step_index}_${programVersion_index}`}
                                                                                                        value={possibleParamOption.paramName}
                                                                                                        checked={step.paramNameForSuperlativeCol === possibleParamOption.paramName}
                                                                                                        onChange={() => this.handleProgramStepInfluencedByChange("paramNameForSuperlativeCol", { paramNameForSuperlativeCol: possibleParamOption.paramName, valueForCurrentParamForSuperlativeCol: null, paramForValueForCurrentParamForSuperlativeCol: null, staticColIndexForSuperlativeCol: null }, step_index, programVersion_index)}
                                                                                                        disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.state.viewOnlyMode}
                                                                                                    />
                                                                                                    <label htmlFor={`superlativeColParam_influencedBy_${step_index}_${programVersion_index}`}>
                                                                                                        <span
                                                                                                            className={styles.importantPieceOfInfo}
                                                                                                            style={
                                                                                                                {
                                                                                                                    backgroundColor: this.getParamColor(possibleParamOption.paramName)
                                                                                                                }
                                                                                                            }
                                                                                                        >
                                                                                                            {possibleParamOption.paramName}
                                                                                                        </span>
                                                                                                    </label>
                                                                                                </span>
                                                                                            </>
                                                                                        })}
                                                                                        {step.superlativeColPossibleStaticOptions.map((possibleStaticOption) => {
                                                                                            // there should only be 1 static col option for the selected col, but will still do a loop here
                                                                                            return <>
                                                                                                {possibleStaticOption.visibleColName ? (
                                                                                                    <>
                                                                                                        <span
                                                                                                            className={styles.programRadioButtonOption}
                                                                                                        >
                                                                                                            <input
                                                                                                                type="radio"
                                                                                                                log-this-element=""
                                                                                                                name={`superlative_colStaticValue_influencedBy_${step_index}_${programVersion_index}`}
                                                                                                                id={`superlative_colStaticValue_influencedBy_${step_index}_${programVersion_index}`}
                                                                                                                value={possibleStaticOption.visibleColName}
                                                                                                                checked={step.valueForCurrentParamForSuperlativeCol === possibleStaticOption.visibleColName}
                                                                                                                onChange={() => this.handleProgramStepInfluencedByChange("valueForCurrentParamForSuperlativeCol", { paramNameForSuperlativeCol: null, valueForCurrentParamForSuperlativeCol: possibleStaticOption.visibleColName, paramForValueForCurrentParamForSuperlativeCol: possibleStaticOption.paramName, staticColIndexForSuperlativeCol: null }, step_index, programVersion_index)}
                                                                                                                disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.state.viewOnlyMode}
                                                                                                            />
                                                                                                            <label htmlFor={`superlative_colStaticValue_influencedBy_${step_index}_${programVersion_index}`}>
                                                                                                                {/* column&nbsp; */}
                                                                                                                <span
                                                                                                                    className={styles.importantPieceOfInfo}
                                                                                                                >
                                                                                                                    { possibleStaticOption.visibleColName }
                                                                                                                </span>
                                                                                                            </label>
                                                                                                        </span>
                                                                                                    </>
                                                                                                ):(
                                                                                                    <>
                                                                                                        <span
                                                                                                            className={styles.programRadioButtonOption}
                                                                                                        >
                                                                                                            <input
                                                                                                                type="radio"
                                                                                                                log-this-element=""
                                                                                                                name={`superlative_colStaticColIndex_influencedBy_${step_index}_${programVersion_index}`}
                                                                                                                id={`superlative_colStaticColIndex_influencedBy_${step_index}_${programVersion_index}`}
                                                                                                                value={ possibleStaticOption.colIndexOptionObject.dataValueColIndex }
                                                                                                                checked={(step.staticColIndexForSuperlativeCol) === (possibleStaticOption.colIndexOptionObject.dataValueColIndex)}
                                                                                                                onChange={() => this.handleProgramStepInfluencedByChange("staticColIndexForSuperlativeCol", { paramNameForSuperlativeCol: null, valueForCurrentParamForSuperlativeCol: null, paramForValueForCurrentParamForSuperlativeCol: null, staticColIndexForSuperlativeCol: possibleStaticOption.colIndexOptionObject.dataValueColIndex }, step_index, programVersion_index)}
                                                                                                                disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.state.viewOnlyMode}
                                                                                                            />
                                                                                                            <label htmlFor={`superlative_colStaticColIndex_influencedBy_${step_index}_${programVersion_index}`}>
                                                                                                                {/* column&nbsp; */}
                                                                                                                attribute&nbsp;#
                                                                                                                <span
                                                                                                                    className={styles.importantPieceOfInfo}
                                                                                                                >
                                                                                                                    { possibleStaticOption.colIndexOptionObject.dataValueColIndex + 1 }
                                                                                                                </span>
                                                                                                            </label>
                                                                                                        </span>
                                                                                                    </>
                                                                                                )}
                                                                                            </>
                                                                                        })}
                                                                                        <>
                                                                                            <span
                                                                                                className={styles.programRadioButtonOption}
                                                                                            >
                                                                                                <input
                                                                                                    type="radio"
                                                                                                    log-this-element=""
                                                                                                    name={`noSuperlative_influencedBy_${step_index}_${programVersion_index}`}
                                                                                                    id={`noSuperlative_influencedBy_${step_index}_${programVersion_index}`}
                                                                                                    value={"noSuperlative"}
                                                                                                    checked={step.paramNameForSuperlativeCol === null && step.valueForCurrentParamForSuperlativeCol === null && step.paramForValueForCurrentParamForSuperlativeCol === null && step.staticColIndexForSuperlativeCol === null}
                                                                                                    onChange={() => this.handleProgramStepInfluencedByChange("noSuperlative", { paramNameForSuperlativeCol: null, valueForCurrentParamForSuperlativeCol: null, paramForValueForCurrentParamForSuperlativeCol: null, staticColIndexForSuperlativeCol: null }, step_index, programVersion_index)}
                                                                                                    disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.state.viewOnlyMode}
                                                                                                />
                                                                                                <label htmlFor={`noSuperlative_influencedBy_${step_index}_${programVersion_index}`}>
                                                                                                    None
                                                                                                    {!step.filterParamForRowSelection ? (
                                                                                                        // No filter, so here in superlative section want to show the original row #
                                                                                                        <>
                                                                                                            &nbsp;(use original entry #{step.originalRowNumber + 1})
                                                                                                        </>
                                                                                                    ):(
                                                                                                        ""
                                                                                                    )}
                                                                                                </label>
                                                                                            </span>
                                                                                        </>
                                                                                    </div>
                                                                                    {/* {step.colParamForSuperlativeForRowSelection ?
                                                                                        <span
                                                                                            className={styles.importantPieceOfInfo}
                                                                                            style={
                                                                                                {
                                                                                                    backgroundColor: this.getParamColor(step.colParamForSuperlativeForRowSelection)
                                                                                                }
                                                                                            }
                                                                                        >
                                                                                            {step.colParamForSuperlativeForRowSelection};
                                                                                        </span>
                                                                                    :""} */}
                                                                                </div>
                                                                            :""
                                                                            }
                                                                            {
                                                                                // There's both a filter and superlative for this row selection, so include an overall "none" option
                                                                                (step.filterParamForRowSelection && (step.superlativeParamForRowSelection || step.constantSuperlativeValueForRowSelection)) ? (
                                                                                    <>
                                                                                        <div
                                                                                            className={styles.programRadioButtonOption}
                                                                                        >
                                                                                            <input
                                                                                                type="radio"
                                                                                                log-this-element=""
                                                                                                name={`noSuperlativeNoFilter_influencedBy_${step_index}_${programVersion_index}`}
                                                                                                id={`noSuperlativeNoFilter_influencedBy_${step_index}_${programVersion_index}`}
                                                                                                value={step.valueForFilterParamForRowSelection === null && step.paramNameForSuperlativeCol === null && step.valueForCurrentParamForSuperlativeCol === null && step.paramForValueForCurrentParamForSuperlativeCol === null && step.staticColIndexForSuperlativeCol === null}
                                                                                                checked={step.valueForFilterParamForRowSelection === null && step.paramNameForSuperlativeCol === null && step.valueForCurrentParamForSuperlativeCol === null && step.paramForValueForCurrentParamForSuperlativeCol === null && step.staticColIndexForSuperlativeCol === null}
                                                                                                onChange={() => this.handleProgramStepInfluencedByChange("noSuperlativeNoFilter", { paramNameForSuperlativeCol: null, valueForCurrentParamForSuperlativeCol: null, paramForValueForCurrentParamForSuperlativeCol: null, staticColIndexForSuperlativeCol: null, valueForFilterParamForRowSelection: null }, step_index, programVersion_index)}
                                                                                                disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.state.viewOnlyMode}
                                                                                            />
                                                                                            <label htmlFor={`noSuperlativeNoFilter_influencedBy_${step_index}_${programVersion_index}`}>
                                                                                                No filter or superlative (use original entry #{step.originalRowNumber + 1})
                                                                                            </label>
                                                                                        </div>
                                                                                    </>
                                                                                ):(
                                                                                    ""
                                                                                )
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                : "" }
                                                                { step.relevantParamForCol || (step.selectedColPossibleStaticOptions && step.selectedColPossibleStaticOptions.length > 0) ?
                                                                    <>
                                                                        <div
                                                                            className={styles.inferenceExplanationIndentation}
                                                                        >
                                                                            {/* Column determined by: */}
                                                                            Take attribute:
                                                                            {step.selectedColPossibleParamOptions.map((possibleParamOption) => {
                                                                                return <>
                                                                                    <span
                                                                                        className={styles.programRadioButtonOption}
                                                                                    >
                                                                                        <input
                                                                                            type="radio"
                                                                                            log-this-element=""
                                                                                            name={`colParam_influencedBy_${step_index}_${programVersion_index}`}
                                                                                            id={`colParam_influencedBy_${step_index}_${programVersion_index}`}
                                                                                            value={possibleParamOption.paramName}
                                                                                            checked={step.paramNameForSelectedCol === possibleParamOption.paramName}
                                                                                            onChange={() => this.handleProgramStepInfluencedByChange("paramNameForSelectedCol", { paramNameForSelectedCol: possibleParamOption.paramName, valueForCurrentParamForSelectedCol: null, paramForValueForCurrentParamForSelectedCol: null, colIndexForSelectedCol: null }, step_index, programVersion_index)}
                                                                                            disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.state.viewOnlyMode}
                                                                                        />
                                                                                        <label htmlFor={`colParam_influencedBy_${step_index}_${programVersion_index}`}>
                                                                                            <span
                                                                                                className={styles.importantPieceOfInfo}
                                                                                                style={
                                                                                                    {
                                                                                                        backgroundColor: this.getParamColor(possibleParamOption.paramName)
                                                                                                    }
                                                                                                }
                                                                                            >
                                                                                                {possibleParamOption.paramName}
                                                                                            </span>
                                                                                        </label>
                                                                                    </span>
                                                                                </>
                                                                            })}
                                                                            {step.selectedColPossibleStaticOptions.map((possibleStaticOption) => {
                                                                                // there should only be 1 static col option for the selected col, but will still do a loop here
                                                                                return <>
                                                                                    {possibleStaticOption.visibleColName ? (
                                                                                        <>
                                                                                            <span
                                                                                                className={styles.programRadioButtonOption}
                                                                                            >
                                                                                                <input
                                                                                                    type="radio"
                                                                                                    log-this-element=""
                                                                                                    name={`colStaticValue_influencedBy_${step_index}_${programVersion_index}`}
                                                                                                    id={`colStaticValue_influencedBy_${step_index}_${programVersion_index}`}
                                                                                                    value={possibleStaticOption.visibleColName}
                                                                                                    checked={step.valueForCurrentParamForSelectedCol === possibleStaticOption.visibleColName}
                                                                                                    onChange={() => this.handleProgramStepInfluencedByChange("valueForCurrentParamForSelectedCol", { paramNameForSelectedCol: null, valueForCurrentParamForSelectedCol: possibleStaticOption.visibleColName, paramForValueForCurrentParamForSelectedCol: possibleStaticOption.paramName, colIndexForSelectedCol: null }, step_index, programVersion_index)}
                                                                                                    disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.state.viewOnlyMode}
                                                                                                />
                                                                                                <label htmlFor={`colStaticValue_influencedBy_${step_index}_${programVersion_index}`}>
                                                                                                    {/* column&nbsp; */}
                                                                                                    <span
                                                                                                        className={styles.importantPieceOfInfo}
                                                                                                    >
                                                                                                        { possibleStaticOption.visibleColName }
                                                                                                    </span>
                                                                                                </label>
                                                                                            </span>
                                                                                        </>
                                                                                    ):(
                                                                                        <>
                                                                                            <span
                                                                                                className={styles.programRadioButtonOption}
                                                                                            >
                                                                                                <input
                                                                                                    type="radio"
                                                                                                    log-this-element=""
                                                                                                    name={`colStaticColIndex_influencedBy_${step_index}_${programVersion_index}`}
                                                                                                    id={`colStaticColIndex_influencedBy_${step_index}_${programVersion_index}`}
                                                                                                    value={ possibleStaticOption.colIndexOptionObject.dataValueColIndex }
                                                                                                    checked={(step.colIndexForSelectedCol) === (possibleStaticOption.colIndexOptionObject.dataValueColIndex)}
                                                                                                    onChange={() => this.handleProgramStepInfluencedByChange("colIndexForSelectedCol", { paramNameForSelectedCol: null, valueForCurrentParamForSelectedCol: null, paramForValueForCurrentParamForSelectedCol: null, colIndexForSelectedCol: possibleStaticOption.colIndexOptionObject.dataValueColIndex }, step_index, programVersion_index)}
                                                                                                    disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.state.viewOnlyMode}
                                                                                                />
                                                                                                <label htmlFor={`colStaticColIndex_influencedBy_${step_index}_${programVersion_index}`}>
                                                                                                    {/* column&nbsp;# */}
                                                                                                    attribute&nbsp;#
                                                                                                    <span
                                                                                                        className={styles.importantPieceOfInfo}
                                                                                                    >
                                                                                                        { possibleStaticOption.colIndexOptionObject.dataValueColIndex + 1 }
                                                                                                    </span>
                                                                                                </label>
                                                                                            </span>
                                                                                        </>
                                                                                    )}
                                                                                    
                                                                                </>
                                                                            })}
                                                                        </div>
                                                                    </>
                                                                : "" }
                                                            </span>
                                                        {/* </label> */}
                                                    </div>
                                                    {/* <div>
                                                        <input
                                                            type="radio"
                                                            log-this-element=""
                                                            name={`overallStatic_influencedBy_${step_index}_${programVersion_index}`}
                                                            id={`overallStatic_influencedBy_${step_index}_${programVersion_index}`}
                                                            value="static"
                                                            checked={step.static}
                                                            onChange={() => this.handleProgramStepInfluencedByChange("overall", "static", step_index, programVersion_index)}
                                                            disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.state.viewOnlyMode}
                                                        />
                                                        <label htmlFor={`overallStatic_influencedBy_${step_index}_${programVersion_index}`}>
                                                            <span
                                                                className={styles.importantPieceOfInfo}
                                                            >
                                                                None
                                                            </span>
                                                            &nbsp; (static - simply replays recording)
                                                        </label>
                                                    </div> */}
                                                </div>
                                            ) : (
                                                <div>
                                                    <span
                                                        className={styles.importantPieceOfInfo}
                                                    >
                                                        None
                                                    </span>
                                                    &nbsp; (static - simply replays recording)
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    });
                    return (
                        <div
                            className={styles.demonstration}
                        >
                            <div
                                className={styles.demonstrationName}
                            >
                                {programVersion_index === 0 ? "Main Program" : `Refinement Program ${programVersion_index}`}
                            </div>
                            {this.state.demonstrations[programVersion_index].specificallyForParamUuid ? (
                                // This is a refinement param, show parameter/value
                                <div>
                                    <p>Specifically for </p>
                                    <p>Parameter:
                                        <b
                                            className={styles.specialParamText}
                                        >
                                            {this.state.idToItem[this.state.demonstrations[programVersion_index].specificallyForParamUuid].paramName}
                                        </b>
                                    </p>
                                    <p>Value:
                                        <b
                                            className={styles.specialParamText}
                                        >   
                                            {this.state.demonstrations[programVersion_index].specificallyForValue}
                                        </b>
                                    </p>
                                </div>
                            ):(
                                ""
                            )}
                            <div>

                            </div>
                            <div>
                                {programSteps}
                            </div>
                        </div>
                    );
                }else{
                    return null;
                }
            });
            // Filter to make sure we're not including program versions that are null
            stepsForAllProgramVersions = stepsForAllProgramVersions.filter(item => item !== null);
        }
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
                            {/* <button
                                onClick={() => this.scrollToBottomOfPage()}
                                className={`${styles.submitButton} ${styles.topButton}`}
                                disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.props.viewOnlyMode}
                            >
                                Next
                            </button> */}
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
                    {this.props.showDemoInterface ? 
                    <div
                        className={styles.demoAndProgramArea}
                        /* Need to put demos and program within this single div because
                        they're dynamic content (e.g., program area not shown until a program exists),
                        and so they'll cause previously captured xpaths (e.g., related to demo replay) to no longer work */
                    >
                        <div
                            className={styles.section}
                        >
                            <p
                                className={styles.sectionHeader}
                            >
                                Demonstrations
                            </p>
                            {demonstrationItems}
                            {this.state.demoIndexInCreateMode !== null
                                ? ( // User has indicated they want to create a new demo; show start/stop recording button as appropriate
                                <>
                                </>
                                ):( // Currently not in demo mode; show user 'create demo' button in case they want to create a demo
                                    <>
                                        {this.state.demonstrations.length === 0 ? (
                                            // No demo exists yet, user is creating for the first time
                                            <button
                                                className={styles.createDemoButton}
                                                onClick={() => this.handleCreateDemo(null)}
                                            >Create main demonstration</button>
                                        ):(
                                            // A demo already exists; "redo" will overwrite it
                                            <button
                                                className={styles.createDemoButton}
                                                onClick={() => this.handleCreateDemo(null)}
                                            >Add a refinement demonstration</button>
                                        )}
                                    </>
                                )
                            }
                        </div>
                        {/* Hide 'Generated program' section during demonstration (so that the demo NL template + 'stop recording' button is closer to the website area) */}
                        {stepsForAllProgramVersions.length > 0 && this.state.demoIndexInRecordingMode === null ? (
                            <div
                                className={styles.section}
                            >
                                <p
                                    className={styles.sectionHeader}
                                >
                                    Generated program
                                </p>
                                <div
                                    className={styles.subSection}
                                >
                                    <p
                                        className={styles.subSectionHeader}
                                    >
                                        Partial program representation
                                    </p>
                                    <div>
                                        {stepsForAllProgramVersions}
                                    </div>
                                    <div>
                                        {this.state.showCodeEditor ? (
                                            <>
                                                <button
                                                    className={styles.codeEditorButton}
                                                    onClick={()=>this.toggleShowCodeEditor()}
                                                >Hide code editor</button>
                                                <div
                                                    className={styles.codeEditor}
                                                >
                                                    <MonacoEditor
                                                        height="90vh"
                                                        defaultLanguage="javascript"
                                                        defaultValue="// some comment"
                                                        value={this.state.currentProgramCode}
                                                        onChange={(value, event)=>this.handleEditorChange(value, event)}
                                                        onMount={(editor, monaco) => this.handleEditorDidMount(editor, monaco)}
                                                    />
                                                </div>
                                            </>
                                        ):(
                                            <button
                                                className={styles.codeEditorButton}
                                                onClick={()=>this.toggleShowCodeEditor()}
                                            >Show code editor</button>
                                        )}
                                        
                                    </div>
                                </div>
                                <div
                                    className={styles.subSection}
                                >
                                    <p
                                        className={styles.subSectionHeader}
                                    >
                                        Run program
                                    </p>
                                    <p>Set values to run program on:</p>
                                    {/* <div>
                                        <input
                                            className={styles.freeformNLQuery}
                                            log-this-element=""
                                            type="text"
                                            value={this.state.freeformNLQuery}
                                            onChange={(e) => this.handleUpdateFreeformNLQuery(e)}
                                            disabled={this.state.uuidInEditMode || this.state.groupSelectionMode || this.state.viewOnlyMode}
                                        >
                                        </input>
                                        <button
                                            className={styles.getRelevantQueryButton}
                                            onClick={() => this.getRelevantQuery()}
                                        >
                                            Get relevant query
                                        </button>
                                        { this.state.mostRelevantQueries ? (
                                            <div>
                                                <p>Did you mean one of these?</p>
                                                <div>
                                                    {this.state.mostRelevantQueries.map(function(query, index){
                                                        return <>
                                                            <div>{index+1}. {query}</div>
                                                        </>
                                                    })}
                                                </div>
                                            </div>
                                        ):(
                                            ""
                                        )}
                                    </div> */}
                                    <div>
                                        {runningProgramNLTemplateItems}
                                    </div>
                                    <div>
                                        {this.state.programRunInProgress ? (
                                            <button
                                                className={styles.runProgramButton}
                                                onClick={() => this.handleRunProgram()}
                                                disabled={true}
                                            >
                                                Running...
                                            </button>
                                        ):(
                                            <button
                                                className={styles.runProgramButton}
                                                onClick={() => this.handleRunProgram()}
                                                disabled={this.areAnyDemoParamsNotFilledIn("runningProgram")}
                                            >
                                                Run program
                                            </button>
                                        )}
                                    </div>
                                    {this.state.programOutput ? (
                                        <div
                                            className={styles.programOutput}
                                        >
                                            <div>
                                                <span>Program output</span>
                                                <span
                                                    className={styles.programOutputProgramIndexText}
                                                >
                                                    &nbsp;(run using {this.state.programOutputProgramIndex === 0 ? "Main Program" : `Refinement Program ${this.state.programOutputProgramIndex}`})
                                                </span>
                                            </div>
                                            {this.state.programOutput.map(function(value){
                                                if(value.type === "error"){
                                                    return (
                                                        <div
                                                            className={styles.runtimeError}
                                                        >
                                                            {value.message}
                                                        </div>
                                                    );
                                                }else{
                                                    return (
                                                        <div>{value.message}</div>
                                                    );
                                                }
                                            })}
                                        </div>
                                    ):(
                                        ""
                                    )}
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    :
                    ""}
                    {!this.props.showDemoInterface ? 
                    <button
                        onClick={() => this.handleNext()}
                        className={styles.nextButton}
                        style={{
                            fontSize: "x-large",
                            cursor: "pointer",
                            padding: "10px",
                            position: "relative",
                            left: "90%",
                            margin: "10px",
                            display: "inline"
                        }}
                    >
                        Next
                    </button> : ""}
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
                        <WebsiteEventListener
                            handleEmbeddedWebsiteEvent={(e) => this.handleEmbeddedWebsiteEvent(e)}
                        >
                            {/* <ChipotleClone
                                triggerWebsiteReload={this.state.triggerWebsiteReload}
                            /> */}
                            {/* <OscarsClone
                                triggerWebsiteReload={this.state.triggerWebsiteReload}
                            /> */}
                            {/* <MLBClone
                                triggerWebsiteReload={this.state.triggerWebsiteReload}
                            /> */}
                            {/* <ForbesClone
                                triggerWebsiteReload={this.state.triggerWebsiteReload}
                            /> */}
                            {/* <WikipediaClone
                                triggerWebsiteReload={this.state.triggerWebsiteReload}
                            /> */}
                            {/* <CSEFacultyClone
                                triggerWebsiteReload={this.state.triggerWebsiteReload}
                            /> */}
                            {/* <SteveWebsiteClone
                                triggerWebsiteReload={this.state.triggerWebsiteReload}
                            /> */}
                            {/* <IMDBClone
                                websiteHTML={this.props.websiteHTML}
                                triggerWebsiteReload={this.state.triggerWebsiteReload}
                            /> */}
                            <Clone
                                websiteHTML={this.props.websiteHTML}
                                triggerWebsiteReload={this.state.triggerWebsiteReload}
                            />
                        </WebsiteEventListener>
                        {this.state.websiteSelectedTextObject ?
                            <button
                                style={
                                    {
                                        position: 'absolute',
                                        left: this.state.websiteSelectedTextObject.x,
                                        top: this.state.websiteSelectedTextObject.y,
                                        backgroundColor: "lightblue",
                                        fontSize: "medium",
                                        cursor: "pointer",
                                        zIndex: 10
                                    }
                                }
                                onClick={()=>this.handleExtractText()}
                            >
                                Extract
                            </button>
                        : 
                            ""
                        }
                    </div>
                </div>
                {/* {!this.props.viewOnlyMode ? (
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
                ) } */}
                {!this.props.viewOnlyMode && this.props.showDemoInterface ? (
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