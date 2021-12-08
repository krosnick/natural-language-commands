import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    await db
        .collection("test")
        .insertOne({
            name: "test",
            time: Date.now()
        });
    
    res.status(200).send("Done");
}  