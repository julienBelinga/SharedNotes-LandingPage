import styles from "./categories.module.scss";
import CategorieItem from "@/app/components/ItemCategorie/categorieItem";
import noteIcon from "assests/prisedenotes.png";
import docIcon from "assests/dossier.png";
import commentIcon from "assests/commentaire.png";
import deviceIcon from "assests/synchronisation.png";
import fileIcon from "assests/piecesjointes.png";

export default function Categories() {
  return (
    <section className={styles.categories}>
      <h3 className={styles.titleCategories}>
        Organisez votre vie à plusieurs.
      </h3>
      <div className={styles.row}>
        <CategorieItem
          image={noteIcon}
          description=""
          text="Prise de notes collaborative en temps réel"
        />

        <CategorieItem
          image={docIcon}
          description="Icône Dossier"
          text="Organisation par dossiers, tags ou projets"
        />

        <CategorieItem
          image={commentIcon}
          description="Icône commentaire"
          text="Ajout de commentaires, réactions ou mentions"
        />

        <CategorieItem
          image={deviceIcon}
          description="Icône synchronisation appareils"
          text="Synchronisation automatique sur tous les appareils"
        />

        <CategorieItem
          image={fileIcon}
          description="Icpone pièces jointes"
          text="Ajout de pièces jointes et médias"
        />
      </div>
    </section>
  );
}
