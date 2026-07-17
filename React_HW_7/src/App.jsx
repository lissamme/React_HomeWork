import styles from "./App.module.css";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import Text from "./components/Text/Text";

function App() {
  return (
    <div className={styles.container}>
      <Text />
      <LanguageSwitcher />
    </div>
  );
}

export default App;
