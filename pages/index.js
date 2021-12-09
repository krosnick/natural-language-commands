import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import styles from '../components/styles.module.css';

export default function Home() {
  
    const router = useRouter();
    const clientID = uuidv4();
    
    function goToDemographicSurvey(clientID){
        // Use router to navigate to next page
        router.push({
            pathname: '/demographicSurvey',
            query: { clientID: clientID },
        });
    }

    function iframeLoaded(scrollHeight) {
        const iframeElement = document.querySelector('iframe');
        if(iframeElement) {
              // here you can make the height, I delete it first, then I make it again
              iframeElement.height = "";
              iframeElement.height = (scrollHeight + 100) + "px";
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