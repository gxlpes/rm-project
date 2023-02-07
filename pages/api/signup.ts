import { NextApiRequest, NextApiResponse } from "next";
import { hashPassword } from "../../src/lib/auh";
import { connectToDatabase } from "../../src/lib/db";
import { UserCredentials } from "../../src/types/api/backend/User";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Only POST requests are allowed" });
  const userCredentials = req.body as UserCredentials;
  if (!validateInput(userCredentials)) return res.status(422).json({ message: "Invalid email or password" });

  try {
    const client = await connectToDatabase("users");
    const db = client.db();
    const existingUser = await db.collection("data").findOne({ email: userCredentials.email });

    if (existingUser) {
      client.close();
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await hashPassword(userCredentials.password);
    await db.collection("data").insertOne({
      email: userCredentials.email,
      password: hashedPassword,
    });

    client.close();
    return res.status(201).json({ message: "Created user" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}

function validateInput(data: UserCredentials) {
  const email = data.email;
  const password = data.password;

  return email.includes("@") && password.trim().length >= 7;
}

export default handler;
