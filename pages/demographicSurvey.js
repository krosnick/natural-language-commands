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

    return (
        <div>
            <div>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScSORDPbl3wbBTzrEeyygPMpatnIpsG33mGLQal8G_HBwtC8g/viewform?embedded=true"
                    width="640"
                    height="879"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    id="demographicSurvey"
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