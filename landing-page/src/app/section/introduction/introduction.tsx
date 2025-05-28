import Image from "next/image";
import notesDesign from "assests/notes.png";
import styles from "./introduction.module.scss";

export default function Introduction() {
  return (
    <section className={styles.introduction}>
      <div>
        <Image
          src={notesDesign}
          alt="Icône de notes"
          height={100}
          width={100}
        />
      </div>
      <div>
        <h2>Des fiches claires, un partage facile</h2>
        <p>
          Une application pour créer, organiser et partager vos notes avec votre
          équipe, vos amis ou vos camarades de classe.
        </p>
      </div>
    </section>
  );
}
