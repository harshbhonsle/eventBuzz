import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const auth = useContext(AuthContext);

  if (!auth?.user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-light text-light transition-theme">
      <h1 className="text-3xl font-bold mb-4">Welcome, {auth.user}!</h1>
      <p className="mb-4">You are logged in.</p>
      <button
        onClick={auth.logout}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;
