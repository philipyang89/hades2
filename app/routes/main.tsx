import PageTemplate from "app/components/ui/pagetemplate";

export default function MainWiki() {
  return (
    <PageTemplate
      sidebar={
        <span className="text-green-200 text-lg font-semibold">Main Page</span>
      }
    >
      <div className="text-gray-200 text-[15px]">
        <span className="[color:var(--green)]">Hades II</span> is a sequel to Hades currently in development...
        {/* More content blocks! */}
      </div>
    </PageTemplate>
  );
}