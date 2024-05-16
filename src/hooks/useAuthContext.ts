import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'o hook useAuthContext deve ser usado dentro do AuthProvider'
    );
  }

  return context;
};