"use client";

import { GetDataCart } from "@/utils/cart/AddToCart";
import { createContext, useEffect, useState } from "react";

export const AllValueContext = createContext();

const AllValueProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileView, setMobileView] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [productId, setProductId] = useState();
  const [cartUpdated, setCartUpdated] = useState(false);
  const [totalCartItem, setTotalCartItem] = useState([]);

  useEffect(() => {
    (async () => {
      const cart = await GetDataCart();

      setTotalCartItem(cart);
    })();
  }, [cartUpdated]);

  const value = {
    searchValue,
    setSearchValue,
    sidebarOpen,
    setSidebarOpen,
    mobileView,
    setMobileView,
    showProductModal,
    setShowProductModal,
    productId,
    setProductId,
    cartUpdated,
    setCartUpdated,
    totalCartItem,
    setTotalCartItem,
  };

  return (
    <AllValueContext.Provider value={value}>
      {children}
    </AllValueContext.Provider>
  );
};

export default AllValueProvider;
