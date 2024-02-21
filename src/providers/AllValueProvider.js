import { createContext, useState } from "react";

export const AllValueContext = createContext();

const AllValueProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileView, setMobileView] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);

  const value = {
    searchValue,
    setSearchValue,
    sidebarOpen,
    setSidebarOpen,
    mobileView,
    setMobileView,
    showProductModal,
    setShowProductModal,
  };

  return (
    <AllValueContext.Provider value={value}>
      {children}
    </AllValueContext.Provider>
  );
};

export default AllValueProvider;
