import { useRouter } from 'next/router';
import styles from '../components/styles.module.css';

export default function DemographicSurvey() {
    const router = useRouter();
    const { clientID } = router.query;

    function goToTask(clientID){
        
        // Use router to navigate to next page
        router.push({
            pathname: '/task',
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