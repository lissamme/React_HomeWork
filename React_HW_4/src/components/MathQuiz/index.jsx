import { useState } from "react";
import Answer from "../Answer";
import styles from "./MathQuiz.module.css";

function MathQuiz() {

    const [points, setPoints] = useState(0);

    const [a, setA] = useState(() => Math.floor(Math.random() * 10) + 1);
    const [b, setB] = useState(() => Math.floor(Math.random() * 10) + 1);

    function updatePoints(answer) {

        if (Number(answer) === a + b) {
            setPoints(points + 1);
        } else {
            setPoints(points - 1);
        }
        setA(Math.floor(Math.random() * 10) + 1);
        setB(Math.floor(Math.random() * 10) + 1);
    }

    return (
        <div className={styles.quiz}>

            <h2>Math Quiz</h2>

            <h3>
                {a} + {b} = ?
            </h3>

            <p>Очки: {points}</p>

            <Answer updatePoints={updatePoints} />

        </div>
    )

}

export default MathQuiz;