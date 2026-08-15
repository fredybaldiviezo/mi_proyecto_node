import styles from "./Navbar.module.css";

function Navbar({ titulo, links }) {
  return (
    <nav className={styles.navbar}>
      <h1>{titulo}</h1>

      <div className={styles.links}>
        {links.map((link, index) => (
          <span key={index}>{link}</span>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;