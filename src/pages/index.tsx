import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

import { CompletedChallenges } from "../components/home/CompletedChallenges";
import { CountDown } from "../components/home/CountDown";
import { ChallengeBox } from '../components/home/ChallengeBox';
import { ExperienceBar } from "../components/home/ExperienceBar";
import { Profile } from "../components/home/Profile";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Login from './login/';
import { CountDownProvider } from '../context/CountdownContext';

export default function Home() {
  const { isLogged } = useContext(AuthContext);
  return (
    isLogged ? (
      <div className={styles.container}>

        <Head>
          <title>Inicio | move.it</title>
        </Head>

        <ExperienceBar />

        <CountDownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>

      </div>
    ) : (
        <Login />
      )

  )
}
