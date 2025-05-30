"use client";

import styles from "./categories.module.scss";
import CategorieItem from "@/app/components/ItemCategorie/categorieItem";
import noteIcon from "assets/prisedenotes.png";
import docIcon from "assets/dossier.png";
import commentIcon from "assets/commentaire.png";
import deviceIcon from "assets/synchronisation.png";
import fileIcon from "assets/piecesjointes.png";

import { useRef, useEffect } from "react";

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!scrollRef.current) return;
      // Empêche le défilement vertical natif
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        scrollRef.current.scrollLeft += e.deltaY;
      }
    };

    const scrollRow = scrollRef.current;
    scrollRow?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      scrollRow?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className={styles.categories}>
      <h3 className={styles.titleCategories}>
        Organisez votre vie à plusieurs.
      </h3>

      <div className={styles.scrollRow} ref={scrollRef}>
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
