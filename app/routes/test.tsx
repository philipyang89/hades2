import { useState } from "react";
import { Menu, User } from "lucide-react";

export default function TestMobileSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pt-12 sm:pt-0 bg-gray-900">
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 w-full h-12 bg-black flex items-center justify-between px-4 z-50 border-b border-[#222d33] sm:hidden">
        <button
          aria-label="Open sidebar"
          className="text-green-200 text-2xl"
          onClick={() => {
            console.log('Sidebar icon clicked');
            setSidebarOpen(true);
          }}
        >
          <Menu size={30} />
        </button>
        <span className="text-white font-bold text-lg">Test Logo</span>
        <button
          aria-label="Open user menu"
          className="text-green-200 text-2xl"
          onClick={() => {
            console.log('User icon clicked');
            setAuthOpen(true);
          }}
        >
          <User size={28} />
        </button>
      </div>

      {/* Sidebar Drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-[100] bg-black/40 flex sm:hidden" onClick={() => setSidebarOpen(false)}>
          <aside
            className="bg-black w-60 h-full p-6 rounded-r-2xl shadow-xl z-[110] relative"
            onClick={e => e.stopPropagation()}
          >
            <div className="text-white">SIDEBAR CONTENT</div>
          </aside>
        </div>
      )}

      {/* User Auth Popup */}
      {authOpen && (
        <div className="fixed inset-0 z-[100] sm:hidden" onClick={() => setAuthOpen(false)}>
          <div
            className="absolute top-14 right-4 w-36 bg-black rounded-xl shadow-lg border border-[#222d33] flex flex-col p-3 z-[110]"
            onClick={e => e.stopPropagation()}
          >
            <button className="block text-yellow-300 mb-2 text-lg hover:underline">Register</button>
            <button className="block text-white text-lg hover:underline">Log in</button>
          </div>
        </div>
      )}

      <div className="mt-24 text-white">Resize your screen below 640px and click the icons in the top bar.</div>
    </div>
  );
}
