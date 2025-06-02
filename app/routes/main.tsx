export default function MainWiki() {
  return (
    <main
      className="relative min-h-screen w-full flex items-start justify-center"
      style={{
        backgroundImage: "url('/MainPageBG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top-right Controls */}
      <div className="absolute top-4 right-6 flex items-center gap-4 z-20">
        <input
          type="text"
          placeholder="Search Hades 2 Wiki"
          className="rounded px-3 py-1 bg-gray-900/80 text-white border border-gray-400 focus:outline-none w-60"
        />
        <button className="text-yellow-300 font-bold px-3 py-1 rounded hover:underline">Register</button>
        <button className="text-white font-bold px-3 py-1 rounded hover:underline">Log in</button>
      </div>

      {/* Main content container */}
      <div className="flex w-full max-w-[1300px] mt-20 z-10">
        {/* Sidebar */}
        <aside className="bg-black/40 rounded-tl-2xl rounded-bl-2xl p-8 w-56 flex flex-col min-h-[500px]">
          <span className="text-green-200 text-lg font-semibold">Main Page</span>
        </aside>

        {/* Main panel */}
        <section className="flex-1 bg-black/70 rounded-tr-2xl rounded-br-2xl p-10 min-h-[500px] relative flex flex-col items-center shadow-xl">
          {/* Logo, centered at top */}
          <img src="/Hades_II_Logo.png" alt="Hades 2 Logo" className="mx-auto h-20 -mt-14 mb-8 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]" />
          {/* Text content */}
          <div className="w-full max-w-[800px] text-gray-200 text-[15px]">
            <span className="[color:var(--green)]">Hades II</span> is a sequel to Hades currently in development by <span className="[color:var(--green)]">Supergiant Games</span>.

            You play as <span className="[color:var(--green)]">Melinoë</span>, immortal daughter of Hades, on her quest to defeat the Titan of Time, battling numerous angry lost souls along the way. Death is a mere inconvenience for Melinoë, who returns each time to the crossroads to make incantations in Hecate's magical cauldron and try again. Receive Boons from the <span className="[color:var(--green)]">Gods</span> of Olympus and find treasures to aid in stopping Time itself. 
          </div>
        </section>
      </div>
    </main>
  );
}
