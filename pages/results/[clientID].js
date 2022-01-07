import { connectToDatabase } from '../../util/mongodb';
import dynamic from 'next/dynamic';
const NaturalLanguage = dynamic(
    () => import('../../components/NaturalLanguage'),
    { ssr: false }
);;

export default function Results( { resultList }) {
    console.log("resultList", resultList);

    const resultItems = resultList.map((resultObj, i) => {
        return (
            <div>
                <p>Name: {resultObj.name}</p>
                <p>Task index: {resultObj.taskIndex}</p>
                <p>Feedback: {resultObj.userFeedback}</p>
                <NaturalLanguage
                    idToItem={resultObj.idToItem}
                    /*name={name}
                    text={text}
                    websiteUrl={websiteUrl}
                    textEditable={false}
                    groupingSupported={false}
                    clientID={clientID}
                    //participantID={participantID}
                    submitText={taskIndex + 1 < taskListLength ? "Submit and go to next task" : "Submit and finish"}
                    writeToDBAndDirectToNextPage={(dataObj) => writeToDBAndDirectToNextPage(dataObj)}
                    key={router.asPath}*/
                />
            </div>
        );
    });

    return (
        <div>
            <p>Results page</p>
            {resultItems}
        </div>
    );
}

export async function getServerSideProps({params}) {
    console.log("getServerSideProps");
    const clientID = params.clientID;
    console.log("clientID", clientID);

    try{
        // Get all annotationData results with given clientID
        // For each entry, get: name, idToItem, userFeedback, taskIndex
        const { db } = await connectToDatabase();
        const annotationDataCursor = await db
                            .collection("annotationData")
                            .find({clientID: clientID});
        
        const resultList = [];

        while(await annotationDataCursor.hasNext()){
            console.log("hasNext");
            const annotationDataObject = await annotationDataCursor.next();
            resultList.push({
                name: annotationDataObject.name,
                idToItem: annotationDataObject.idToItem,
                userFeedback: annotationDataObject.userFeedback,
                taskIndex: annotationDataObject.taskIndex
            });
        }

        // Pass data to the page via props
        return {
            props: {
                resultList
            }
        }

    }catch(error){
        return { notFound: true };
    }
}