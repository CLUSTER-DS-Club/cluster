import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="faq-search" className="sr-only">
        Search FAQs
      </label>
      <input
        id="faq-search"
        type="text"
        className="
          w-full
          border
          border-gray-300
          rounded-lg
          px-4 py-2
          focus:outline-none focus:ring-2 focus:ring-blue-500
          dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-blue-400
        "
        placeholder="Search FAQs..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
