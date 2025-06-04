import { createCookieSessionStorage, redirect } from "@remix-run/node";

// Use a long, unpredictable string for your secret, ideally loaded from ENV
const sessionSecret = process.env.SESSION_SECRET || "SUPER_SECRET_SESSION_KEY";

// Create cookie session storage
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
});

// Helpers to work with sessions
export async function getSession (request: Request) {
  return sessionStorage.getSession(request.headers.get("Cookie"));
};
export async function commitSession(session: Awaited<ReturnType<typeof getSession>>) {
  return await sessionStorage.commitSession(session);
}
export async function destroySession(session: Awaited<ReturnType<typeof getSession>>) {
  return await sessionStorage.destroySession(session);
}

// Utility: require user id (redirects if not present)
export async function requireUserId(request: Request, redirectTo: string = "/login") {
  const session = await getSession(request);
  const userId = session.get("userId");
  if (!userId) throw redirect(redirectTo);
  return userId as string;
}

// Utility: get user id (returns string | undefined)
export async function getUserId(request: Request) {
  const session = await getSession(request);
  const userId = session.get("userId");
  return typeof userId === "string" ? userId : undefined;
}
