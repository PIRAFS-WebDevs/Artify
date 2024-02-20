import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

export const useAuthContext = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useAuthContext must be used with a AuthContextProvider");
  }

  return value;
};
