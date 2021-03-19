import { useEffect, useState } from 'react';
import styles from '../../styles/components/homePage/HeaderMobile.module.css';
import { ExperienceBar } from './ExperienceBar';

const header = {
    speed: 8,
    scrollYLimit: 1,
    opacityInterval: 0.95,
    palette: {
        white: "#eaeaec",
        black: "#231F20",
    }
}

export function HeaderMobile() {
    const [textColor, setTextColor] = useState(header.palette.white);
    const [opacityInterval, setOpacityInterval] = useState(0);
    const [opacityTime, setOpacityTime] = useState(0);

    const [darkenHeader, setDarkenHeader] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > header.scrollYLimit) {
                setDarkenHeader(true)
                setTextColor(header.palette.white)
                setOpacityInterval(header.opacityInterval);
                setOpacityTime(0.25);
            } else {
                setDarkenHeader(false)
                setTextColor(header.palette.black)
                setOpacityInterval(0);
                setOpacityTime(0);
            };
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <header className={styles.container} style={{
            color: textColor,
            opacity: opacityInterval,
            transition: `opacity ${opacityTime}s linear`,
            WebkitTransition: `opacity ${opacityTime}s linear`,
            MozTransition: `opacity ${opacityTime}s linear`,
        }}>
            {
                darkenHeader && (
                    <div>
                        <div>
                            <ExperienceBar isMobile={true} />
                        </div>
                        <img src='./favicon.png' />
                    </div>
                )
            }
        </header>
    )
}
