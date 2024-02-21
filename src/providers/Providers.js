"use client";

import AllProductProvider from "./AllProductProvider";
import AllStateProvider from "./AllStateProvider";
import AllValueProvider from "./AllValueProvider";
import AuthProvider from "./AuthProvider";
import SingleProductProvider from "./SingleProductProvider";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <AllValueProvider>
        <AllStateProvider>
          <AllProductProvider>
            <SingleProductProvider>{children}</SingleProductProvider>
          </AllProductProvider>
        </AllStateProvider>
      </AllValueProvider>
    </AuthProvider>
  );
};

export default Providers;
