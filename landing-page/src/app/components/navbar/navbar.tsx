"use client";

import styles from "@/app/components/navbar/navbar.module.scss";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div>
        <p className={styles.titleNavbar}>Shared Notes</p>
        <p className={styles.download}></p>
      </div>
    </nav>
  );
}
