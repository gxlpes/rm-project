import { MongoClient } from "mongodb";

export async function connectToDatabase(db: string) {
    return MongoClient.connect(
        `mongodb+srv://guilhermxlopes:${process.env.MONGO_PASSWORD}@cluster0.fnk9jrh.mongodb.net/${db}?retryWrites=true&w=majority`
    )
}