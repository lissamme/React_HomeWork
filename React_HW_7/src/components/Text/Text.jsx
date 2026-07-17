import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./Text.module.css";

function Text() {
  const { language } = useContext(LanguageContext);

  const translations = {
    en: "English language was chosen",
    ru: "Был выбран русский язык",
    de: "Die deutsche Sprache wurde ausgewählt",
  };

  return (
    <h1 className={styles.title}>
        {translations[language]}
    </h1>
  );
}

export default Text;