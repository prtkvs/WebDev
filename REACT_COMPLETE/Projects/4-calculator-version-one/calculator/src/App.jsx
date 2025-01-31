import styles from  "./App.module.css";

function App() {
  return (
    <div className={styles.calculator} >
      <input className={styles.display} type="text" />
      <div className={styles.buttonsContainer}>
        <button className={styles.buttons}>C</button>
        <button className={styles.buttons}>1</button>
        <button className={styles.buttons}>2</button>
        <button className={styles.buttons}>+</button>
      </div>
    </div>
  );
};

export default App;
