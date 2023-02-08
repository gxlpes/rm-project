import { NextApiRequest, NextApiResponse } from "next";
import { hashPassword } from "../../src/lib/auh";
import { connectToDatabase } from "../../src/lib/db";
import { UserCredentials } from "../../src/types/api/backend/User";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Only POST requests are allowed" });

  try {
    const client = await connectToDatabase("users");
    const db = client.db();
    const { characterId, email } = req.body;

    const userAlreadySavedCharacters = await db.collection("characters").findOne({ email: email });

    console.log(userAlreadySavedCharacters);

    if (!userAlreadySavedCharacters) {
      db.collection("characters").insertOne({ characterId, email });
      console.log("heuehue");
    } else {
      db.collection("characters").updateOne({ email: email }, { $push: { characterId: [characterId] } });
    }

    return res.status(201).json({ message: "Inserted characters" });
    client.close();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}

export default handler;
