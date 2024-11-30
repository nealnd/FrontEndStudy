import { Link } from "react-router-dom";
import { LinkItem } from "../data";

export const NavLink: React.FC<{ category: string; links: LinkItem[] }> = ({
  category,
  links,
}) => (
  <article>
    <h4>{category}</h4>
    <div className="sidebar-sublinks">
      {links.map((item, index) => (
        <Link to={`/${category}/${item.label}`} key={index}>
          <item.icon /> {item.label}
        </Link>
      ))}
    </div>
  </article>
);
