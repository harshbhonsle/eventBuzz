import { useState } from "react";
import type { FormEvent } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Placeholder logic (replace with real registration)
    console.log({ email, password });

    // Clear form
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-12 p-6 rounded-lg bg-light text-light transition-theme shadow"
    >
      <h2 className="text-xl font-semibold mb-6 text-center">
        Register
      </h2>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 rounded border border-neutral-300 dark:border-neutral-700 bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block text-sm mb-1" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 rounded border border-neutral-300 dark:border-neutral-700 bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Confirm Password */}
      <div className="mb-6">
        <label className="block text-sm mb-1" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full px-3 py-2 rounded border border-neutral-300 dark:border-neutral-700 bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
