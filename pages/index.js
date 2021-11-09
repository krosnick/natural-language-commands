import dynamic from 'next/dynamic'
const NaturalLanguage = dynamic(
    () => import('../components/NaturalLanguage'),
    { ssr: false }
)
//import NaturalLanguage from '../components/NaturalLanguage';

export default function Home() {
  return (
    <div>
        <NaturalLanguage text="Which MLB player had the most home runs this year?"/>
        {/* <NaturalLanguage text="Book a flight from Detroit to Boston on November 20"/> */}
        {/* <NaturalLanguage text="Order a chicken burrito bowl with black beans, white rice, cheese, and green salsa from Chipotle. Place the order now and for delivery."/> */}
        {/* <NaturalLanguage text="Schedule pick-up for a dozen chocolate ganache cupcakes from Georgetown Cupcake tomorrow"/> */}
        
        
        
        
        {/*
        <NaturalLanguage text="Which MLB player had the most home runs this year?"/>
        <NaturalLanguage text="Order one scoop of coffee ice cream from Blank Slate"/>
        <NaturalLanguage text="Order a little cheeseburger from Five Guys with mayo, lettuce, and grilled onions"/>
        <NaturalLanguage text="What movie won Best Picture at the Oscars in 2011?"/> */}
        <style jsx global>{`
            body {
                margin: 100px;
            }
            
            ol, ul {
                padding-left: 30px;
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