import Image from "next/image";
import phoneSync from "assets/phoneSynchronisation.png";
import screenExemple1 from "assets/screen1.png";
import screenExemple2 from "assets/screen2.png";
import styles from "./multidevice.module.scss";

export default function Mutlidevice() {
  return (
    <section className={styles.multidevice}>
      <h3 className={styles.syncTitle}>Sur Android et iOS.</h3>
      <div className={styles.syncBloc}>
        <div className={styles.syncIconDiv}>
          <Image
            className={styles.syncIcon}
            src={phoneSync}
            alt="Synchronisation téléphones icônes"
          />
        </div>
        <div className={styles.syncText}>
          Notes partagées, mises à jour en temps réel, accessibles sur tous vos
          appareils.
        </div>
      </div>

      <div className={styles.text}>
        Checklist. Une application pour créer, organiser et partager vos notes
        avec votre équipe, vos amis ou vos camarades de classe.
      </div>

      <h3 className={styles.exempleTitle}>Exemple de pages</h3>
      <div className={styles.exempleBloc}>
        <Image
          className={styles.screens}
          src={screenExemple1}
          alt="Exemple de pages"
        />
        <Image
          className={styles.screens}
          src={screenExemple2}
          alt="Exemple de pages"
        />
      </div>
    </section>
  );
}
