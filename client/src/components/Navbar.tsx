import { FiLogIn, FiUserPlus } from "react-icons/fi";
import ThemeToggle from "./toggleButton";

const Navbar = () => {
  return (
    <nav className="w-full bg-theme transition-colors duration-300 ">
      <div className="flex flex-row justify-end items-center px-4 py-3 gap-2 md:gap-3 flex-nowrap">

        {/* Login Button */}
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm md:text-base border border-primary rounded-md hover:bg-primary hover:text-bg transition-colors duration-300">
          <FiLogIn className="text-lg" />
          Login
        </button>

        {/* Signup Button */}
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm md:text-base border border-primary rounded-md hover:bg-primary hover:text-bg transition-colors duration-300">
          <FiUserPlus className="text-lg" />
          Signup
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />

      </div>
    </nav>
  );
};

export default Navbar;
