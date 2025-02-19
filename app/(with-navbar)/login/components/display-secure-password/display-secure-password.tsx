"use client";

import { LOGIN_FLOW_STEPS } from "@/app/(with-navbar)/steps";
import styles from "./display-secure-password.module.css";
import { useLoginFlow } from "@/app/(with-navbar)/hooks";

const DisplaySecurePassword = () => {
  const { secureWord, setStep } = useLoginFlow();

  return (
    <div className={styles.container}>
      <div className={styles.title}>Secure Word</div>
      <form className={styles.box} onSubmit={() => setStep(LOGIN_FLOW_STEPS.password_input)}>
        <h1>
          <span className={styles.secureWord}>{secureWord}</span>
        </h1>
        <button type="submit" className={styles.button}>
          Next
        </button>
      </form>
    </div>
  );
};

export default DisplaySecurePassword;
