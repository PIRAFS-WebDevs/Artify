"use client";

import AllStateProvider from "./AllStateProvider";
import AuthProvider from "./AuthProvider";
import SingleProductProvider from "./SingleProductProvider";
import AllProductProvider from "./AllProductProvider";
import NextUIProviders, { NextThemeProvider } from "./NextThemeProviders";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <AllStateProvider>
        <AllProductProvider>
          <SingleProductProvider>
            {/* <NextThemeProvider>{children}</NextThemeProvider> */}
            {children}
          </SingleProductProvider>
        </AllProductProvider>
      </AllStateProvider>
    </AuthProvider>
  );
};

export default Providers;
