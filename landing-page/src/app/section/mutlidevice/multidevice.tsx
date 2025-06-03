import Image from "next/image";
import phoneSync from "assets/phoneSynchronisation.png";
import screenExemple1 from "assets/appExemple1.jpg";
import screenExemple2 from "assets/appExemple2.jpg";
import styles from "./multidevice.module.scss";
import MultideviceExemple from "@/app/components/ExempleMultidevice/multicevideExemple";

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

      <h3 className={styles.exempleTitle}>Facile et intuitive</h3>
      <div className={styles.exempleBloc}>
        <MultideviceExemple
          image={screenExemple1}
          description="Exemple de page 1"
        />
        <MultideviceExemple
          image={screenExemple2}
          description="Exemple de page 2"
        />
      </div>
    </section>
  );
}
