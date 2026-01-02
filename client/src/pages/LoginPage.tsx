import { useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const auth = useContext(AuthContext);

  // Redirect if already logged in
  if (auth?.user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-light text-light transition-theme">
      <LoginForm />

      {/* Check for new user */}
      <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
        New user?{" "}
        <Link
          to="/register"
          className="text-blue-500 dark:text-orange-400 underline hover:text-blue-600 dark:hover:text-orange-500 transition-colors"
        >
          Register here
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
