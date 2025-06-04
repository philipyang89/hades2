import { createCookie } from "@remix-run/node";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev-jwt-secret-change-this";

// Create the HTTP-only cookie
export const userCookie = createCookie("hades2_auth", {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
  maxAge: 60 * 60 * 24 * 7, // 7 days
});

// Sign a user JWT
export function createUserJWT(user: { id: string, email: string, role: string }) {
  return jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: "7d" });
}

// Verify a JWT
export function verifyUserJWT(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as { id: string, email: string, role: string };
  } catch {
    return null;
  }
}

// Get user from request cookie
export async function getUserFromRequest(request: Request) {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = await userCookie.parse(cookieHeader);
  if (!cookie?.token) return null;
  return verifyUserJWT(cookie.token);
}
