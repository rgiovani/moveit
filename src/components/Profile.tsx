import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (

        <div className={styles.profileContainer}>
            <img
                src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                alt="User"
            />
            <div >
                <strong>Ronaldo Giovani</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}