import jwt, { Secret } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { verifyPassword } from "../../src/lib/auh";
import { connectToDatabase } from "../../src/lib/db";
import { UserCredentials } from "../../src/types/api/backend/User";
import cookie from "cookie";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await connectToDatabase("users");
  const db = client.db();
  const { email, password }: UserCredentials = req.body;

  switch (req.method) {
    case "POST": {
      try {
        const existingUser = await db.collection("data").findOne({ email: email });
        const validPassword = await verifyPassword(password, existingUser!.password);

        if (!email || !password) return res.status(401).json({ message: "Credentials are needed" });
        if (!existingUser) return res.status(404).json({ message: "User not found" });
        if (!validPassword) return res.status(401).json({ message: "Not authorized" });

        const token = jwt.sign({ email: email }, process.env.JWT_SECRET as Secret, { expiresIn: "1h" });

        res.setHeader(
          "Set-Cookie",
          cookie.serialize("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60,
            sameSite: "strict",
            path: "/",
          })
        );

        return res.status(200).json({
          token: token,
          user: {
            email: email,
            password: password,
          },
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
}

export default handler;
