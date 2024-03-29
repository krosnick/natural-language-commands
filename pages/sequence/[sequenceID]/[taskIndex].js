import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useState, useRef, createRef, useEffect } from 'react';
import { connectToDatabase } from '../../../util/mongodb';
import styles from '../../../components/styles.module.css';
import { ObjectId } from 'mongodb';
const NaturalLanguage = dynamic(
    () => import('../../../components/NaturalLanguage'),
    { ssr: false }
);
import Tutorial from '../../../components/Tutorial';
import Clone from '../../../components/website_clones/Clone';

export default function Task( { taskTextList, websiteHTMLList, idToItemList, sequenceID, taskNames, commonQuestion }) {

    console.log("process.env.NODE_ENV", process.env.NODE_ENV);
    // Only do fullstory logging if we're in production mode
    if(process.env.NODE_ENV === "production"){
        setTimeout(function(){
            window['_fs_debug'] = false;
            window['_fs_host'] = 'fullstory.com';
            window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
            window['_fs_org'] = '17QXT1';
            window['_fs_namespace'] = 'FS';
            (function(m,n,e,t,l,o,g,y){
                if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
                g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
                o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
                y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
                g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
                g.anonymize=function(){g.identify(!!0)};
                g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
                g.log = function(a,b){g("log",[a,b])};
                g.consent=function(a){g("consent",!arguments.length||a)};
                g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
                g.clearUserCookie=function(){};
                g.setVars=function(n, p){g('setVars',[n,p]);};
                g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
                if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
                g._v="1.3.0";
            })(window,document,window['_fs_namespace'],'script','user');
        }, 0);
    }
    
    const router = useRouter();
    const { clientID/*, participantID*/ } = router.query;
    
    const [userFinishedVideo, updateFinishedVideoStatus] = useState(false);
    const [userQueries, updateUserQueries] = useState(['Enter your query here', '', '', '', '']);
    const [mode, updateMode] = useState("textfieldMode");
    const [checkboxes, updateCheckboxes] = useState([false, false, false, false, false]);    
    const [queryIndicesToUse, updateQueryIndicesToUse] = useState([]);
    const [numQueriesToParameterize, updateNumQueriesToParameterize] = useState(null);
    const [currentDemoTaskIndex, updateCurrentDemoTaskIndex] = useState(0);

    try{
        router.events.on('routeChangeComplete', (url, { shallow }) => {
            /*console.log(
              `App is changing to ${url} ${
                shallow ? 'with' : 'without'
              } shallow routing`
            )*/
            //console.log("url", url);
            // If on task page and not first task, fix scroll position to scroll to top of NL task
            if(url.includes("/sequence/") && currentDemoTaskIndex > 0){
                showNLTask();
            }
        });
    }catch(error){
        //console.log("router.events error caught");
    }

    //insertIdToItem();

    function showNLTask(){
        updateFinishedVideoStatus(true);
        
        // Scroll to the task area; using setTimeout might be a bit hacky
        setTimeout(function(){
            const taskArea = document.querySelector("#taskArea");
            if(taskArea){
                const taskAreaTop = taskArea.getBoundingClientRect().top;
                window.scroll({
                    top: taskAreaTop + window.scrollY,
                    left: 0,
                    behavior: "smooth"
                });
            }
        }, 500); // waiting 500ms to ensure #taskArea element is already rendered
    }

    async function insertIdToItem(){
        /* await fetch('/api/insertIdToItem', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            //body: JSON.stringify(dataObj)
        }); */
    }

    async function moveToAnnotationMode(){
        // Save queries to db

        const dataObj = {
            sequenceID,
            currentDemoTaskIndex,
            clientID,
            userQueries
        };

        await fetch('/api/userQueries', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataObj)
        });

        // Add commonQuestion (if there is one) to user queries and checkboxes, so that it'll be used later on
        let checkboxesToUse = checkboxes;
        if(commonQuestion){
            const newUserQueries = [...userQueries];
            const newCheckboxes = [...checkboxes];

            newUserQueries.push(commonQuestion);
            newCheckboxes.push(true);

            updateUserQueries(newUserQueries);
            updateCheckboxes(newCheckboxes);

            checkboxesToUse = newCheckboxes;
        }

        // A bit of a hack, but we're going to use checkboxesToUse instead of checkboxes because 'checkboxes' won't be updated yet

        let newArr = [];
        for(let i = 0; i < checkboxesToUse.length; i++){
            if(checkboxesToUse[i]){
                newArr.push(i);
            }
        }
        updateNumQueriesToParameterize(newArr.length);

        updateQueryIndicesToUse(newArr);

        updateMode("annotationMode");
    }

    async function writeAnnotationToDB(dataObj, queryIndex){
        console.log("writeAnnotationToDB", queryIndex);
        // Augment dataObj with task metadata
        dataObj.sequenceID = sequenceID;
        dataObj.clientID = clientID;
        dataObj.queryIndex = queryIndex;
        //dataObj.participantID = participantID;
        console.log("dataObj", dataObj);
        
        // Save data to db
        await fetch('/api/userAnnotations', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataObj)
        });

        const arr = [...queryIndicesToUse];
        arr.splice(0, 1);
        console.log("new arr", arr);

        // we've reached the end
        if(arr.length === 0){
            updateMode("demoMode");
        }else{
            updateQueryIndicesToUse(arr);
        }
    }

    async function writeToDBAndDirectToNextPage(dataObj){
        // Augment dataObj with task metadata
        dataObj.sequenceID = sequenceID;
        dataObj.demoTaskIndex = currentDemoTaskIndex;
        dataObj.clientID = clientID;
        //dataObj.participantID = participantID;

        // Save data to db
        await fetch('/api/userDemosAndPrograms', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataObj)
        });

        // Determine if this is the last task in the sequence or not, and based on that decide if we go to "finished" page or to next task
        if(currentDemoTaskIndex === taskNames.length-1){
            // This is the last task. After user submits their answers, show "finished" view
            router.push({
                pathname: '/finished',
                query: {
                    clientID: clientID
                },
            });
        }else{
            // Should update to show next task NaturalLanguage
            updateCurrentDemoTaskIndex(currentDemoTaskIndex + 1);
            showNLTask();
        }
    }

    return (
        <div>
            {mode === "textfieldMode" || mode === "checkboxMode" ?
                <div>
                    <div
                        style={
                            {
                                /* height: "min-content", */
                                /* height: "300px", */
                                height: "230px",
                                width: "100%",
                                position: "fixed",
                                backgroundColor: "white",
                                borderBottom: "1px solid black",
                                /*zIndex: 2,*/
                                zIndex: 7,
                                padding: "20px"
                            }
                        }
                    >
                        <ol>
                            {userQueries.map((userQuery, i) =>
                                <li
                                    // key={`${value}_${i}`}
                                    //key={value}
                                >
                                    <>
                                        {mode === "checkboxMode" ? 
                                            <input
                                                type="checkbox"
                                                checked={checkboxes[i]}
                                                onChange={() => {let newArr = [...checkboxes]; newArr[i] = !newArr[i]; updateCheckboxes(newArr);}}
                                            >                                    
                                            </input>
                                        :""}
                                        <span></span>
                                        <input
                                            log-this-element=""
                                            style={
                                                {
                                                    fontSize: "large",
                                                    width: "90%",
                                                    position: "relative",
                                                    //left: "10%"
                                                }
                                            }
                                            type="text"
                                            value={userQuery}
                                            onChange={(e) => { let newArr = [...userQueries]; newArr[i] = e.target.value; updateUserQueries(newArr); }}
                                        >
                                        </input>
                                        {/* <button
                                            onClick={() => { let newArr = [...userQueries]; newArr.splice(i, 1); updateUserQueries(newArr); }}
                                            style={
                                                {
                                                    cursor: "pointer"
                                                }
                                            }
                                            title="Delete"
                                        >x</button> */}
                                    </>
                                </li>
                            )}
                        </ol>
                        { mode === "textfieldMode" ? 
                            <button
                                onClick={() => updateMode("checkboxMode")}
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
                            </button>
                            :""
                        }
                        { mode === "checkboxMode" ? 
                            <button
                                onClick={() => moveToAnnotationMode()}
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
                            </button>
                            :""
                        }
                        {/* <button
                            onClick={() => updateUserQueries([...userQueries, ""])}
                            style={
                                {
                                    cursor: "pointer"
                                }
                            }
                        >
                            Add another query
                        </button> */}

                    </div>
                    <div
                        style={
                            {
                                /* height: "80%", */
                                /* height: "calc(100% - 300px)", */
                                position: "absolute",
                                /* top: "20%" */
                                /* top: "300px" */
                                top: "230px"
                            }
                        }
                    >
                        <Clone
                            websiteHTML={websiteHTMLList[0]}
                        />
                    </div>
                </div>
                :
            ""}
            {mode === "annotationMode" ?
                // Show NaturalLanguage for the queries that were checked off
                <>
                    {(numQueriesToParameterize -  queryIndicesToUse.length + 1) === 1 ? 
                        // Only show tutorial video if this first query to annotate
                        <iframe
                            width="1200"
                            height="675"
                            src={`https://www.youtube.com/embed/hOrgAWrK1Rw?playlist=hOrgAWrK1Rw&modestbranding=1&loop=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className='demoVideo'
                        ></iframe>
                    :""}
                    <div>
                        Query {(numQueriesToParameterize -  queryIndicesToUse.length + 1)} of {numQueriesToParameterize}
                    </div>
                    <div>
                        Instructions:
                        <ul>
                            <li>Imagine variations of this question that you might ask in the future.</li>
                            <li>Parameterize the question to express those variations.</li>
                            <li>Do this in the context of the website, i.e., create questions that can be answered using the information on this website.</li>
                            <li>You don't have to use the same number or type of parameters as in the tutorial video. Just do whatever you think makes the most sense.</li>
                        </ul>
                    </div>
                    <NaturalLanguage
                        name={taskNames[0]}
                        text={userQueries[queryIndicesToUse[0]]}
                        websiteHTML={websiteHTMLList[0]}
                        textEditable={false}
                        groupingSupported={false}
                        clientID={clientID}
                        submitText={currentDemoTaskIndex + 1 < taskNames.length ? "Submit and go to next task" : "Submit and finish"}
                        queryIndexToAnnotate={queryIndicesToUse[0]}
                        writeAnnotationToDB = {(dataObj) => writeAnnotationToDB(dataObj, queryIndicesToUse[0])}
                        writeToDBAndDirectToNextPage={(dataObj) => writeToDBAndDirectToNextPage(dataObj)}
                        key={`${router.asPath}_${queryIndicesToUse[0]}`}
                        showDemoInterface={false}
                    />
                </>
            : ""}
            {mode === "demoMode" ?
                <>
                    {currentDemoTaskIndex === 0 ? 
                        // Only want to show tutorial video if this is the first demonstration task
                        <iframe
                            width="1200"
                            height="675"
                            src={`https://www.youtube.com/embed/DILRBln-sz8?playlist=DILRBln-sz8&modestbranding=1&loop=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className='demoVideo'
                        ></iframe>
                    : ""}
                    <div
                        id="taskArea"
                        className={styles.taskArea}
                    >
                        <NaturalLanguage
                            name={taskNames[currentDemoTaskIndex]}
                            text={taskTextList[currentDemoTaskIndex]}
                            //text="What was the rating for Nomadland?"
                            //text="What were the publications for accessibility?"
                            //text="What is the office for Ackerman?"
                            //text="What was the name of the 1st president?"
                            //text="What is the name of the most rich person in the United States?"
                            //text="What is the name of the youngest billionaire in the United States?"
                            //text="What is the lowest rank billionaire in the United States?"
                            //text="What is the name of the lowest rank billionaire in the United States?"
                            // websiteUrl={websiteUrl}
                            websiteHTML={websiteHTMLList[currentDemoTaskIndex]}
                            textEditable={false}
                            groupingSupported={false}
                            clientID={clientID}
                            submitText={currentDemoTaskIndex + 1 < taskNames.length ? "Submit and go to next task" : "Submit and finish"}
                            writeToDBAndDirectToNextPage={(dataObj) => writeToDBAndDirectToNextPage(dataObj)}
                            key={`${router.asPath}_${currentDemoTaskIndex}`}
                            showDemoInterface={true}
                            idToItem={idToItemList[currentDemoTaskIndex]}
                        />
                    </div>
                </>
            : ""}
            {/* <div
                className={styles.tutorialArea}
            >
                <Tutorial
                    taskListLength={taskListLength}
                />
                {
                    !userFinishedVideo ? (
                        <div>
                            <p
                                className={styles.textInstructions}
                            >Press the “Next” button to move on to the first task:</p>
                            <button
                                onClick={() => showNLTask()}
                                className={styles.nextButton}
                            >
                                Next
                            </button>
                        </div>
                    ) : (
                        ""
                    )
                }
            </div>
            {
                userFinishedVideo ? (
                    <div
                        id="taskArea"
                        className={styles.taskArea}
                    >
                        <p
                            className={styles.textInstructions}
                        >
                            Task {taskIndex + 1} of {taskListLength}
                        </p>
                        <br></br>
                        <p
                            className={styles.textInstructions}
                        ><b>Instructions:</b> Below is a command that someone might give to their virtual assistant (e.g., Siri). As demonstrated in the tutorial video, highlight chunks of text that can be “generalized”, and for each one fill out the associated form. To determine what text can be “generalized”, look at the website to understand what commands and values are possible.</p>
                        <NaturalLanguage
                            name={name}
                            text={text}
                            //text="What were the publications for accessibility?"
                            //text="What is the office for Ackerman?"
                            //text="What was the name of the 1st president?"
                            //text="What is the name of the most rich person in the United States?"
                            //text="What is the name of the youngest billionaire in the United States?"
                            //text="What is the lowest rank billionaire in the United States?"
                            //text="What is the name of the lowest rank billionaire in the United States?"
                            // websiteUrl={websiteUrl}
                            websiteHTML={websiteHTML}
                            textEditable={false}
                            groupingSupported={false}
                            clientID={clientID}
                            submitText={taskIndex + 1 < taskListLength ? "Submit and go to next task" : "Submit and finish"}
                            writeToDBAndDirectToNextPage={(dataObj) => writeToDBAndDirectToNextPage(dataObj)}
                            key={router.asPath}
                        />
                    </div>
                ) : (
                    ""
                )
            } */}
            <style jsx global>{`
                body {
                    margin: 0px;
                }
                
                ol, ul {
                    padding-left: 30px;
                }
                
                :root {
                    --item-padding: 20px;
                    --button-padding: 5px;
                }
            `}</style>
        </div>
    );
}

