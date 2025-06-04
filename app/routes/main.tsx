import PageTemplate from "app/components/ui/pagetemplate";
import SidebarArticles from "app/components/ui/sidebararticles";

export default function MainWiki() {
  return (
    <PageTemplate sidebar={<SidebarArticles />}>
      <div className="text-gray-200 text-[15px]">
        <span className="[color:var(--green)]">Hades II</span> is a sequel to
        Hades currently in development...
        {/* More content blocks! */}
      </div>
    </PageTemplate>
  );
}
