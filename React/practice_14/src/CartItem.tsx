import { IconContext } from "react-icons";
import { goodsItem } from "./data";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CartItem = ({
  item,
  addAmount,
  subtractAmount,
  removeGoods,
}: {
  item: goodsItem;
  addAmount: (id: number) => void;
  subtractAmount: (id: number) => void;
  removeGoods: (id: number) => void;
}) => (
  <article className="cart-item" key={item.id}>
    <img src={item.img} alt={item.title}></img>
    <div>
      <h5>{item.title}</h5>
      <span className="item-price">${item.price}</span>
      <button className="remove-btn" onClick={() => removeGoods(item.id)}>
        remove
      </button>
    </div>
    <div>
      <button className="amount-btn" onClick={() => addAmount(item.id)}>
        <IconContext.Provider value={{ className: "amount-icon" }}>
          <FaChevronUp></FaChevronUp>
        </IconContext.Provider>
      </button>
      <span className="amount">{item.amount}</span>
      <button className="amount-btn" onClick={() => subtractAmount(item.id)}>
        <IconContext.Provider value={{ className: "amount-icon" }}>
          <FaChevronDown />
        </IconContext.Provider>
      </button>
    </div>
  </article>
);

export default CartItem;
