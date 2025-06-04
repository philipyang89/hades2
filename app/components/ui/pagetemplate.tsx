import { ReactNode, useState } from "react";
import { Link, useOutletContext, Form } from "@remix-run/react";
import MobileTopBar from "app/components/ui/mobiletopbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

type PageTemplateProps = {
  children: ReactNode;
  sidebar?: ReactNode;
};

// Add this type to match the outlet context structure
type ContextType = { user: { username: string } | null };

export default function PageTemplate({ children, sidebar }: PageTemplateProps) {
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const [mobileAuth, setMobileAuth] = useState(false);

  // Get the user from Outlet context
  const { user } = useOutletContext<ContextType>();

  function handleOverlayClick() {
    setMobileSidebar(false);
    setMobileAuth(false);
  }

  return (
    <main
      className="relative min-h-screen w-full flex flex-col items-center pt-12 sm:pt-0"
      style={{
        backgroundImage: "url('/MainPageBG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <MobileTopBar
        onSidebar={() => setMobileSidebar(true)}
        onAuth={() => setMobileAuth(true)}
      />

      {/* --- MOBILE SIDEBAR --- */}
      {mobileSidebar && (
        <div
          className="fixed inset-0 z-[100] bg-black/40 sm:hidden"
          onClick={handleOverlayClick}
        >
          <aside
            className="bg-black w-60 h-full p-6 rounded-r-2xl shadow-xl z-[110] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {sidebar}
          </aside>
        </div>
      )}

      {/* --- MOBILE AUTH MENU --- */}
      {mobileAuth && (
        <div
          className="fixed inset-0 z-[100] sm:hidden"
          onClick={handleOverlayClick}
        >
          <div
            className="absolute top-14 right-4 w-36 bg-black rounded-xl shadow-lg border border-[#222d33] flex flex-col p-3 z-[110]"
            onClick={(e) => e.stopPropagation()}
          >
            {!user ? (
              <>
                <Link
                  to="/register"
                  className="block text-yellow-300 mb-2 text-lg hover:underline"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="block text-white text-lg hover:underline"
                >
                  Log in
                </Link>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-yellow-300 text-lg mb-2 flex items-center">
                  <FontAwesomeIcon icon={faUser} className="w-4 h-4 mr-2" />
                  {user.username}
                </span>
                <Form action="/logout" method="post" className="w-full">
                  <button
                    type="submit"
                    className="block text-red-500 text-lg hover:underline w-full text-left"
                  >
                    Log out
                  </button>
                </Form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- DESKTOP TOP AUTH BAR --- */}
      <div className="w-full flex justify-end items-center px-4 z-30 -mt-2 hidden sm:flex">
        <div className="relative flex items-center h-10 min-w-[250px] pl-10 font-spectralsc">
          <img
            src="/NamePlate01.png"
            alt=""
            className="absolute inset-0 h-full w-full object-contain z-[-1] pointer-events-none"
            draggable={false}
          />
          {!user ? (
            <>
              <Link
                to="/register"
                className="relative z-10 text-yellow-300 pl-2 px-1 hover:underline transition"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="relative z-10 text-white pl-5 px-1 hover:underline transition"
              >
                Log in
              </Link>
            </>
          ) : (
            <>
              <span className="relative z-10 text-yellow-300 pl-2 px-1 flex items-center">
                  <FontAwesomeIcon icon={faUser} className="w-4 h-4 mr-2" />
                {user.username}
              </span>
              <Form action="/logout" method="post">
                <button
                  type="submit"
                  className="relative z-10 text-white pl-5 px-1 hover:underline hover:text-red-500 transition"
                >
                  Log out
                </button>
              </Form>
            </>
          )}
        </div>
      </div>

      {/* --- LOGO (desktop only) --- */}
      <div className="flex justify-center w-full hidden sm:flex">
        <img
          src="/Hades_II_Logo.png"
          alt="Hades 2 Logo"
          className="h-26 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] select-none"
          draggable={false}
        />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex w-full max-w-[1200px] mx-auto mt-6 z-10">
        {sidebar && (
          <aside className="bg-black/40 rounded-tl-2xl rounded-bl-2xl p-8 w-56 flex flex-col min-h-[500px] hidden sm:flex">
            {sidebar}
          </aside>
        )}
        <section className="flex-1 bg-black/70 rounded-tr-2xl rounded-br-2xl p-10 min-h-[500px] flex flex-col items-center shadow-xl">
          <div className="w-full max-w-[800px]">{children}</div>
        </section>
      </div>
    </main>
  );
}
