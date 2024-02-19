import { createContext, useState } from "react";

export const AllValueContext = createContext();

const AllValueProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  const value = {
    searchValue,
    setSearchValue,
  };

  return (
    <AllValueContext.Provider value={value}>
      {children}
    </AllValueContext.Provider>
  );
};

export default AllValueProvider;
