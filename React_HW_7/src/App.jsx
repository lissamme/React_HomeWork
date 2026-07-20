import styles from "./App.module.css";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Text from "./components/Text";

function App() {
  return (
    <div className={styles.container}>
      <Text />
      <LanguageSwitcher />
    </div>
  );
}

export default App;
