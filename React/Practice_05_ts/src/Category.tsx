import React from "react";

interface CategoryProps {
  category: string;
  menuFilter: (category: string) => void;
}

const Category: React.FC<CategoryProps> = ({ category, menuFilter }) => {
  return (
    <button type="button" className="btn" onClick={() => menuFilter(category)}>
      {category}
    </button>
  );
};

export default Category;
