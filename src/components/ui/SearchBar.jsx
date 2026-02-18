import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-900" />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 w-full md:w-60 md:focus:w-100 focus:w-72 bg-[#EDF3F8] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        />
    </div>
  );
};

export default SearchBar;
