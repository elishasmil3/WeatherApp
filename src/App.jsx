import { useEffect, useState } from "react";
import WeatherReport from "./components/WeatherCard";

function App() {
  const [query, setQuery] = useState("India");

  const [tempQuery, setTempQuery] = useState("");
  const handleSubmit = () => {
    setQuery(tempQuery);
  };

  return (
    <>
      <div className="font-sans min-h-screen w-full flex justify-center items-center flex-col gap-6 ">
        <div className="min-w-lg min-h-screen-sm bg-gradient-to-r rounded-md from-slate-800  to-cyan-800 p-12 shadow-md">
          <div className="flex border-2 rounded">
            <input
              type="text"
              className="px-4 py-2 w-80 outline-0"
              placeholder="Search..."
              onChange={(e) => setTempQuery(e.target.value)}
            />
            <button
              className="flex items-center justify-center px-4 border-l bg-slate-50"
              onClick={handleSubmit}
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
          <WeatherReport />
        </div>
      </div>
    </>
  );
}

export default App;
