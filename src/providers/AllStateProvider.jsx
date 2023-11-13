import AllStateContext from "@/context/AllStateContext";
import { useState } from "react";

const AllStateProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [adminBarOpen, setAdminBarOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const value = {
    sideBarOpen,
    setSideBarOpen,
    mobileView,
    setMobileView,
    isShow,
    setIsShow,
    cartOpen,
    setCartOpen,
    adminBarOpen,
    setAdminBarOpen,
  };

  return (
    <AllStateContext.Provider value={value}>
      {children}
    </AllStateContext.Provider>
  );
};

export default AllStateProvider;
