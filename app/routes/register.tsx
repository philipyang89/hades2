import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import PageTemplate from "app/components/ui/pagetemplate";
import SidebarArticles from "app/components/ui/sidebararticles";
import prisma from "app/db.server";
import { register } from "app/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
  // Fetch articles for the sidebar
  const articles = await prisma.article.findMany({
    select: { title: true, slug: true },
    orderBy: { title: "asc" },
  });
  return json({ articles });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  if (typeof email !== "string" || typeof password !== "string") {
    return json({ error: "Invalid form submission" }, { status: 400 });
  }
  const username = formData.get("username");
  if (typeof username !== "string" || !username.trim()) {
    return json({ error: "Username required" }, { status: 400 });
  }
  try {
    // register returns a redirect response on success
    return await register({ email, password, username });
  } catch (error: any) {
    return json(
      { error: error.message || "Registration failed" },
      { status: 400 }
    );
  }
}

export default function RegisterPage() {
  const actionData = useActionData<typeof action>();
  const { articles } = useLoaderData<typeof loader>();

  return (
    <PageTemplate sidebar={<SidebarArticles articles={articles} />}>
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