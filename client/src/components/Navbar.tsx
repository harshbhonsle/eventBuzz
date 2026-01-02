import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ThemeToggle from "./toggleButton";

const Navbar = () => {
  const auth = useContext(AuthContext);

  return (
    <nav className="h-full px-4 flex items-center justify-between bg-light text-light transition-theme  ">
      {/* Left spacer */}
      <div className="w-1/4" />

      {/* Center title */}
      <div className="w-1/2 text-center ">
        <h1 className="text-5xl  font-semibold tracking-wide">EventBuzz</h1>
      </div>

      {/* Right controls */}
      <div className="w-1/4 flex justify-end items-center gap-3">
        <ThemeToggle />
        {auth?.user && (
          <button
            onClick={auth.logout}
            className="px-3 py-1 text-sm border border-neutral-600 rounded hover:bg-neutral-800 transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
