import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../src/lib/db";
import jwt from "jsonwebtoken";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await connectToDatabase("users");
  const db = client.db();
  const charactersCollection = db.collection("characters");
  const { characterId, email } = req.body;

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
      const token = req.url?.split("/").pop();
      const { email }: any = jwt.verify(`${token}`, `${process.env.JWT_SECRET}`);
      const dataFromUser = await charactersCollection.findOne({ email: email });
      return res.status(200).json({ dataFromUser });
    }
  }
}

export default handler;
