import { AllValueContext } from "@/providers/AllValueProvider";
import { useContext } from "react";

export const useAllValueContext = () => {
  const value = useContext(AllValueContext);

  if (!value) {
    throw new Error("useAllValueContext must be used with a AllValueProvider");
  }

  return value;
};
