import { useState } from 'react'
import styles from './Rating.module.css'

function Rating() {

    const [ratingValue, setRatingValue] = useState(0);

    const ratingList = [ 
        "https://commons.wikimedia.org/wiki/Special:FilePath/2%20stars.svg", 
        "https://commons.wikimedia.org/wiki/Special:FilePath/3%20stars.svg", 
        "https://commons.wikimedia.org/wiki/Special:FilePath/4%20stars.svg", 
        "https://commons.wikimedia.org/wiki/Special:FilePath/5%20stars.svg", 
    ];

    return (
        <div className={styles.rating}>
            <img src={ratingList[ratingValue]} alt="rating image" className={styles.ratingImg} />
            <button onClick={() => {setRatingValue(0)}} className={styles.ratingBtn}>Плохо</button>
            <button onClick={() => {setRatingValue(1)}} className={styles.ratingBtn}>Приемлемо</button>
            <button onClick={() => {setRatingValue(2)}} className={styles.ratingBtn}>Хорошо</button>
            <button onClick={() => {setRatingValue(3)}} className={styles.ratingBtn}>Отлично</button>
        </div>
    )

}

export default Rating