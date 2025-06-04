import { Form } from "@remix-run/react";
import PageTemplate from "app/components/ui/pagetemplate";
import SidebarArticles from "app/components/ui/sidebararticles";

export default function RegisterPage() {
  return (
    <PageTemplate sidebar={<SidebarArticles />}>
      <h1 className="text-2xl font-bold mb-6">Register</h1>
      <Form method="post" className="flex flex-col gap-4 max-w-xs mx-auto">
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="input"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="input"
        />
        <button type="submit" className="btn-primary">
          Register
        </button>
      </Form>
    </PageTemplate>
  );
}
