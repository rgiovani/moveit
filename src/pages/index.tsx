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
import { useContext, useEffect, useState } from 'react';

import { CountDownProvider } from '../context/CountdownContext';
import { ChallengesProvider } from '../context/ChallengesContexts';
import { Header } from '../components/home/Header';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const { isLogged } = useContext(AuthContext);
  const [userScreenWidth, setUserScreenWidth] = useState(0);

  useEffect(() => {
    const handleDeviceWidth = () => {
      setUserScreenWidth(window.screen.width);
    }
    window.addEventListener('resize', handleDeviceWidth);
    window.addEventListener('pageshow', handleDeviceWidth);
    return () => {
      window.removeEventListener('resize', handleDeviceWidth)
      window.removeEventListener('pageshow', handleDeviceWidth)
    };
  })

  return (
    isLogged ? (
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >

        <ExperienceBar />
        {userScreenWidth > 700 && (
          <Header />
        )}


        <div className={styles.container}>
          <Head>
            <title>Inicio | move.it</title>
          </Head>

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