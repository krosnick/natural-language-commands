import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';

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

    return (
        <div>
            <div>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSf2F_NEL2Q8d-mIJqXvCFZA8LP4VHjDx34P6ZSGyzXbqaOJcQ/viewform?embedded=true"
                    width="640"
                    height="574"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    id="consentForm"
                >
                    Loading…
                </iframe>
            </div>
            <button
                onClick={() => goToDemographicSurvey(clientID)}
            >
                Next
            </button>
        </div>
    )
}