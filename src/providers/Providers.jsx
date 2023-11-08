"use client";

import AllStateProvider from "./AllStateProvider";

const Providers = ({ children }) => {
  return <AllStateProvider>{children}</AllStateProvider>;
};

export default Providers;
