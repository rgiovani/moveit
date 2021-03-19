import { useEffect, useState } from 'react';
import Head from 'next/head';

import styles from '../../styles/pages/Ranking.module.css';

export function Ranking() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        (window.screen.width <= 700) ? setIsMobile(true) : setIsMobile(false)
    })

    const users = [{
        name: "Ronaldo Giovani"
    }]

    return (
        <div>
            <Head>
                <title>Ranking | move.it</title>
            </Head>

            <div className={styles.title}>
                <h1 style={{ marginBottom: '10px' }}>
                    Leaderboard
                </h1>
            </div>

            <div className={styles.descriptionsContainer}>
                <div>
                    <div className={styles.positionText}>
                        POSIÇÃO
                    </div>

                    <div>
                        USUÁRIO
                    </div>
                </div>

                {
                    (isMobile) ? (
                        <div>

                            <div className={styles.challengeTextMobile}>
                                DESAFIOS/EXPERIÊNCIA
                            </div>
                        </div>

                    ) : (
                        <div>
                            <div className={styles.challengeText}>
                                DESAFIOS
                            </div>

                            <div>
                                EXPERIÊNCIA
                            </div>
                        </div>
                    )
                }

            </div>

            <div className={styles.usersContainer}>
                <div className={styles.cardsContainer}>
                    <section className={styles.leftCard}>

                        <strong >1</strong>


                    </section>
                    <section className={styles.rightCard}>

                        <div className={styles.userContainer}>
                            <img
                                src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                                alt="User"
                            />
                            <div>
                                <strong>{`${users[0].name}`}</strong>
                                <p>
                                    <img src="icons/level.svg" alt="Level" />
                                    Level 1
                                </p>
                            </div>
                        </div>

                        <div className={styles.status}>
                            <div className={styles.statusXP}>
                                <strong style={{ marginRight: '5px', textAlign: 'right' }}>
                                    0
                                </strong>
                                completados
                            </div>

                            <div className={styles.statusChallenge} >
                                <div>
                                    <strong style={{ marginRight: '5px', textAlign: 'right' }}>
                                        0
                                    </strong>
                                    xp
                                </div>

                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </div >

    )
}