import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import PageTemplate from "app/components/ui/pagetemplate";
import SidebarArticles from "app/components/ui/sidebararticles";
import { register } from "app/auth.server";

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
    // register returns a redirect response on success
    return await register({ email, password });
  } catch (error: any) {
    return json(
      { error: error.message || "Registration failed" },
      { status: 400 }
    );
  }
}

export default function RegisterPage() {
  const actionData = useActionData<typeof action>();

  return (
    <PageTemplate sidebar={<SidebarArticles />}>
      <h1 className="text-2xl font-bold mb-6">Register</h1>
      <Form method="post" className="flex flex-col gap-4 max-w-xs mx-auto">
        {actionData?.error && (
          <div className="text-red-600 text-center rounded mb-2">
            {actionData.error}
          </div>
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
          name="username"
          type="text"
          placeholder="Username"
          required
          className="input"
          autoComplete="username"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="input"
          autoComplete="new-password"
        />
        <button type="submit" className="btn-primary">
          Register
        </button>
      </Form>
    </PageTemplate>
  );
}
