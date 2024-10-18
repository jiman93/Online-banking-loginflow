"use client";
import { useState } from "react";
import styles from "./login-flow-container.module.css";
import UsernameInput from "../username-input/username-input";

export const LOGIN_FLOW_STEPS = {
  username_input: 1,
  display_secure_password: 2,
  password_input: 3,
};

const LoginFlowContainer = () => {
  const [step, setStep] = useState(LOGIN_FLOW_STEPS.username_input);

  return (
    <div className={styles.container}>{step === 1 && <UsernameInput onStepChange={setStep} />}</div>
  );
};

export default LoginFlowContainer;
