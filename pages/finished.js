import { useRouter } from 'next/router';

export default function Finished() {
    const router = useRouter();
    const { clientID } = router.query;
    return (
        <p>
            Finished. If you accessed this task via Mechanical Turk, please enter <b>{clientID}</b> as the final code. 
        </p>
    )
}