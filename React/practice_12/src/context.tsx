import React, { useState, useContext, ReactNode } from "react";

// 1. Define the shape of the context data
interface AppContextType {
  showSideBar: boolean;
  showModalOpen: boolean;
  opensidebar: () => void;
  closeSidebar: () => void;
  openModal: () => void;
  closeModal: () => void;
}

// 2. Create the context with a default value of `null` initially
const AppContext = React.createContext<AppContextType | null>(null);

// 3. Define the types for the `AppProvider` component props
interface AppProviderProps {
  children: ReactNode; // `children` should be typed as ReactNode
}

// 4. Define the `AppProvider` component using `React.FC` properly
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showModalOpen, setShowModalOpen] = useState(false);

  // Define functions to manage state
  const opensidebar = () => {
    setShowSideBar(true);
  };

  const closeSidebar = () => {
    setShowSideBar(false);
  };

  const openModal = () => {
    setShowModalOpen(true);
  };

  const closeModal = () => {
    setShowModalOpen(false);
  };

  // Return JSX that includes the context provider with `children`
  return (
    <AppContext.Provider
      value={{
        showSideBar,
        showModalOpen,
        opensidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to access the context
export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};

// Export the context and provider
export { AppContext, AppProvider };
