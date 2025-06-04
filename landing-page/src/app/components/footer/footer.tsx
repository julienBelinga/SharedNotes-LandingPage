import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.listDownloads}>
        <li className={styles.listDownloadsTitle}>Download</li>
        <li>Android</li>
        <li>iOS</li>
      </ul>
    </footer>
  );
}
