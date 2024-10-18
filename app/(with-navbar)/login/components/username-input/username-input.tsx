import { useState } from "react";
import styles from "./username-input.module.css";
import { LOGIN_FLOW_STEPS } from "../login-flow-container/login-flow-container";

type Props = {
  onStepChange: (s: number) => void;
};

const UsernameInput = ({ onStepChange }: Props) => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    // Handle the login logic here
    alert(`Logged in as: ${username}`);
    onStepChange(LOGIN_FLOW_STEPS.display_secure_password);
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
