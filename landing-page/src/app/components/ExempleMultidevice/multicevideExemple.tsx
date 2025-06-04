import styles from "./multideviceExemple.module.scss";
import Image, { StaticImageData } from "next/image";

type MultideviceExempleProps = {
  image: string | StaticImageData;
  description: string;
};

export default function MultideviceExemple({
  image,
  description,
}: MultideviceExempleProps) {
  return (
    <div className={styles.screen}>
      <Image src={image} alt={description} />
    </div>
  );
}
