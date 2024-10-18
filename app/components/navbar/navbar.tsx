"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Sidebar from "../sidebar/sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.menu}>
          <button className={styles.menuButton} onClick={toggleSidebar}>
            ☰
          </button>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.navLink}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/docs" className={styles.navLink}>
                Doc
              </Link>
            </li>
            <li>
              <Link href="/showcase" className={styles.navLink}>
                Showcase
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.loginButton}>
          <button className={styles.loginBtn}>
            <Link href="/login">Login</Link>
          </button>
        </div>
      </nav>

      {/* Overlay when sidebar is open */}
      {isOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}
      <Sidebar isOpen={isOpen} onToggle={toggleSidebar} />
    </div>
  );
};

export default Navbar;
