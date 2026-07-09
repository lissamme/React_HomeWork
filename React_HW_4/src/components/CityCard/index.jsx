import styles from "./CityCard.module.css";

function CityCard({ city }) {

  if (!city) {
    return <h2>Выберите город</h2>;
  }

  return (
    <div className={styles.card}>
        <h2 className={styles.title}>{city.name}</h2>

        <img
            src={city.imageUrl}
            alt={city.name}
            className={styles.image}
        />

        <p className={styles.description}>
            {city.description}
        </p>

        <h3 className={styles.subtitle}>
            Интересные факты
        </h3>

        <ul className={styles.list}>
            {city.facts.map((fact, index) => (
                <li
                    key={index}
                    className={styles.item}
                >
                    {fact}
                </li>
            ))}
        </ul>
    </div>
  );
}

export default CityCard;