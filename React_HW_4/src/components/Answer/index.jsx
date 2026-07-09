import { useState } from "react";
import styles from "./Answer.module.css";

function Answer({ updatePoints }) {

    const [answer, setAnswer] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        updatePoints(answer);

        setAnswer("");
    }

    return (

        <form
            onSubmit={handleSubmit}
            className={styles.form}
        >

            <input
                type="number"
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                placeholder="Введите ответ"
                className={styles.input}
            />

            <button
                type="submit"
                className={styles.button}
            >
                Проверить
            </button>

        </form>

    )

}

export default Answer;