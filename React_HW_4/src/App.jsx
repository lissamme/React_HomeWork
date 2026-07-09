import './App.css';
import { useState } from 'react';
import CitySelector from './components/CitySelector';
import CityCard from './components/CityCard';
import styles from "./App.module.css";
import MathQuiz from './components/MathQuiz'

function App() {

  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className={styles.app}>

      <CitySelector setSelectedCity={setSelectedCity} />

      <CityCard city={selectedCity} />

      <MathQuiz />

    </div>
  );
}

export default App;
