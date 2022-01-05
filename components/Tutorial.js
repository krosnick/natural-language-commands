import React from 'react';
import Image from 'next/image';
import _ from 'lodash';
import styles from './Tutorial.module.css';

function ImageTutorialStep(props){
    return (
        <div
            className={styles.tutorialStep}
        >
            <p>{props.text}</p>
            <Image
                src={props.src}
                width={props.width}
                height={props.height}
            />

        </div>
    );
}

function VideoTutorialStep(props){
    return (
        <div
            className={styles.tutorialStep}
        >
            <p><b>Step {props.stepNumber}:</b> {props.text}</p>
            <iframe
                width="1200"
                height="675"
                // src={`https://www.youtube.com/embed/${props.videoID}?playlist=${props.videoID}&autoplay=1&loop=1&controls=0&modestbranding=1`}
                src={`https://www.youtube.com/embed/${props.videoID}?playlist=${props.videoID}&autoplay=1&loop=1&modestbranding=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className='demoVideo'
            ></iframe>
        </div>
    );
}

export default function Tutorial(props){

    const stepData = [
        {
            text: `The first step to generalizing this command is to notice that "Zingerman's Reuben" is a particular sandwich, one of many offered on the Zingerman's website. We can highlight the text "Zingerman's Reuben" and then type "sandwich" to use as the generalized term.`,
            videoID: "lhXOoYb9WNs"
        },
        {
            text: `Next, we select the type of value "sandwich" is from the dropdown menu -- here, "something user selects from a list" (because there is a pre-determined set of sandwiches on the website).`,
            videoID: "acZfudXdFFk"
        },
        {
            text: `Next, we give examples of sandwiches listed on the website. "Zingerman's Reuben" is already pre-populated, and we also add "Tarb's Tenacious Tenure" and "Georgia Reuben".`,
            videoID: "eRZh6bWgyec"
        },
        {
            text: `Now, we follow the same process to create a generalized "pickle" term and enter the 2 possible pickle types: "crunchy, cucumbery NEW" and "traditional, garlic-cured OLD".`,
            videoID: "o5aGoAk7lfk"
        },
        {
            text: `We now fill out more details in the form for the "pickle" term. The Zingerman's website indicates that the customer can actually opt for "both pickles"; therefore, in our form, we answer that the user can choose "1 or more" values. The Zingerman's website also indicates that the customer can opt for "no pickle"; therefore, in our form, we answer "yes, this value is optional".`,
            videoID: "GUD_nBC8b-8"
        },
        {
            text: `The Zingerman's website allows the customer to optionally choose sides for their sandwich. One kind of side is "chips", but "chips" wasn't included in the original text command. Here, we click the "Add item" button to add a new term named "chips".`,
            videoID: "t3hLfzqO8Rg"
        }
    ];

    const stepItems = stepData.map((stepDatum, i) => {
        return (
            <VideoTutorialStep
                stepNumber={i + 1}
                text={stepDatum.text}
                videoID={stepDatum.videoID}
            />
        );
    });

    return (
        <span>
            <div
                className={styles.tutorialStep}
                >
                <p>You will be presented with {props.taskListLength} tasks. In each task, you will see a command that someone might give to their virtual assistant (e.g., Siri) and a corresponding website. Your goal is to help identify what commands and values are possible in the context of the website. You will do this by <b>using a text annotation interface to highlight chunks of text that can be "generalized", and for each chunk filling out the associated form.</b></p>
                <p><b>Here we provide a tutorial that shows how to use the text annotation interface:</b></p>
            </div>
            <ImageTutorialStep
                //text={`A command to perform in the context of the Zingerman's website (https://order.snackpass.co/Zingermans-Delicatessen-5ca639cc3184f900e25012dc?utm_source=Deli_Front_Page&utm_medium=Sandwiches_Box&utm_campaign=Zingermans_Snackpass).`}
                text={`This is the command we'll work with, in the context of the Zingerman's website:`}
                src={"/images/0_initial_nl.png"}
                width={2380}
                height={122}
            />
            {stepItems}
            <ImageTutorialStep
                text={`The final result.`}
                src={"/images/7_final_result.png"}
                width={3212}
                height={794}
            />
        </span>
    );
}