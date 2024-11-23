import React, { useEffect, useReducer } from "react";
import { useContext } from "react";

import { reducer, State } from "./reducer";
import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: "03DzFxNlcSZe65v2-98IRnKvNmcp_O1R2aiFpynm_RQ",
});

const initialState: State = {
  loading: false,
  search: "cat",
  results: [],
  mode: true,
};

type AppContextType = {
  state: State;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  changeMode: () => void;
  changeSearch: (values: string) => void;
};

const AppContext = React.createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () => {
    try {
      dispatch({ type: "LOADING" });
      const response = await api.search.getPhotos({
        query: `${state.search}`,
        orientation: "landscape",
      });
      dispatch({
        type: "DISPLAY_RESULTS",
        payload: response.response?.results,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const changeSearch = (values: string) => {
    dispatch({ type: "CHANGE_SEARCH", payload: values });
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };

  const changeMode = () => {
    dispatch({ type: "CHANGE_MODE", payload: !state.mode });
    document.body.className = state.mode ? "dark-theme" : "";
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{ state, changeSearch, changeMode, handleSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useGlobalContext must be used within an AppProvider");

  return context;
};
export { AppContext, AppProvider };
