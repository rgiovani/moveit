import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ChallengesContext } from '../../context/ChallengesContexts';
import styles from '../../styles/components/homePage/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    const { username } = useContext(AuthContext);
    return (

        <div className={styles.profileContainer}>
            <img
                src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                alt="User"
            />
            <div >
                <strong>{username}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}