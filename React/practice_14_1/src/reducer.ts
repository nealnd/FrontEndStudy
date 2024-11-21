import { State, Action, cartItem } from "./context";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "DISPLAY_ITEMS":
      return { ...state, loading: false, cart: action.payload };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };
    case "DECREASE":
      return {
        ...state,
        cart: state.cart.reduce((acc, item) => {
          if (item.id === action.payload && item.amount > 1) {
            acc.push({ ...item, amount: item.amount - 1 });
          } else if (item.id !== action.payload) {
            acc.push(item);
          }
          return acc;
        }, [] as cartItem[]),
      };
    case "CALCULATE_TOTALS": {
      const { total, amount } = state.cart.reduce(
        (acc, item) => {
          acc.total += item.price * item.amount;
          acc.amount += item.amount;
          return acc;
        },
        { total: 0, amount: 0 }
      );

      return {
        ...state,
        total: parseFloat(total.toFixed(2)),
        amount,
      };
    }
    default:
      return state;
  }
};
