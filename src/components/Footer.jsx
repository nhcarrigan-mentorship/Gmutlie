import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.tagline}>
        💜 You are seen. You are heard. You are never alone.
      </p>
      <p className={styles.note}>
        Gmutlie is a safe, anonymous space for teens and youth. All stories are
        shared anonymously. If you are in immediate danger, please call{" "}
        <strong>911</strong> or a local emergency service.
      </p>
      <p className={styles.copy}>© {new Date().getFullYear()} Gmutlie</p>
    </footer>
  );
}
