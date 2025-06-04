import Image from "next/image";
import notesDesign from "assets/notes.png";
import styles from "./introduction.module.scss";

export default function Introduction() {
  return (
    <section className={styles.introduction}>
      <div className={styles.icon}>
        <Image
          className={styles.design}
          src={notesDesign}
          alt="Icône de notes"
          height={200}
          width={200}
        />
      </div>
      <div className={styles.textIntroduction}>
        <h3 className={styles.title}>
          Des fiches claires,
          <br />
          un partage facile
        </h3>
        <p className={styles.text}>
          Une application pour créer, organiser et partager vos notes avec votre
          équipe, vos amis ou vos camarades de classe.
        </p>
      </div>
    </section>
  );
}
