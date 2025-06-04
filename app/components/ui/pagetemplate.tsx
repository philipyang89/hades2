import { ReactNode } from "react";
import { Link } from "@remix-run/react";

type PageTemplateProps = {
  children: ReactNode;
  sidebar?: ReactNode;
};

export default function PageTemplate({ children, sidebar }: PageTemplateProps) {
  return (
    <main
      className="relative min-h-screen w-full flex flex-col items-center"
      style={{
        backgroundImage: "url('/MainPageBG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* --- TOP AUTH BAR --- */}
      <div className="w-full flex justify-end items-center px-4 z-30 -mt-2">
        <div className="relative flex items-center h-10 min-w-[250px] pl-10 font-spectralsc">
          <img
            src="/NamePlate01.png"
            alt=""
            className="absolute inset-0 h-full w-full object-contain z-[-1] pointer-events-none"
            draggable={false}
          />
          <Link to="/register" className="relative z-10 text-yellow-300 pl-2 px-1 hover:underline transition">
            Register
          </Link>
          <Link to="/login" className="relative z-10 text-white pl-5 px-1 hover:underline transition">
            Log in
          </Link>
        </div>
      </div>

      {/* --- LOGO --- */}
      <div className="flex justify-center w-full">
        <img
          src="/Hades_II_Logo.png"
          alt="Hades 2 Logo"
          className="h-26 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] select-none"
          draggable={false}
        />
      </div>

      {/* --- SEARCH BAR ROW --- */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px] flex justify-end px-4">
          <input
            type="text"
            placeholder="Search Hades 2 Wiki"
            className="rounded px-4 py-2 bg-gray-200/90 text-gray-800 italic shadow border border-gray-400 focus:outline-none w-72 font-[500] text-lg mt-1 mb-2"
          />
        </div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="flex w-full max-w-[1200px] mx-auto mt-6 z-10">
        {/* Sidebar */}
        {sidebar && (
          <aside className="bg-black/40 rounded-tl-2xl rounded-bl-2xl p-8 w-56 flex flex-col min-h-[500px]">
            {sidebar}
          </aside>
        )}
        {/* Main panel */}
        <section className="flex-1 bg-black/70 rounded-tr-2xl rounded-br-2xl p-10 min-h-[500px] flex flex-col items-center shadow-xl">
          <div className="w-full max-w-[800px]">{children}</div>
        </section>
      </div>
    </main>
  );
}
