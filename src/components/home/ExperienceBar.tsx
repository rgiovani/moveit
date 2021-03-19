import { CSSProperties, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../../context/ChallengesContexts';
import styles from '../../styles/components/homePage/ExperienceBar.module.css';

interface headerSizeProps {
    isMobile: boolean;
}

export function ExperienceBar(children: headerSizeProps) {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    const percentToNextLevel = Math.round((currentExperience * 100)) / experienceToNextLevel;

    function getDeviceStyle() {
        if (children?.isMobile) {
            return {
                paddingTop: `1.5rem`,
                marginTop: '2%',
                transform: 'translateY(-25%)',
            }
        }
        return {
            paddingTop: '95xp'
        }
    }

    return (
        <div className={styles.experienceBar} style={getDeviceStyle()}>
            <span> 0xp </span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />

                <span className={styles.currentExperience} style={{ left: '50%' }}>
                    {currentExperience} xp
                </span>
            </div>
            <span> {experienceToNextLevel} xp </span>
        </div>

    );
}