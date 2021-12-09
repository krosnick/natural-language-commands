import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import styles from '../components/styles.module.css';

export default function Home() {
  
    const router = useRouter();
    const clientID = uuidv4();

    let iframeLoadedCount = 0;
    const pageLoadedTime = Date.now();
    
    function goToDemographicSurvey(clientID){
        //console.log("iframeLoadedCount", iframeLoadedCount);
        // First check that the user has submitted the Google form
            // Use iframeLoadedCount as a proxy
        if(iframeLoadedCount < 1){
            window.alert("Please fill out and submit the Google form first.");
        }else{
            // Use router to navigate to next page
            router.push({
                pathname: '/demographicSurvey',
                query: { clientID: clientID },
            });
        }
    }

    function iframeLoaded(scrollHeight) { 
        //console.log("iframeLoaded");
        const iframeElement = document.querySelector('iframe');
        if(iframeElement){
            if(Date.now() - pageLoadedTime < 2000){
                // Initial load
                // Adjust height so no scrolling within iframe
                iframeElement.height = "";
                iframeElement.height = (scrollHeight + 100) + "px";
            }else{
                // A later load, e.g., Google form submitted
                iframeLoadedCount += 1;
                //console.log("iframeLoadedCount += 1");
            }
        }
    }

    return (
        <div>
            <div>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSf2F_NEL2Q8d-mIJqXvCFZA8LP4VHjDx34P6ZSGyzXbqaOJcQ/viewform?embedded=true"
                    //width="640"
                    width="100%"
                    height="574"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    id="consentForm"
                    onLoad={() => iframeLoaded(document.body.scrollHeight)}
                >
                    Loading…
                </iframe>
            </div>
            <button
                onClick={() => goToDemographicSurvey(clientID)}
                className={styles.nextButton}
            >
                Next
            </button>
        </div>
    )
}