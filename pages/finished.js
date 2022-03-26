import { useRouter } from 'next/router';

export default function Finished() {
    const router = useRouter();
    const { clientID } = router.query;
    return (
        <>
            <p>
                Finished. Please fill out this Google form and use <b>{clientID}</b> as the client ID.
            </p>
            <div>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSccLdCJOBEqoOwokVe03_WlDOED8b3POZWS5SDyvEi7YEl2fQ/viewform?embedded=true"
                    //width="640"
                    width="100%"
                    height="574"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    id="demographicSurvey"
                    //onLoad={() => iframeLoaded(document.body.scrollHeight)}
                >
                    Loading…
                </iframe>
            </div>
        </>
    )
}