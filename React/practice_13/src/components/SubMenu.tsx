import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

export const SubMenu = () => {
  const { NavDatas, showSubMenu, closeSubMenu, MenuIndex } = useGlobalContext();
  return (
    <div
      className={`submenu ${showSubMenu ? "show-submenu" : ""}`}
      onMouseLeave={closeSubMenu}
    >
      <h5>{Array.from(NavDatas.keys())[MenuIndex]}</h5>
      <div className="submenu-links" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {Array.from(NavDatas.values())[MenuIndex].map((item, index) => {
          return (
            <Link
              to={`/${Array.from(NavDatas.keys())[index]}/${item.label}`}
              key={index}
            >
              <item.icon></item.icon>
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
