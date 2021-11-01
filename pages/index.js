import Head from 'next/head';
import Game from '../components/Game';
import NaturalLanguage from '../components/NaturalLanguage';

export default function Home() {
  return (
    <div>
        {/* <Game /> */}
        {/* <div onMouseUp={createParam} onDoubleClick={createParam}>
            Which MLB player had the most home runs this year?
        </div> */}
        <NaturalLanguage text="Which MLB player had the most home runs this year?"/>
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