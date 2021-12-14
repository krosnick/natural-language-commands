import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { connectToDatabase } from '../../util/mongodb';
import styles from '../../components/styles.module.css';
const NaturalLanguage = dynamic(
    () => import('../../components/NaturalLanguage'),
    { ssr: false }
)

export default function Task( { text, websiteUrl }) {
    const router = useRouter();
    const { clientID, participantID } = router.query;
    
    const [userFinishedVideo, updateFinishedVideoStatus] = useState(false);

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
        }, 100); // waiting 100ms to ensure #taskArea element is already rendered
    }

    return (
        <div>
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
            {
                userFinishedVideo ? (
                    <div
                        id="taskArea"
                    >
                        <NaturalLanguage
                            text={text}
                            websiteUrl={websiteUrl}
                            textEditable={false}
                            groupingSupported={false}
                            clientID={clientID}
                            participantID={participantID}
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
            {
                !userFinishedVideo ? (
                    <div>
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
    
    const { db } = await connectToDatabase();
    const cursor = await db
                        .collection("tasks")
                        .find({name: params.name});
    
    const taskObject = await cursor.next();
    
    try{
        const text = taskObject.text;
        const websiteUrl = taskObject.websiteUrl;
        
        // Pass data to the page via props
        return { props: { text,  websiteUrl } }
    }catch(error){
        return { notFound: true };
    }
}