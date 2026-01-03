import { FiSearch, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-theme min-h-[94vh] transition-colors duration-300 flex flex-col items-center justify-center text-center px-4">
      
      {/* Main Title */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-primary mb-4">
        EventBuzz
      </h1>

      {/* Catchy tagline */}
      <p className="text-xl md:text-2xl text-text max-w-xl">
        Discover, book, and enjoy the best college events — all in one place!
      </p>

      {/* Call-to-Action Buttons */}
      <div className="mt-8 flex flex-col md:flex-row gap-4">

        {/* Explore Events */}
        <button className="btn cursor-pointer bg-primary text-bg">
          <FiSearch className="text-xl" />
          Explore Events
        </button>

        {/* Get Started → Navigate to Login */}
        <Link to="/login" className="btn border-primary text-primary flex items-center gap-2">
          Get Started
          <FiArrowRight className="text-xl" />
        </Link>

      </div>
    </div>
  );
};

export default HomePage;
