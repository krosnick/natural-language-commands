import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    await db
        .collection("test")
        .insertOne({
            name: "test",
            time: Date.now()
        });
    
    //res.status(200).json({ name: 'John Doe' })
    res.status(200).send("Done");

    /*const movies = await db
        .collection("movies")
        .find({})
        .sort({ metacritic: -1 })
        .limit(1000)
        .toArray();
    
    //res.status(200).json({ name: 'John Doe' })
    res.status(200).json({ movies: movies })*/
}  