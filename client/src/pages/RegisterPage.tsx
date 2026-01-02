import { useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  const auth = useContext(AuthContext);

  // Redirect if already logged in
  if (auth?.user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-light text-light transition-theme">
      <RegisterForm />

      {/* Already have an account */}
      <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
        Already a user?{" "}
        <Link
          to="/login"
          className="text-blue-500 dark:text-orange-400 underline hover:text-blue-600 dark:hover:text-orange-500 transition-colors"
        >
          Login here
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
