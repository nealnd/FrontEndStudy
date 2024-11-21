import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

export type cartItem = {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
};

export type Action =
  | { type: "LOADING" }
  | { type: "DISPLAY_ITEMS"; payload: cartItem[] }
  | { type: "CLEAR_CART" }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "INCREASE"; payload: number }
  | { type: "DECREASE"; payload: number }
  | { type: "CALCULATE_TOTALS" };

export type State = {
  loading: boolean;
  cart: cartItem[];
  total: number;
  amount: number;
};

const initialState: State = {
  loading: false,
  cart: [] as cartItem[],
  total: 0,
  amount: 0,
};

type CartContextType = {
  state: State;
  clearCart: () => void;
  removeItem: (id: number) => void;
  increaseItem: (id: number) => void;
  decreaseItem: (id: number) => void;
};

const CartContext = React.createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const increaseItem = (id: number) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decreaseItem = (id: number) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "LOADING" });
        const response = await fetch("/data.json");

        const cart = await response.json();
        dispatch({ type: "DISPLAY_ITEMS", payload: cart });
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTALS" });
  }, [state.cart]);
  console.log("Children in CartProvider:", children);

  return (
    <CartContext.Provider
      value={{
        state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useGlobalContext must be used within an AppProvider");

  return context;
};

export { CartContext, CartProvider };
