import { hash, compare } from "bcryptjs";
import prisma from "app/db.server";
import { sessionStorage, commitSession, destroySession } from "app/session.server";
import { redirect } from "@remix-run/node";

// Registration: create user and login
export async function register({ email, password, username }: { email: string, password: string, username: string}) {
  if (username.length > 10) {
    throw new Error("Username must be at most 10 characters.");
  }
  const hashedPassword = await hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        // role: "USER" // optional, default in your schema
      }
    });
    return createUserSession(user.id, "/");
  } catch (err: any) {
    if (err.code === "P2002") { // Prisma unique constraint failed
      throw new Error("Email already in use");
    }
    throw err;
  }
}

// Login: check user credentials and login
export async function login({ identifier, password }: { identifier: string, password: string }) {
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { email: identifier },
        { username: identifier }
      ]
    }
  });
  if (!user) throw new Error("Invalid email/username or password");
  const isValid = await compare(password, user.password);
  if (!isValid) throw new Error("Invalid email/username or password");
  return await createUserSession(user.id, "/");
}

// Logout: destroy session
export async function logout(request: Request) {
  const session = await sessionStorage.getSession(request.headers.get("Cookie"));
  return redirect("/login", {
    headers: {
      "Set-Cookie": await destroySession(session),
    }
  });
}

// Create session & redirect
async function createUserSession(userId: string, redirectTo: string) {
  const session = await sessionStorage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session),
    }
  });
}

// Get currently logged-in user (returns user object or null)
export async function getUser(request: Request) {
  const session = await sessionStorage.getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  if (!userId) return null;
  try {
    return await prisma.user.findUnique({ where: { id: userId } });
  } catch {
    return null;
  }
}

// Require user (throws redirect if not logged in)
export async function requireUserId(request: Request, redirectTo = "/login") {
  const session = await sessionStorage.getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  if (!userId) throw redirect(redirectTo);
  return userId as string;
}
