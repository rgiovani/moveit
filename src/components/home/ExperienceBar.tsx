import { useContext } from 'react';
import { ChallengesContext } from '../../context/ChallengesContexts';
import styles from '../../styles/components/homePage/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round((currentExperience * 100)) / experienceToNextLevel;


    return (
        <header className={styles.experienceBar}>
            <span> 0xp </span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left: '50%' }}>
                    {currentExperience} xp
                </span>
            </div>
            <span> {experienceToNextLevel} xp </span>
        </header>
    );
}