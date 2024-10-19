import { FormEvent } from "react";
import styles from "./username-input.module.css";
import { LOGIN_FLOW_STEPS } from "../../page";
import { useLoginFlow } from "@/app/(with-navbar)/hooks";

const UsernameInput = () => {
  const { username, setUsername, setStep, setSecureWord } = useLoginFlow();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("/api/getSecureWord")
      .then((response) => response.json())
      .then((data) => {
        setSecureWord(data.secureWord);
      });
    setStep(LOGIN_FLOW_STEPS.display_secure_password);
  };

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Enter your username"
        className={styles.input}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        Login
      </button>
    </form>
  );
};

export default UsernameInput;
