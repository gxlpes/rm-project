import { compare, hash } from "bcryptjs";

export async function hashPassword(password: any) {
  return await hash(password, 12);
}

export async function verifyPassword(password: any, hashedPassword: any) {
  return await compare(password, hashedPassword);
}
