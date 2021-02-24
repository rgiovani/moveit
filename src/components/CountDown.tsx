import { useEffect, useState } from "react";
import styles from "../styles/components/CountDown.module.css";

export function CountDown() {
    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    //padstart: preenche a esquerda da conversão com 0 caso o minuto/segundo seja unítario e não uma dezena.
    //5 '5' -> '05' '0' '5'
    //25 '2' '5'
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCoundDown() {
        setActive(true);

    }

    useEffect(() => {
        if (active && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
    }, [active, time])

    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            <button
                type="button"
                className={styles.countDownButton}
                onClick={startCoundDown}
            >
                Iniciar um ciclo
            </button>

        </div>

    )
}