import { useContext, useEffect, useState } from 'react';

import { GetServerSideProps } from 'next';
import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

import { AuthContext } from '../context/AuthContext';
import { CompletedChallenges } from "../components/home/CompletedChallenges";
import { CountDown } from "../components/home/CountDown";
import { ChallengeBox } from '../components/home/ChallengeBox';
import { ExperienceBar } from "../components/home/ExperienceBar";
import { Profile } from "../components/home/Profile";

import Login from './login/';
import Ranking from './ranking/';

import { CountDownProvider } from '../context/CountdownContext';
import { ChallengesProvider } from '../context/ChallengesContexts';
import { Header } from '../components/home/Header';
import { HeaderMobile } from '../components/home/HeaderMobile';
import { FooterMobile } from '../components/home/FooterMobile';
import { RankingContext } from '../context/RankingContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const { isLogged } = useContext(AuthContext);
  const { isRankingPageOnFocus } = useContext(RankingContext);

  const [userScreenWidth, setUserScreenWidth] = useState(0);
  const [isExperiencebarHidden, setExperiencebarHidden] = useState(false);

  let top = 1;

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 1) {
        setExperiencebarHidden(true);
      } else {
        setExperiencebarHidden(false);
      }
    }

    const handleDeviceWidth = () => {
      setUserScreenWidth(window.screen.width);
    }

    window.addEventListener('resize', handleDeviceWidth);
    window.addEventListener('pageshow', handleDeviceWidth);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleDeviceWidth)
      window.removeEventListener('pageshow', handleDeviceWidth)
      window.removeEventListener('scroll', handleScroll)
    };
  })

  function getTopDistance() {
    if (isExperiencebarHidden) {
      top = (userScreenWidth < 700) ? 3.98 : 1;
    } else {
      top = (userScreenWidth < 700) ? 0.5 : 1;
    }
    return top;
  }

  function isHomeFocus() {
    return (!isRankingPageOnFocus && isLogged)
  }

  function isRankingFocus() {
    return (isRankingPageOnFocus && isLogged)
  }

  function renderHeaderAndOrFooter() {
    if (userScreenWidth > 700) {
      return (
        <>
          {(isHomeFocus()) && (
            <>
              <ExperienceBar isMobile={false} />
            </>
          )}
          <Header />
        </>
      )
    } else {
      return (
        <>
          {(isHomeFocus()) && (
            <>
              {
                (!isExperiencebarHidden) && (
                  <ExperienceBar isMobile={true} />
                )
              }
              <HeaderMobile />
            </>
          )}

          <FooterMobile />
        </>
      )
    }
  }

  return (
    (isLogged) ? (
      <div style={{ marginTop: `${getTopDistance()}rem` }}>
        <ChallengesProvider
          level={props.level}
          currentExperience={props.currentExperience}
          challengesCompleted={props.challengesCompleted}
        >

          {renderHeaderAndOrFooter()}

          {
            (isHomeFocus()) ? (
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
            ) : (
              (isRankingFocus()) ? (
                <Ranking />
              ) : (
                <div>
                  settings
                </div>
              )
            )
          }

        </ChallengesProvider>
      </div>
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