import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PageTemplate from "app/components/ui/pagetemplate";
import SidebarArticles from "app/components/ui/sidebararticles";
import Article from "app/components/ui/article";
import prisma from "app/db.server";

export async function loader({ params }: LoaderFunctionArgs) {
  const article = await prisma.article.findUnique({ where: { slug: params.slug } });
  if (!article) throw new Response("Not Found", { status: 404 });
  const articles = await prisma.article.findMany({
    select: { title: true, slug: true },
    orderBy: { title: "asc" },
  });
  return json({ article, articles });
}

export default function ArticlePage() {
  const { article, articles } = useLoaderData<typeof loader>();
  return (
    <PageTemplate sidebar={<SidebarArticles articles={articles} />}>
      <Article
        image={article.image}
        imageAlt={article.imageAlt}
        title={article.title}
        subtitle={article.subtitle}
      >
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </Article>
    </PageTemplate>
  );
}