import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { NavDatas, OtherDatas } from "./data";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { showSideBar, closeSidebar } = useGlobalContext();

  return (
    <aside className={`sidebar ${showSideBar && `show-sidebar`}`}>
      <div className="sidebar-header">
        <img src="/logo.svg" className="logo" alt="coding addict" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes></FaTimes>
        </button>
      </div>
      <ul className="links">
        {NavDatas.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url}>
                <item.icon></item.icon>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {OtherDatas.map((item, index) => (
          <li key={index}>
            <a href={item.url}>
              <item.icon></item.icon>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
