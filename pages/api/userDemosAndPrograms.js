import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req, res) {
    const body = req.body;

    const { db } = await connectToDatabase();
    await db
        .collection("userDemosAndPrograms")
        .insertOne(body);
    
    res.status(200).send("Done");
}  