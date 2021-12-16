import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { connectToDatabase } from '../../../util/mongodb';
import styles from '../../../components/styles.module.css';
import { ObjectId } from 'mongodb';
const NaturalLanguage = dynamic(
    () => import('../../../components/NaturalLanguage'),
    { ssr: false }
)

export default function Task( { text, websiteUrl, sequenceID, taskIndex, name, taskListLength }) {
    const router = useRouter();
    const { clientID, participantID } = router.query;
    
    const [userFinishedVideo, updateFinishedVideoStatus] = useState(false);

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

    function showNLTask(){
        updateFinishedVideoStatus(true);
        
        // Scroll to the task area; using setTimeout might be a bit hacky
        setTimeout(function(){
            const taskAreaTop = document.querySelector("#taskArea").getBoundingClientRect().top;
            window.scroll({
                top: taskAreaTop,
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
        dataObj.participantID = participantID;

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
            router.push("/finished");
        }else{
            // Not the last task, so let's direct to the next task
            router.push({
                pathname: '/sequence/[sequenceID]/[taskIndex]',
                query: {
                    sequenceID: sequenceID, // sequenceID is the same
                    taskIndex: (taskIndex + 1), // next task
                    clientID: clientID,
                    participantID: participantID
                },
            }, undefined, { shallow: false });
        }
    }

    return (
        <div>
            <div>
                {
                    !userFinishedVideo ? (
                        <div>
                            <p
                                className={styles.textInstructions}
                            >Watch this tutorial video to learn how to use the text tagging interface, then press the “Next” button:</p>
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
                <iframe
                    /* width="560"
                    height="315" */
                    width="1200"
                    height="675"
                    src="https://www.youtube.com/embed/jYjzl2gYlkQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    id="demoVideo"
                ></iframe>
            </div>
            {
                userFinishedVideo ? (
                    <div
                        id="taskArea"
                    >
                        <p
                            className={styles.textInstructions}
                        ><b>Instructions:</b> Below is a command that someone might give to their virtual assistant (e.g., Siri). As demonstrated in the tutorial video, highlight chunks of text that can be “generalized”, and for each one fill out the associated form. To determine what text can be “generalized”, look at the website to understand what commands and values are possible.</p>
                        <NaturalLanguage
                            name={name}
                            text={text}
                            websiteUrl={websiteUrl}
                            textEditable={false}
                            groupingSupported={false}
                            clientID={clientID}
                            participantID={participantID}
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
        const websiteUrl = taskObject.websiteUrl;
        
        // Pass data to the page via props
        return {
            props: {
                text, 
                websiteUrl,
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