import { NextApiRequest, NextApiResponse } from "next";
import { verifyPassword } from "../../src/lib/auh";
import { connectToDatabase } from "../../src/lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const data = req.body;
        const { email, password } = data;
        console.log("email", email)

        const client = await connectToDatabase();
        const db = client.db();
        const existingUser = await db.collection("data").findOne({ email: email });
        console.log(existingUser!.password)

        if (existingUser) {
            const isValid = await verifyPassword(password, existingUser!.password);
            console.log(isValid)
        }

        let token = "1"

        return res.json({
            user: {
                email: "a",
                password: "b"
            },
            token
        })

    }
}

export default handler;