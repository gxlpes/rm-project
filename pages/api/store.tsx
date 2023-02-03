import { NextApiRequest, NextApiResponse } from "next";
import { hashPassword } from "../../src/lib/auh";
import { connectToDatabase } from "../../src/lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const data = req.body;
        console.log(data);

        const client = await connectToDatabase("users");
        const db = client.db();

        db.collection("store").insertOne({
            data: data,
        });

        res.status(201).json({ message: "Inserted!" });
    }
}

export default handler;