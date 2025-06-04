import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import PageTemplate from "app/components/ui/pagetemplate";
import SidebarArticles from "app/components/ui/sidebararticles";
import prisma from "app/db.server";
import { login } from "app/auth.server";

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
  const identifier = formData.get("identifier");
  const password = formData.get("password");
  if (typeof identifier !== "string" || typeof password !== "string") {
    return json({ error: "Invalid form submission" }, { status: 400 });
  }
  try {
    // login returns a redirect response on success
    return await login({ identifier, password });
  } catch (error: any) {
    return json({ error: error.message || "Login failed" }, { status: 400 });
  }
}

export default function LoginPage() {
  const actionData = useActionData<typeof action>();
  const { articles } = useLoaderData<typeof loader>();

  return (
    <PageTemplate sidebar={<SidebarArticles articles={articles} />}>
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <Form method="post" className="flex flex-col gap-4 max-w-xs mx-auto">
        {actionData?.error && (
          <div className="text-red-600 text-center rounded mb-2">
            {actionData.error}
          </div>
        )}
        <input
          name="identifier"
          type="text"
          placeholder="Email or Username"
          required
          className="input"
          autoComplete="username"
          maxLength={10}
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