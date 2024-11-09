import { MenuItem } from "./data";

interface MenuProps {
  data: MenuItem;
}

const Menu: React.FC<MenuProps> = ({ data }) => {
  return (
    <article className="menu-item">
      <img src={data.img} alt={data.title} className="img"></img>
      <div className="item-info">
        <header>
          <h5>{data.title}</h5>
          <span className="item-price">${data.price}</span>
        </header>
        <p className="item-text">{data.desc}</p>
      </div>
    </article>
  );
};

export default Menu;
