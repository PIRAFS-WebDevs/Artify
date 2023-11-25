import AllStateContext from "@/context/AllStateContext";
import AuthContext from "@/context/AuthContext";
import { getUserByEmail } from "@/utils/api/user";
import { useContext, useEffect, useState } from "react";

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
  const { user } = useContext(AuthContext);

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
    setCartOpen,
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
