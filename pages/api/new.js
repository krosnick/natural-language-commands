import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req, res) {
    const body = req.body;

    const { db } = await connectToDatabase();
    await db
        .collection("annotationData")
        .insertOne({
            idToItem: body.idToItem,
            clientID: body.clientID,
            userFeedback: body.userFeedback,
            time: Date.now()
        });
    
    res.status(200).send("Done");
}  