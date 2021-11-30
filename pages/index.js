import dynamic from 'next/dynamic'
const NaturalLanguage = dynamic(
    () => import('../components/NaturalLanguage'),
    { ssr: false }
)
//import NaturalLanguage from '../components/NaturalLanguage';

export default function Home() {
  return (
    <div>
        {/* <NaturalLanguage
            text="Which MLB player had the most home runs this year?"
            websiteUrl="https://www.mlb.com/stats/"
        /> */}
        {/* <NaturalLanguage
            text="Book a flight from Detroit to Boston on November 20"
            websiteUrl="https://www.spirit.com/"
        /> */}
        <NaturalLanguage
            text="Order a chicken burrito bowl with black beans, white rice, sour cream, green salsa, and red salsa from Chipotle. Place the order now and for delivery."
            websiteUrl="https://www.chipotle.com/order"
        />
        {/* <NaturalLanguage
            text="Schedule pick-up for a dozen chocolate ganache cupcakes from Georgetown Cupcake tomorrow"
            websiteUrl="https://www.georgetowncupcake.com/OrderType.aspx"
        /> */}
        
        
        
        
        
        {/* <NaturalLanguage
            text="Order one scoop of coffee ice cream from Blank Slate"
            websiteUrl="https://blank-slate-creamery.square.site/"
        /> */}
        {/* <NaturalLanguage
            text="Order a little cheeseburger from Five Guys with mayo, lettuce, and grilled onions"
            websiteUrl="https://order.fiveguys.com/"
        /> */}
        {/* <NaturalLanguage
            text="What movie won Best Picture at the Oscars in 2011?"
            websiteUrl="https://www.oscars.org/oscars/ceremonies/2021"
        /> */}
        <style jsx global>{`
            body {
                margin: 30px;
            }
            
            ol, ul {
                padding-left: 30px;
            }
            
            :root {
                --item-padding: 20px;
            }
        `}</style>
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