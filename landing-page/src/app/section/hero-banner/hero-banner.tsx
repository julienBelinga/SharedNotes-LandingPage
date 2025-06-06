import Image from "next/image";
import AppStore from "assets/AppStore.png";
import GooglePlay from "assets/googeplay.png";
import phoneFrame1 from "assets/phone2.png";
import screenContent1 from "assets/screenExemple2.jpg";
import styles from "./hero-banner.module.scss";

export default function Herobanner() {
  return (
    <section className={styles.herobanner}>
      <div className={styles.divTitleText}>
        <h1 className={styles.titleSharedNotes}>Shared Notes</h1>
        <div className={styles.textHerobanner}>
          Partagez vos notes avec d&apos;autre personne.
        </div>
        <div className={styles.divButtons}>
          <button className={styles.button}>
            <Image
              className={styles.appstore}
              src={AppStore}
              alt="Logo App Atore"
            />
          </button>
          <button className={styles.button}>
            <Image
              className={styles.appstore}
              src={GooglePlay}
              alt="Logo Google Play"
            />
          </button>
        </div>
      </div>
      <div className={styles.model}>
        <div className={styles.phoneFrameContainer}>
          <Image
            className={styles.phoneScreen1}
            src={screenContent1}
            alt="Contenu de l'écran"
          />

          <Image
            className={styles.phoneFrame1}
            src={phoneFrame1}
            alt="Maquette de téléphone 1"
          />
        </div>
      </div>
    </section>
  );
}
