"use client";

import AllStateProvider from "./AllStateProvider";
import AuthProvider from "./AuthProvider";
import SingleProductProvider from "./SingleProductProvider";
import AllProductProvider from "./AllProductProvider";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <AllStateProvider>
        <AllProductProvider>
          <SingleProductProvider>{children}</SingleProductProvider>
        </AllProductProvider>
      </AllStateProvider>
    </AuthProvider>
  );
};

export default Providers;
