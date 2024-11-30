import React, { ReactNode, useContext } from "react";
import { useState } from "react";
import { LinkItem, sublinks } from "./data";

interface AppContextType {
  NavDatas: Map<string, LinkItem[]>;
  showSideBar: boolean;
  showSubMenu: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  openSubMenu: (index: number) => void;
  closeSubMenu: () => void;
  MenuIndex: number;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [NavDatas, setNavDatas] = useState(sublinks);
  const [showSideBar, setShowSideBar] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [MenuIndex, setMenuIndex] = useState(0);
  const openSidebar = () => {
    setShowSideBar(true);
  };
  const closeSidebar = () => {
    setShowSideBar(false);
  };
  const openSubMenu = (index: number) => {
    setShowSubMenu(true);
    setMenuIndex(index);
  };
  const closeSubMenu = () => {
    setShowSubMenu(false);
  };
  return (
    <AppContext.Provider
      value={{
        NavDatas,
        showSideBar,
        showSubMenu,
        openSidebar,
        closeSidebar,
        openSubMenu,
        closeSubMenu,
        MenuIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};

export { AppContext, AppProvider };
