import { FaBars } from "react-icons/fa6";
import { useGlobalContext } from "../context";

export const Navbar = () => {
  const { NavDatas, openSidebar, openSubMenu } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <div className="nav-links">
          {Array.from(NavDatas.entries()).map(([category], index) => {
            return (
              <button
                className="nav-link"
                onMouseEnter={() => openSubMenu(index)}
                key={index}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
