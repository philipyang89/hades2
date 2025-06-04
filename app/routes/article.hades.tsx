import PageTemplate from "app/components/ui/pagetemplate";
import SidebarArticles from "app/components/ui/sidebararticles";
import Article from "app/components/ui/article";

export default function HadesArticle() {
  return (
    <PageTemplate sidebar={<SidebarArticles />}>
      <Article
        image="/images/logo-dark.png"
        imageAlt="Statue of Artemis"
        title="Hades"
        subtitle="Goddess of the Hunt"
      >
        <p>
          Artemis is the goddess of the hunt, and plays a significant role in Hades II...
        </p>
        {/* Add more paragraphs, lists, links, etc., as needed */}
      </Article>
    </PageTemplate>
  );
}