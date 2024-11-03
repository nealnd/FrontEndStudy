import data from "./data";
import React, { useState } from "react";
import Menu from "./Menu";
import Category from "./Category";

//generate the array
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [menus, setMenus] = useState(data);
  const menuFilter = (category) => {
    if (category === "all") setMenus(data);
    else {
      const temp = data.filter((item) => item.category === category);
      setMenus(temp);
    }
  };
  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="title-underline"></div>
        </div>
        <div className="btn-container">
          {allCategories.map((category) => (
            <Category
              category={category}
              key={category}
              menuFilter={menuFilter}
            ></Category>
          ))}
        </div>
        <div className="section-center">
          {menus.map((item) => (
            <Menu data={item} key={item.id}></Menu>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
