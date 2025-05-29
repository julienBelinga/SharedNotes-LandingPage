import styles from "./categorieItem.module.scss";
import Image, { StaticImageData } from "next/image";

type CategorieItemProps = {
  image: string | StaticImageData;
  description: string;
  text: string;
};

export default function CategorieItem({
  image,
  description,
  text,
}: CategorieItemProps) {
  return (
    <div className={styles.argument}>
      <Image src={image} alt={description} width={100} height={100} />
      <div className={styles.textArgument}>{text}</div>
    </div>
  );
}
