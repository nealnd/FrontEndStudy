import { IconContext } from "react-icons";
import { FaCartPlus } from "react-icons/fa";

import CartItem from "./CartItem";

import { useGlobalContext } from "./context";

function App() {
  const { state, clearCart } = useGlobalContext();
  if (state.loading)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
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
              <p className="total-amount">{state.amount}</p>
            </div>
          </div>
        </div>
      </nav>
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>

        <div>
          {state.cart.map((item) => {
            return <CartItem key={item.id} {...item}></CartItem>;
          })}
        </div>
        {state.cart.length > 0 ? (
          <footer>
            <hr />
            <div>
              <h5 className="cart-total">
                total
                <span>{state.total}</span>
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
