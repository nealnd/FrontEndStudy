import { IconContext } from "react-icons";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useGlobalContext } from "./context";

const CartItem = ({
  id,
  title,
  price,
  img,
  amount,
}: {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
}) => {
  const { removeItem, increaseItem, decreaseItem } = useGlobalContext();
  return (
    <article className="cart-item" key={id}>
      <img src={img} alt={title}></img>
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => increaseItem(id)}>
          <IconContext.Provider value={{ className: "amount-icon" }}>
            <FaChevronUp></FaChevronUp>
          </IconContext.Provider>
        </button>
        <span className="amount">{amount}</span>
        <button className="amount-btn" onClick={() => decreaseItem(id)}>
          <IconContext.Provider value={{ className: "amount-icon" }}>
            <FaChevronDown />
          </IconContext.Provider>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
