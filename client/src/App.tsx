import ThemeToggle from "./components/toggleButton";

function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center 
                    bg-white text-blue-600 dark:bg-black dark:text-red-600 transition-colors duration-500">
      <h1 className="text-3xl font-bold mb-4">Theme Test</h1>
      <p className="mb-4">The background and text should change with theme.</p>
      <ThemeToggle />
      <div className="dark:bg-orange-600 dark:text-white bg-blue-700">
        <h1>testing </h1>
      </div>
    </div>
  </>
  );
}

export default App;
