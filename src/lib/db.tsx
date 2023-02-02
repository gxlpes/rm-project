import { MongoClient } from "mongodb";

export async function connectToDatabase() {
    const client = MongoClient.connect(
        `mongodb+srv://guilhermxlopes:${process.env.MONGO_PASSWORD}@cluster0.fnk9jrh.mongodb.net/?retryWrites=true&w=majority`
    );

    return client;
}