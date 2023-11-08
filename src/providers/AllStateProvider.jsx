import AllStateContext from "@/context/AllStateContext";
import { useState } from "react";

const AllStateProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const value = {
    sideBarOpen,
    setSideBarOpen,
    mobileView,
    setMobileView,
    isShow,
    setIsShow,
    cartOpen,
    setCartOpen,
  };

  return (
    <AllStateContext.Provider value={value}>
      {children}
    </AllStateContext.Provider>
  );
};

export default AllStateProvider;
