const Category = ({ category, menuFilter }) => {
  return (
    <button type="button" className="btn" onClick={() => menuFilter(category)}>
      {category}
    </button>
  );
};

export default Category;
