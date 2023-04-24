import React from "react";
import styles from "./App.module.scss";
import Button from "./components/Button";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container} id="drum-machine">
        <div className={styles.pad}>
          <Button id="Q">Q</Button>
          <Button id="W">W</Button>
          <Button id="E">E</Button>
          <Button id="A">A</Button>
          <Button id="S">S</Button>
          <Button id="D">D</Button>
          <Button id="Z">Z</Button>
          <Button id="X">X</Button>
          <Button id="C">C</Button>
        </div>
        <div className={styles.controls}></div>
      </div>
    </div>
  );
}

export default App;
