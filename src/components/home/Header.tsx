import { useEffect, useState } from 'react';
import styles from '../../styles/components/homePage/Header.module.css';
import { ExperienceBar } from './ExperienceBar';



export function Header() {
    const [color, setColor] = useState("#231F20");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 35 && window.screen.width < 700) {
                setColor("#F2F3F5");
            } else if (window.scrollY > 150 && window.screen.width > 700) {
                setColor("#F2F3F5");
            } else {
                setColor("#231F20");

            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });


    return (
        <div className={styles.container} style={{ background: `${color}` }}>
            <div>
                <ExperienceBar />
            </div>
        </div >
    )

}