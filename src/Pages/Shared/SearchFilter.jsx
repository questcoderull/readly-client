import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const SearchFilter = ({
  searchText,
  setSearchText,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div
      className="flex items-center justify-between max-w-4xl mx-auto bg-success p-4 rounded-md shadow-md"
      style={{ border: "1px solid #1D3557" }}
    >
      {/* Search Input - Left */}
      <div className="relative flex-grow max-w-3xl">
        <FaSearch
          className="absolute top-1/2 left-3 -translate-y-1/2 text-primary"
          size={18}
        />
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by blog title"
          className="w-full pl-10 pr-4 py-2 bg-success rounded-md border-b-2 border-secondary focus:outline-none focus:border-accent transition"
          style={{ color: "var(--color-primary)" }}
        />
      </div>

      {/* Category Filter - Right */}
      <div className="relative ml-6 w-44">
        <FaFilter
          className="absolute top-1/2 left-3 -translate-y-1/2 text-primary"
          size={18}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-success rounded-md border-b-2 border-secondary focus:outline-none focus:border-accent text-primary cursor-pointer transition"
        >
          <option value="all">All Categories</option>
          <option>Technology</option>
          <option>Travel</option>
          <option>Finance</option>
          <option>Education</option>
          <option>Marketing</option>
          <option>Health</option>
          <option>Productivity</option>
          <option>Career</option>
          <option>Others</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
