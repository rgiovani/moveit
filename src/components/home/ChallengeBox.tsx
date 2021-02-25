import { useContext } from 'react';

import styles from '../../styles/components/homePage/ChallengeBox.module.css';

import { ChallengesContext } from '../../context/ChallengesContexts';
import { CountdownContext } from '../../context/CountdownContext';


export function ChallengeBox() {
    const { activeChallenge, completeChallenge, resetChallenge } = useContext(ChallengesContext);
    const { resetCountDown } = useContext(CountdownContext);

    function handleChallengeSucceded() {
        completeChallenge();
        resetCountDown();
    }

    function handleChallengeFailed() {
        resetCountDown();
        resetChallenge();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei</button>
                        <button
                            type="button"
                            className={styles.challengeSuccededButton}
                            onClick={handleChallengeSucceded}
                        >
                            Completei</button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio.</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                            <p> Avance de level completando desafios. </p>
                        </p>
                    </div>
                )
            }
        </div >
    )
}