import { v4 as uuidv4 } from 'uuid';
import dynamic from 'next/dynamic'
const NaturalLanguage = dynamic(
    () => import('../components/NaturalLanguage'),
    { ssr: false }
)
//import NaturalLanguage from '../components/NaturalLanguage';

export default function Home() {
  
    const clientID = uuidv4();
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
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jYjzl2gYlkQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                id="demoVideo"
            ></iframe>
            <div>
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
        </div>
    )
}

/*function createParam(){
    //console.log("createParam called");

    // Get currently selected text
    const selectionObj = window.getSelection();
    const selectedText = selectionObj.toString();

    // Ignore if single cursor click (i.e., no text selected)
    if(selectedText.length > 0){
        console.log("selectionObj", selectionObj);
        console.log("selectedText", selectedText);

        // Create a param from this text
        // Will involves modifying the html in some way
    }
}*/