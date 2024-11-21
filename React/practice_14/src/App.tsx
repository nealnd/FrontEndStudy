import { IconContext } from "react-icons";
import { FaCartPlus } from "react-icons/fa";

import { data, goodsItem } from "./data";
import { useMemo, useState } from "react";
import CartItem from "./CartItem";

function App() {
  const [GoodsList, setGoodsList] = useState<goodsItem[]>(data);
  const totalPrice = useMemo(() => {
    return GoodsList.reduce(
      (total, item) => total + item.price * item.amount,
      0
    );
  }, [GoodsList]);

  const addAmount = (id: number) => {
    setGoodsList((PreList) => {
      return PreList.map((item) => {
        if (item.id === id) return { ...item, amount: item.amount + 1 };
        // The map method creates a new array by applying a transformation function to each element of the original array. However,
        // if the transformation function doesn't return a new object, the elements in the new array will reference the same objects as the original array.
        return item;
      });
    });
  };

  const subtractAmount = (id: number) => {
    setGoodsList((PreList) =>
      PreList.reduce((acc, item) => {
        if (item.id === id && item.amount > 1) {
          acc.push({ ...item, amount: item.amount - 1 });
        } else if (item.id !== id) {
          acc.push(item);
        }
        return acc;
      }, [] as goodsItem[])
    );
  };

  const removeGoods = (id: number) => {
    setGoodsList((PreList) => {
      return PreList.filter((item) => item.id !== id);
    });
  };

  const clearCart = () => {
    setGoodsList([]);
  };

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h4>useReducer</h4>
          <div className="nav-container">
            <IconContext.Provider value={{ className: "cart-icon" }}>
              <FaCartPlus></FaCartPlus>
            </IconContext.Provider>
            <div className="amount-container">
              <p className="total-amount">{GoodsList.length}</p>
            </div>
          </div>
        </div>
      </nav>
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>

        <div>
          {GoodsList.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                addAmount={addAmount}
                subtractAmount={subtractAmount}
                removeGoods={removeGoods}
              ></CartItem>
            );
          })}
        </div>
        {GoodsList.length > 0 ? (
          <footer>
            <hr />
            <div>
              <h5 className="cart-total">
                total
                <span>{totalPrice}</span>
              </h5>
            </div>
            <button className="btn btn-hipster" onClick={clearCart}>
              clear cart
            </button>
          </footer>
        ) : (
          <h4 className="empty-cart">is currently empty</h4>
        )}
      </section>
    </main>
  );
}

export default App;