export async function getServerSideProps({params}) {
    console.log("getServerSideProps");
    const sequenceID = params.sequenceID;
    const taskIndex = parseInt(params.taskIndex);
    console.log("sequenceID", sequenceID);
    console.log("taskIndex", taskIndex);

    // First query for sequence, then from that get the task name, then query for that task
    const { db } = await connectToDatabase();
    const sequenceCursor = await db
                        .collection("sequences")
                        .find({_id: ObjectId(sequenceID)});
    
    const sequenceObject = await sequenceCursor.next();

    try{
        const taskList = sequenceObject.taskList;
        const taskNames = taskList;
        
        // Just for user study, to have a common question we ask all participants to parameterize
        const commonQuestion = sequenceObject.commonQuestion;

        const taskTextList = [];
        const websiteHTMLList = [];
        const idToItemList = [];

        for(const taskName of taskNames){
            const taskCursor = await db
                        .collection("tasks")
                        .find({name: taskName});
            
            const taskObject = await taskCursor.next();
            const text = taskObject.text;
            taskTextList.push(text);
            const websiteHTML = taskObject.websiteHTML;
            websiteHTMLList.push(websiteHTML);
            let idToItem = taskObject.idToItem;
            if(!idToItem){
                idToItem = null;
            }
            idToItemList.push(idToItem);
        }

        // Pass data to the page via props
        return {
            props: {
                taskTextList,
                websiteHTMLList,
                idToItemList,
                sequenceID,
                taskNames,
                commonQuestion
            }
        }
    }catch(error){
        return { notFound: true };
    }
}