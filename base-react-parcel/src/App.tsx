import React from "react";
import pic from "./blade-runner.jpg";
import styles from './styles.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Parcel is Amazing!</h1>
      <img className={styles.polaroid} src={pic} />
      <p>Esse sunt officia non ex nulla occaecat ut labore labore pariatur cillum. In reprehenderit magna in aute minim ut aliquip. Commodo ut sunt exercitation ullamco qui nisi id deserunt quis sint. Culpa non voluptate irure excepteur. Fugiat velit do reprehenderit et Lorem aute cillum. Dolore excepteur tempor aliqua amet est voluptate aliqua dolor tempor cupidatat.</p>
    </div>
  );
}

export default App;
