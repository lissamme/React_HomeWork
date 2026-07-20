import { useContext } from "react";
import { LanguageContext } from "../../context/index";
import styles from "./LanguageSwitcher.module.css";

function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);

  const changeLanguage = () => {
    if (language === "en") {
      setLanguage("ru");
    } else if (language === "ru") {
      setLanguage("de");
    } else {
      setLanguage("en");
    }
  };
  return (
    <button onClick={changeLanguage} className={styles.button}>
      Switch Language
    </button>
  );
}

export default LanguageSwitcher;
