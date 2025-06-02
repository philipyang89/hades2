import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <video
        className="fixed inset-0 w-full h-full object-cover z-0"
        src="/video/MelinoeAnimatedBG.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex flex-col items-center justify-end h-screen">
        <img src="/Hades_II_Logo.png" alt="Hades 2 Logo" />
        <Link
          to="/main"
          className="scroll-down-hover font-spectralsc text-4xl font-medium pb-8 transition"
        >
          To Main Page
        </Link>
      </div>
    </main>
  );
}