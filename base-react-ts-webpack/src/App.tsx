import React from 'react'
import pic from "./blade-runner.jpg";
import styles from './styles.css';

const App: React.FC = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Webpack is Amazing!</h1>
      <img className={styles.polaroid} src={pic} />
      <p>Yo he visto cosas que vosotros no creeríais. Atacar naves en llamas más allá de Orión. He visto rayos-C brillar en la oscuridad cerca de la Puerta de Tannhäuser. Todos esos momentos se perderán en el tiempo, como lágrimas en la lluvia. Es hora de morir.</p>
    </div>
  );
}

export default App;