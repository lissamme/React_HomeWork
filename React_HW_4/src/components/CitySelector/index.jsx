import { useEffect } from "react";
import styles from "./CitySelector.module.css";
import tokyo from "../../assets/img/tokyo.jpg";
import kyoto from "../../assets/img/kyoto.jpg";
import osaka from "../../assets/img/osaka.jpg";
import hokkaido from "../../assets/img/hokkaido.jpg";
import nagoya from "../../assets/img/nagoya.jpg";

function CitySelector({ setSelectedCity }) {

  const citiesData = [
    {
      name: "Токио",
      description: "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
      imageUrl: tokyo ,
      facts: [
        "Токио - самый населенный мегаполис в мире.",
        "Здесь расположена самая высокая башня в Японии - Токийская башня.",
        "В Токио проходят множество культурных событий и фестивалей."
      ]
    },
    {
      name: "Киото",
      description: "Город на острове Хонсю, известный своими многочисленными храмами.",
      imageUrl: kyoto ,
      facts: [
        "В Киото более 1600 буддийских храмов.",
        "Этот город был столицей Японии более тысячи лет."
      ]
    },
    {
      name: "Осака",
      description: "Город в центральной части острова Хонсю.",
      imageUrl: osaka ,
      facts: [
        "Осака известна своим замком.",
        "Город является кулинарной столицей Японии."
      ]
    },
    {
      name: "Хоккайдо",
      description: "Самый северный остров Японии.",
      imageUrl: hokkaido,
      facts: [
        "Популярное место для зимних видов спорта.",
        "Летом известен лавандовыми полями."
      ]
    },
    {
      name: "Нагоя",
      description: "Крупный промышленный город Японии.",
      imageUrl: nagoya,
      facts: [
        "Центр автомобилестроения.",
        "Известен Нагойским замком."
      ]
    }
  ];

  useEffect(() => {
    setSelectedCity(citiesData[0]);
  }, []);

  function handleChange(event) {
    const city = citiesData.find(
      (item) => item.name === event.target.value
    );

    setSelectedCity(city);
  }

  return (
    <div className={styles.selector}>
        <h2 className={styles.title}>Выберите город</h2>
        <select
            className={styles.select}
            onChange={handleChange}
        >
            {citiesData.map((city) => (
            <option
                key={city.name}
                value={city.name}
            >
                {city.name}
            </option>
            ))}

      </select>

    </div>
  );
}

export default CitySelector;