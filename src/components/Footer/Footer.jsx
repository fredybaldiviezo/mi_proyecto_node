import styles from "./Footer.module.css";

function Footer({ texto, anio }) {
  return (
    <footer className={styles.footer}>
      <p>{texto}</p>
      <p>{anio}</p>
    </footer>
  );
}

export default Footer;