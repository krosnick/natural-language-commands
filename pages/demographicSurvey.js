import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../components/styles.module.css';

export default function DemographicSurvey() {
    const router = useRouter();
    const { clientID } = router.query;

    const [participantID, updateParticipantID] = useState("");

    function goToTask(clientID){
        
        if(participantID === "" || participantID === null){
            window.alert("Fill in participant ID");
            updateParticipantID(null); // using null as signifier that participantID is not filled in (UI shows red error border)
            window.scroll(0, 0); // scroll to top of page for user to see blank participant ID field
        }else{
            // Use router to navigate to next page
            router.push({
                pathname: '/task',
                query: { clientID: clientID },
            });
        }
    }

    function iframeLoaded(scrollHeight) {
        const iframeElement = document.querySelector('iframe');
        if(iframeElement) {
              // here you can make the height, I delete it first, then I make it again
              iframeElement.height = "";
              iframeElement.height = (scrollHeight + 100) + "px";
        }   
    }

    function handleParticipantIDUpdate(e){
        if(e.target.value === ""){
            updateParticipantID(null); // using null as signifier that participantID is not filled in (UI shows red error border)
        }else{
            updateParticipantID(e.target.value);
        }
    }

    return (
        <div>
            <div>
                <label htmlFor="participantIDField">Participant ID: </label>
                <input
                    type="text"
                    id="participantIDField"
                    value={participantID}
                    onChange={(e) => handleParticipantIDUpdate(e)}
                    className={participantID === null ? styles.incompleteForm : "" }
                >
                </input>
            </div>
            <div>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScSORDPbl3wbBTzrEeyygPMpatnIpsG33mGLQal8G_HBwtC8g/viewform?embedded=true"
                    //width="640"
                    width="100%"
                    height="879"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    id="demographicSurvey"
                    onLoad={() => iframeLoaded(document.body.scrollHeight)}
                >
                    Loading…
                </iframe>
            </div>
            <button
                onClick={() => goToTask(clientID)}
                className={styles.nextButton}
            >
                Next
            </button>
        </div>
    );
}