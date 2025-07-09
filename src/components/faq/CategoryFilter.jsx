import React from "react";
import PropTypes from "prop-types";

const CategoryFilter = ({ categories, selected, onChange }) => {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = selected === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={`
              px-3 py-1 rounded-full border cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-blue-500
              ${
                isActive
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
              }
            `}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
