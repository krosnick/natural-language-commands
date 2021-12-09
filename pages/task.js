import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import styles from '../components/styles.module.css';
const NaturalLanguage = dynamic(
    () => import('../components/NaturalLanguage'),
    { ssr: false }
)

export default function Task() {
    const router = useRouter();
    const { clientID } = router.query;
    
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
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                id="demoVideo"
            ></iframe>
            {
                userFinishedVideo ? (
                    <div
                        id="taskArea"
                    >
                        {/* <NaturalLanguage
                            text="Which MLB player had the most home runs this year?"
                            websiteUrl="https://www.mlb.com/stats/"
                            textEditable={false}
                            clientID={clientID}
                        /> */}
                        {/* <NaturalLanguage
                            text="Book a flight from Detroit to Boston on November 20"
                            websiteUrl="https://www.spirit.com/"
                            textEditable={false}
                            clientID={clientID}
                        /> */}
                        <NaturalLanguage
                            text="Order a chicken burrito bowl with black beans, white rice, sour cream, green salsa, and red salsa from Chipotle. Place the order now and for pickup."
                            websiteUrl="https://www.chipotle.com/order"
                            textEditable={false}
                            clientID={clientID}
                        />
                        {/* <NaturalLanguage
                            text="Schedule pick-up for a dozen chocolate ganache cupcakes from Georgetown Cupcake tomorrow"
                            websiteUrl="https://www.georgetowncupcake.com/OrderType.aspx"
                            textEditable={false}
                            clientID={clientID}
                        /> */}
                        
                        
                        
                        
                        
                        {/* <NaturalLanguage
                            text="Order one scoop of coffee ice cream from Blank Slate"
                            websiteUrl="https://blank-slate-creamery.square.site/"
                            textEditable={false}
                            clientID={clientID}
                        /> */}
                        {/* <NaturalLanguage
                            text="Order a little cheeseburger from Five Guys with mayo, lettuce, and grilled onions"
                            websiteUrl="https://order.fiveguys.com/"
                            textEditable={false}
                            clientID={clientID}
                        /> */}
                        {/* <NaturalLanguage
                            text="What movie won Best Picture at the Oscars in 2011?"
                            websiteUrl="https://www.oscars.org/oscars/ceremonies/2021"
                            textEditable={false}
                            clientID={clientID}
                        /> */}
                    </div>
                ) : (
                    ""
                )
            }
            {
                !userFinishedVideo ? (
                    <button
                        onClick={() => showNLTask()}
                        className={styles.nextButton}
                    >
                        Next
                    </button>
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