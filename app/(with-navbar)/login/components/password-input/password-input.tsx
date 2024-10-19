import { useLoginFlow } from "@/app/(with-navbar)/hooks";
import CryptoJS from "crypto-js";
import styles from "./password-input.module.css";
import { useRouter } from "next/navigation";

const PasswordInput = () => {
  const { password, setPassword } = useLoginFlow();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Generate a secret key (could be predefined or dynamically generated)
    const secretKey = process.env.NEXT_PUBLIC_PASSWORD_KEY || ""; // Make sure to use a secure key

    // Encrypt the password using AES encryption
    const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();

    // Send the encrypted password to the API
    await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        encryptedPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.result);
      });

    router.push("/transactions");
  };

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <input
        type="password"
        placeholder="Enter your password"
        className={styles.input}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default PasswordInput;
