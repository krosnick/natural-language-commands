import { useRouter } from 'next/router';
//import { useState } from 'react';
import styles from '../components/styles.module.css';

export default function DemographicSurvey() {
    const router = useRouter();
    const { clientID, sequenceID } = router.query;

    //const [participantID, updateParticipantID] = useState("");

    let iframeLoadedCount = 0;
    const pageLoadedTime = Date.now();

    function goToTask(clientID){
        //console.log("iframeLoadedCount", iframeLoadedCount);
        /*if(participantID === "" || participantID === null){
            window.alert("Fill in participant ID");
            updateParticipantID(null); // using null as signifier that participantID is not filled in (UI shows red error border)
            window.scroll(0, 0); // scroll to top of page for user to see blank participant ID field
        }else*/ if(iframeLoadedCount < 1){
            // Check that the user has submitted the Google form
            // Use iframeLoadedCount as a proxy
            window.alert("Please fill out and submit the Google form first.");
        }else{
            // Use router to navigate to next page
            router.push({
                pathname: '/sequence/[sequenceID]/[taskIndex]',
                query: {
                    sequenceID: sequenceID,
                    taskIndex: 0,
                    clientID: clientID/*,
                    participantID: participantID*/
                },
            });
        }
    }

    function iframeLoaded(scrollHeight) { 
        //console.log("iframeLoaded");
        const iframeElement = document.querySelector('iframe');
        if(iframeElement){
            if(Date.now() - pageLoadedTime < 2000){
                // Initial load
                /*// Adjust height so no scrolling within iframe
                iframeElement.height = "";
                //iframeElement.height = (scrollHeight + 25) + "px";
                iframeElement.height = (scrollHeight) + "px";*/
            }else{
                // A later load, e.g., Google form submitted
                iframeLoadedCount += 1;
                //console.log("iframeLoadedCount += 1");
            }
        }
    }

    /*function handleParticipantIDUpdate(e){
        if(e.target.value === ""){
            updateParticipantID(null); // using null as signifier that participantID is not filled in (UI shows red error border)
        }else{
            updateParticipantID(e.target.value);
        }
    }*/

    return (
        <div>
            <div>
                <p
                    className={styles.textInstructions}
                >Your participant ID is: <b>{clientID}</b></p>
                {/* <p
                    className={styles.textInstructions}
                >Please enter your participant ID:</p>
                <input
                    type="text"
                    id="participantIDField"
                    value={participantID}
                    onChange={(e) => handleParticipantIDUpdate(e)}
                    className={participantID === null ? styles.incompleteForm : "" }
                >
                </input> */}
            </div>
            <p
                className={styles.textInstructions}
            >Fill out and submit this Google form, then press the “Next” button:</p>
            <button
                onClick={() => goToTask(clientID)}
                className={styles.nextButton}
            >
                Next
            </button>
            <div>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScSORDPbl3wbBTzrEeyygPMpatnIpsG33mGLQal8G_HBwtC8g/viewform?embedded=true"
                    //width="640"
                    width="100%"
                    height="574"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    id="demographicSurvey"
                    onLoad={() => iframeLoaded(document.body.scrollHeight)}
                >
                    Loading…
                </iframe>
            </div>
        </div>
    );
}