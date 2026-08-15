import styles from "./Main.module.css";

function Main({ titulo, descripcion, items }) {
  return (
    <main className={styles.main}>
      <h2>{titulo}</h2>

      <p>{descripcion}</p>

      <div className={styles.items}>
        {items.map((item, index) => (
          <div className={styles.item} key={index}>
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;