"use client";

import AllStateProvider from "./AllStateProvider";
import AuthProvider from "./AuthProvider";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <AllStateProvider>{children}</AllStateProvider>
    </AuthProvider>
  );
};

export default Providers;
