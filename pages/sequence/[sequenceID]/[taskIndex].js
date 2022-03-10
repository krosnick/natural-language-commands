import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { connectToDatabase } from '../../../util/mongodb';
import styles from '../../../components/styles.module.css';
import { ObjectId } from 'mongodb';
const NaturalLanguage = dynamic(
    () => import('../../../components/NaturalLanguage'),
    { ssr: false }
);
import Tutorial from '../../../components/Tutorial';

export default function Task( { text, /*websiteUrl,*/ websiteHTML, sequenceID, taskIndex, name, taskListLength }) {
    
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

    try{
        router.events.on('routeChangeComplete', (url, { shallow }) => {
            /*console.log(
              `App is changing to ${url} ${
                shallow ? 'with' : 'without'
              } shallow routing`
            )*/
            //console.log("url", url);
            // If on task page and not first task, fix scroll position to scroll to top of NL task
            if(url.includes("/sequence/") && taskIndex > 0){
                showNLTask();
            }
        });
    }catch(error){
        //console.log("router.events error caught");
    }

    function showNLTask(){
        updateFinishedVideoStatus(true);
        
        // Scroll to the task area; using setTimeout might be a bit hacky
        setTimeout(function(){
            const taskAreaTop = document.querySelector("#taskArea").getBoundingClientRect().top;
            window.scroll({
                top: taskAreaTop + window.scrollY,
                left: 0,
                behavior: "smooth"
            });
        }, 1000); // waiting 100ms to ensure #taskArea element is already rendered
    }

    async function writeToDBAndDirectToNextPage(dataObj){
        // Augment dataObj with task metadata
        dataObj.sequenceID = sequenceID;
        dataObj.taskIndex = taskIndex;
        dataObj.clientID = clientID;
        //dataObj.participantID = participantID;

        // Save data to db
        await fetch('/api/new', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataObj)
        });

        // Determine if this is the last task in the sequence or not, and based on that decide if we go to "finished" page or to next task page
        if(taskIndex === taskListLength-1){
            // This is the last task. After user submits their answers, show "finished" view
            router.push({
                pathname: '/finished',
                query: {
                    clientID: clientID
                },
            });
        }else{
            // Not the last task, so let's direct to the next task
            router.push({
                pathname: '/sequence/[sequenceID]/[taskIndex]',
                query: {
                    sequenceID: sequenceID, // sequenceID is the same
                    taskIndex: (taskIndex + 1), // next task
                    clientID: clientID/*,
                    participantID: participantID*/
                },
            }, undefined, { shallow: false });
        }
    }

    return (
        <div>
            <div
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
                            //text="What is the name of the most rich person in the United States?"
                            //text="What is the name of the youngest billionaire in the United States?"
                            //text="What is the lowest rank billionaire in the United States?"
                            //text="What is the name of the lowest rank billionaire in the United States?"
                            // websiteUrl={websiteUrl}
                            websiteHTML={websiteHTML}
                            textEditable={false}
                            groupingSupported={false}
                            clientID={clientID}
                            //participantID={participantID}
                            submitText={taskIndex + 1 < taskListLength ? "Submit and go to next task" : "Submit and finish"}
                            writeToDBAndDirectToNextPage={(dataObj) => writeToDBAndDirectToNextPage(dataObj)}
                            key={router.asPath}
                        />
                        {/* <NaturalLanguage
                            text="Which MLB player had the most home runs this year?"
                            websiteUrl="https://www.mlb.com/stats/"
                            textEditable={false}
                            groupingSupported={false}
                            clientID={clientID}
                            participantID={participantID}
                        /> */}
                        {/* <NaturalLanguage
                            text="Book a flight from Detroit to Boston on November 20"
                            websiteUrl="https://www.spirit.com/"
                            textEditable={false}
                            groupingSupported={false}
                            clientID={clientID}
                            participantID={participantID}
                        /> */}
                        {/* <NaturalLanguage
                            text="Order a chicken burrito bowl with black beans, white rice, sour cream, green salsa, and red salsa from Chipotle. Place the order now and for pickup."
                            websiteUrl="https://www.chipotle.com/order"
                            textEditable={false}
                            groupingSupported={false}
                            clientID={clientID}
                            participantID={participantID}
                        /> */}
                        {/* <NaturalLanguage
                            text="Schedule pick-up for a dozen chocolate ganache cupcakes from Georgetown Cupcake tomorrow"
                            websiteUrl="https://www.georgetowncupcake.com/OrderType.aspx"
                            textEditable={false}
                            groupingSupported={false}
                            clientID={clientID}
                            participantID={participantID}
                        /> */}
                        
                        
                        
                        
                        
                        {/* <NaturalLanguage
                            text="Order one scoop of coffee ice cream from Blank Slate"
                            websiteUrl="https://blank-slate-creamery.square.site/"
                            textEditable={false}
                            groupingSupported={false}
                            clientID={clientID}
                            participantID={participantID}
                        /> */}
                        {/* <NaturalLanguage
                            text="Order a little cheeseburger from Five Guys with mayo, lettuce, and grilled onions"
                            websiteUrl="https://order.fiveguys.com/"
                            textEditable={false}
                            groupingSupported={false}
                            clientID={clientID}
                            participantID={participantID}
                        /> */}
                        {/* <NaturalLanguage
                            text="What movie won Best Picture at the Oscars in 2011?"
                            websiteUrl="https://www.oscars.org/oscars/ceremonies/2021"
                            textEditable={false}
                            groupingSupported={false}
                            clientID={clientID}
                            participantID={participantID}
                        /> */}
                    </div>
                ) : (
                    ""
                )
            }
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
        const taskName = taskList[taskIndex];
        const taskListLength = taskList.length;

        const taskCursor = await db
                        .collection("tasks")
                        .find({name: taskName});

        const taskObject = await taskCursor.next();
        const text = taskObject.text;
        //const websiteUrl = taskObject.websiteUrl;
        const websiteHTML = taskObject.websiteHTML;
        
        // Pass data to the page via props
        return {
            props: {
                text, 
                //websiteUrl,
                websiteHTML,
                sequenceID,
                taskIndex,
                name: taskName,
                taskListLength
            }
        }
    }catch(error){
        return { notFound: true };
    }
}