import Head from 'next/head';
import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Home.module.css';

import { AuthContext } from '../context/AuthContext';
import { CompletedChallenges } from "../components/home/CompletedChallenges";
import { CountDown } from "../components/home/CountDown";
import { ChallengeBox } from '../components/home/ChallengeBox';
import { ExperienceBar } from "../components/home/ExperienceBar";
import Login from './login/';
import { Profile } from "../components/home/Profile";
import { useContext } from 'react';

import { CountDownProvider } from '../context/CountdownContext';
import { ChallengesProvider } from '../context/ChallengesContexts';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props) {
  const { isLogged } = useContext(AuthContext);
  return (
    isLogged ? (
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
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
      </ChallengesProvider>
    ) : (
        <Login />
      )

  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  if (level && currentExperience && challengesCompleted) {
    return {
      props: {
        level: Number(level),
        currentExperience: Number(currentExperience),
        challengesCompleted: Number(challengesCompleted)
      }
    };
  }

  return {
    props: {}
  }

}