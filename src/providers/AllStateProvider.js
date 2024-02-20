import AllStateContext from "@/context/AllStateContext";
import { useAuthContext } from "@/hooks/useAuthContext";
import { GetDataCart } from "@/utils/addToCart/AddToCart";
import { getUserByEmail } from "@/utils/api/user";
import { useEffect, useState } from "react";

const AllStateProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [adminBarOpen, setAdminBarOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [isDelOpen, setDelOpen] = useState(false);
  const [FindUser, setFindUser] = useState([]);
  const { user } = useAuthContext();
  const [totalCartItem, setTotalCartItem] = useState([]);
  const [cartUpdated, setCartUpdated] = useState(false);

  useEffect(() => {
    (async () => {
      const cart = await GetDataCart();

      setTotalCartItem(cart);
    })();
  }, [cartUpdated]);

  useEffect(() => {
    if (user?.email) {
      (async () => {
        const data = await getUserByEmail(user?.email);
        setFindUser(data?.data);
      })();
    }
  }, [user]);

  const value = {
    sideBarOpen,
    setSideBarOpen,
    mobileView,
    setMobileView,
    showProductModal,
    setShowProductModal,
    cartOpen,
    totalCartItem,
    setTotalCartItem,
    setCartUpdated,
    setCartOpen,
    cartUpdated,
    adminBarOpen,
    setAdminBarOpen,
    isDelOpen,
    setDelOpen,
    FindUser,
    searchShow,
    setSearchShow,
  };

  return (
    <AllStateContext.Provider value={value}>
      {children}
    </AllStateContext.Provider>
  );
};

export default AllStateProvider;
