import { NextApiRequest, NextApiResponse } from "next";
import { hashPassword } from "../../src/lib/auh";
import { connectToDatabase } from "../../src/lib/db";
import { UserCredentials } from "../../src/types/api/backend/User";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await connectToDatabase("users");
  const db = client.db();
  const charactersCollection = db.collection("characters");
  const { characterId, email } = req.body;
  const { token } = req.query;

  console.log(token);

  switch (req.method) {
    case "POST": {
      try {
        charactersCollection.findOneAndUpdate(
          { email },
          { $addToSet: { characters: characterId } },
          {
            upsert: true,
            returnDocument: "after",
          }
        );

        client.close();
        return res.status(201).json({ message: "Inserted characters" });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
      }
    }
    case "GET": {
      const test = charactersCollection.findOne({ email: email });
      return res.status(200).json({ test });
    }
  }
}

export default handler;
