import Image from "next/image";
import AppStore from "assests/AppStore.png";
import GooglePlay from "assests/GooglePlay.png";
import phoneFrame1 from "assests/phone.png";
import phoneFrame2 from "assests/phone.png";
import screenContent1 from "assests/test.jpg";
import screenContent2 from "assests/test2.jpg";
import styles from "./hero-banner.module.scss";

export default function Herobanner() {
  return (
    <section className={styles.herobanner}>
      <div className={styles.divTitleText}>
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

        <div className={styles.phoneFrameContainer}>
          <Image
            className={styles.phoneScreen2}
            src={screenContent2}
            alt="Contenu de l'écran"
          />

          <Image
            className={styles.phoneFrame2}
            src={phoneFrame2}
            alt="Maquette de téléphone 2"
          />
        </div>
      </div>
    </section>
  );
}
