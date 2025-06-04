import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PageTemplate from "app/components/ui/pagetemplate";
import SidebarArticles from "app/components/ui/sidebararticles";
import prisma from "app/db.server";

export async function loader(args: LoaderFunctionArgs) {
  // Fetch articles for the sidebar
  const articles = await prisma.article.findMany({
    select: { title: true, slug: true },
    orderBy: { title: "asc" }, // or order as you prefer!
  });
  return json({ articles });
}

export default function MainWiki() {
  const { articles } = useLoaderData<typeof loader>();
  return (
    <PageTemplate sidebar={<SidebarArticles articles={articles} />}>
      <div className="text-gray-200 text-[15px]">
        Hades II is a sequel roguelike game from Supergiant Games, creators of Hades, Bastion, Transistor, and Pyre. You play as Melinoë, immortal daughter of Hades, on her quest to defeat the Titan of Time, battling numerous angry lost souls along the way. Death is a mere inconvenience for Melinoë, who returns each time to the crossroads to make incantations in Hecate's magical cauldron and try again. Receive Boons from the Gods of Olympus and find treasures to aid in stopping Time itself
        
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-8 justify-center">
  {/* Image 1 */}
  <a
    href="https://store.steampowered.com/news/app/1145350/view/503942841152569404"
    target="_blank"
    rel="noopener noreferrer"
    className="block group"
  >
    <img
      src="/WartimeWallpaper.png"
      alt="Wartime Update"
      className="w-80 md:w-106 h-auto rounded-2xl shadow-2xl group-hover:scale-105 transition"
      draggable={false}
    />
    <div className="text-center mt-2 text-sm text-green-200 group-hover:underline">
      Warsong Update
    </div>
  </a>

  {/* Image 2 */}
  <a
    href="https://store.steampowered.com/news/app/1145350/view/7057794870234137716"
    target="_blank"
    rel="noopener noreferrer"
    className="block group"
  >
    <img
      src="/OlympicWallpaper.avif"
      alt="Olympic Update"
      className="w-80 md:w-106 h-auto rounded-2xl shadow-2xl group-hover:scale-105 transition"
      draggable={false}
    />
    <div className="text-center mt-2 text-sm text-green-200 group-hover:underline">
      Olympic Update
    </div>
  </a>
</div>

    </PageTemplate>
  );
}