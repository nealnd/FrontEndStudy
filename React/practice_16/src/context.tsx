import React, { useContext } from "react";
import { useEffect, useState } from "react";

type AppContextType = {
  loading: boolean;
  searchValue: string;
  searchResult: any;

  handleSearch: (
    e: React.FormEvent<HTMLFormElement>,
    Input: React.RefObject<HTMLInputElement>
  ) => void;
  changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchValue, setSearchValue] = useState("a");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (
    e: React.FormEvent<HTMLFormElement>,
    Input: React.RefObject<HTMLInputElement>
  ) => {
    e.preventDefault();
    if (Input.current?.value.trim() === "") {
      return;
    }
    fetchData();
  };

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}${searchValue}`);
      const data = await response.json();
      console.log(data.drinks);
      setSearchResult(data.drinks);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        searchValue,
        searchResult,
        handleSearch,
        changeValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useGlobalConext must be used within an AppProvider");
  return context;
};

export { AppContext, AppProvider };
