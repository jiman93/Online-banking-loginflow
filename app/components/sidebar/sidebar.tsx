import styles from "./sidebar.module.css";
import Link from "next/link";

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

const Sidebar = ({ isOpen, onToggle }: Props) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.sidebarSearch}>
        <input type="text" placeholder="Search..." className={styles.input} />
        <button className={styles.closeButton} onClick={onToggle}>
          &times;
        </button>
      </div>
      <div className={styles.sidebarTop}>
        <button className={styles.loginBtn}>
          <Link href="/login">Login</Link>
        </button>
      </div>

      <ul className={styles.sidebarLinks}>
        <li>
          <Link href="/" className={styles.sidebarLink}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.sidebarLink}>
            About
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.sidebarLink}>
            Contact
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.sidebarLink}>
            Doc
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.sidebarLink}>
            Showcase
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
