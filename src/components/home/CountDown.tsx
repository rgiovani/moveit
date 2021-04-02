import { useContext, useEffect } from "react";

import styles from "../../styles/components/homePage/CountDown.module.css";

import { FaCheckCircle } from 'react-icons/fa'
import { CountdownContext } from "../../context/CountdownContext";
import { ChallengesContext } from "../../context/ChallengesContexts";

export function CountDown() {
    const { minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountDown
    } = useContext(CountdownContext);
    const { activeChallenge } = useContext(ChallengesContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div className={styles.container}>
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

            {
                activeChallenge ? (

                    <button
                        disabled
                        className={styles.countDownButton}
                    >
                        Ciclo encerrado
                        <FaCheckCircle className={styles.checkIcon} />
                    </button>

                ) : (
                    <>
                        {isActive ? (

                            <button
                                type="button"
                                className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                                onClick={resetCountDown}
                            >
                                Abandonar Ciclo
                            </button>

                        ) : (

                            <button
                                type="button"
                                className={styles.countDownButton}
                                onClick={startCountDown}
                            >
                                Iniciar um ciclo
                            </button>

                        )
                        }
                    </>
                )
            }


        </div >

    )
}
