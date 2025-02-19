"use client";

import UsernameInput from "./components/username-input/username-input";
import DisplaySecurePassword from "./components/display-secure-password/display-secure-password";
import PasswordInput from "./components/password-input/password-input";
import styles from "./page.module.css";
import { useLoginFlow } from "../hooks";
import { LOGIN_FLOW_STEPS } from "../steps";

const LoginFlowContainer = () => {
  const { step } = useLoginFlow();

  const render = () => {
    if (step === LOGIN_FLOW_STEPS.username_input) return <UsernameInput />;
    if (step === LOGIN_FLOW_STEPS.display_secure_password) return <DisplaySecurePassword />;
    if (step === LOGIN_FLOW_STEPS.password_input) return <PasswordInput />;
  };

  return <div className={styles.container}>{render()}</div>;
};

export default LoginFlowContainer;
