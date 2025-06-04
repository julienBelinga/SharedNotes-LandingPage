"use client";

import Image from "next/image";
import logo from "assets/logoTop.png";
import styles from "@/app/components/navbar/navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.textNavbar}>
        <Image src={logo} alt="Logo" width={35} height={35} />
        <h3 className={styles.titleNavbar}>Shared Notes</h3>
        <p className={styles.download}>Télécharger</p>
      </div>
    </nav>
  );
}
