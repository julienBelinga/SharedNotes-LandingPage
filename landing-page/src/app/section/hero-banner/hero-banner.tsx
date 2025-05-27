import Image from "next/image";
import phone1 from "assests/phone.png";
import phone2 from "assests/phone.png";
import styles from "./hero-banner.module.scss";

export default function Herobanner() {
  return (
    <section className={styles.herobanner}>
      <h1 className={styles.titleSharedNotes}>Shared Notes</h1>
      <div className={styles.textHerobanner}>
        Partagez vos notes avec d’autre personne.
      </div>
      <button className={styles.button}>
        Télécharger dans
        <br />
        l’App Store
      </button>
      <button className={styles.button}>
        Télécharger sur
        <br />
        Google Play
      </button>
      <div className={styles.model}>
        <Image
          className={styles.phone1}
          src={phone1}
          alt="Maquette de téléphone 1"
          height={450}
        />
        {/* <Image 
          className={styles.phone2}
          src={phone2}
          alt="Maquette de téléphone 2"
        />*/}
      </div>
    </section>
  );
}
