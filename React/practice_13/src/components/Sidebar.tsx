import { IconContext } from "react-icons";
import { useGlobalContext } from "../context";
import { IoClose } from "react-icons/io5";

import { NavLink } from "./Navlink";

export const Sidebar = () => {
  const { NavDatas, showSideBar, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar ${showSideBar ? "show-sidebar" : ""}`}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <IconContext.Provider value={{ size: "2rem" }}>
            <IoClose />
          </IconContext.Provider>
        </button>
        <div className="sidebar-links">
          {Array.from(NavDatas.entries()).map(([category, links], index) => (
            <NavLink category={category} links={links} key={category}></NavLink>
          ))}
        </div>
      </div>
    </aside>
  );
};
