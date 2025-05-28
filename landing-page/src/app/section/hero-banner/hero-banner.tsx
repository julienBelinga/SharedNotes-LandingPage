import Image from "next/image";
import AppStore from "assests/AppStore.png";
import GooglePlay from "assests/GooglePlay.png";
import phone1 from "assests/phone.png";
import phone2 from "assests/phone.png";
import styles from "./hero-banner.module.scss";

export default function Herobanner() {
  return (
    <section className={styles.herobanner}>
      <div className={styles.side}>
        <h1 className={styles.titleSharedNotes}>Shared Notes</h1>
        <div className={styles.textHerobanner}>
          Partagez vos notes avec d'autre personne.
        </div>
        <div className={styles.divButtons}>
          <button className={styles.button}>
            <Image
              className={styles.appstore}
              src={AppStore}
              alt="Logo App Atore"
              width={50}
            />
          </button>
          <button className={styles.button}>
            <Image
              className={styles.appstore}
              src={GooglePlay}
              alt="Logo Google Play"
              width={50}
            />
          </button>
        </div>
      </div>
      <div className={styles.model}>
        <Image
          className={styles.phone1}
          src={phone1}
          alt="Maquette de téléphone 1"
        />
        <Image
          className={styles.phone2}
          src={phone2}
          alt="Maquette de téléphone 2"
        />
      </div>
    </section>
  );
}
