import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import PageTemplate from "app/components/ui/pagetemplate";
import SidebarArticles from "app/components/ui/sidebararticles";
import { login } from "app/auth.server";

// Optional: Redirect logged-in users away from this page
export async function loader({ request }: LoaderFunctionArgs) {
  // ...optionally, redirect if logged in
  return null;
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  if (typeof email !== "string" || typeof password !== "string") {
    return json({ error: "Invalid form submission" }, { status: 400 });
  }
  try {
    // login returns a redirect response on success
    return await login({ email, password });
  } catch (error: any) {
    return json({ error: error.message || "Login failed" }, { status: 400 });
  }
}

export default function LoginPage() {
  const actionData = useActionData<typeof action>();

  return (
    <PageTemplate sidebar={<SidebarArticles />}>
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <Form method="post" className="flex flex-col gap-4 max-w-xs mx-auto">
        {actionData?.error && (
          <div className="text-red-600 text-center rounded mb-2">{actionData.error}</div>
        )}
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="input"
          autoComplete="email"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="input"
          autoComplete="current-password"
        />
        <button type="submit" className="btn-primary">
          Login
        </button>
      </Form>
    </PageTemplate>
  );
}