import { NextApiRequest, NextApiResponse } from "next";
import { hashPassword } from "../../src/lib/auh";
import { connectToDatabase } from "../../src/lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const data = req.body;
        const { email, password } = data;

        if (!email || !email.includes("@" || !password || password.trim().length < 7)) {
            res.status(422).json({ message: "Invalid input or password!" });
            return;
        }

        const client = await connectToDatabase();
        const db = client.db();
        const existingUser = await db.collection("data").findOne({ email: email });

        if (existingUser) {
            res.status(422).json({ message: "User exists already" });
            client.close();
            return;
        }

        const hashedPassword = await hashPassword(password);

        db.collection("data").insertOne({
            email: email,
            password: hashedPassword,
        });

        res.status(201).json({ message: "Created user!" });
    }
}

export default handler;