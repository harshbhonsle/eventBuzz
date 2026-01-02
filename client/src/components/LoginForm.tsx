import { useState} from "react";
import type {FormEvent } from "react"
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Placeholder logic (replace later with real auth)
    console.log({ email, password });

    // Clear form
    setEmail("");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-12 p-6 rounded-lg bg-light text-light transition-theme shadow"
    >
      <h2 className="text-xl font-semibold mb-6 text-center">
        Login
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
      <div className="mb-6">
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

      <button
        type="submit"
        className="w-full py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
