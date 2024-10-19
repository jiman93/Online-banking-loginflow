import { useContext } from "react";
import { LoginFlowContext } from "./context";

// Hook to use the login flow context in components
export const useLoginFlow = () => {
  const context = useContext(LoginFlowContext);
  if (!context) {
    throw new Error("useLoginFlow must be used within a LoginFlowProvider");
  }
  return context;
};
