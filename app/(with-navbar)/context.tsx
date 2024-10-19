import { createContext, useState, ReactNode } from "react";

// Define the login flow steps
export const LOGIN_FLOW_STEPS = {
  username_input: 1,
  display_secure_password: 2,
  password_input: 3,
};

// Define the shape of the context
interface LoginFlowContextType {
  step: number;
  setStep: (step: number) => void;
  username: string;
  setUsername: (word: string) => void;
  secureWord: string;
  setSecureWord: (word: string) => void;
  password: string;
  setPassword: (word: string) => void;
}

// Create the context with default values
export const LoginFlowContext = createContext<LoginFlowContextType | undefined>(undefined);

// Provide the context to components
export const LoginFlowProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(LOGIN_FLOW_STEPS.username_input);
  const [username, setUsername] = useState("");
  const [secureWord, setSecureWord] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginFlowContext.Provider
      value={{
        step,
        setStep,
        secureWord,
        setSecureWord,
        username,
        setUsername,
        password,
        setPassword,
      }}
    >
      {children}
    </LoginFlowContext.Provider>
  );
};
