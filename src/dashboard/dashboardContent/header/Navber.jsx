import { useState } from "react";

const Navber = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="px-6 py-2 flex items-center justify-between border-b border-gray-200">
      {/* Left Side (Search) */}
      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full max-w-xs">
        <input
          className="outline-none w-full bg-transparent"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setSearch("")}
          className="ml-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3 ml-4">
        <button className="border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100">
          Dark
        </button>

        <button className="border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100">
          Add
        </button>

        <div className="border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100 cursor-pointer">
          Profile
        </div>
      </div>
    </div>
  );
};

export default Navber;
