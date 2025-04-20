import React from "react";

const SearchInput = ({ searchTerm, onSearch }) => {
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search by name or status..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
