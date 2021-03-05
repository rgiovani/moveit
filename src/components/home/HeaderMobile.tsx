import { useEffect, useState } from 'react';
import styles from '../../styles/components/homePage/HeaderMobile.module.css';

const palette = {
    white: "#eaeaec",
    black: "#231F20",
    borderBottom: "#e6e6e6",
    buttonOnFocus: "#F2F3F5",
    buttonOutFocus: "#58595B",
}

let countDownTimeOut: NodeJS.Timeout;

export function HeaderMobile() {
    const [redColor, setRedColor] = useState(240);
    const [greenColor, setGreenColor] = useState(240);
    const [blueColor, setBlueColor] = useState(240);
    const [opacity, setOpacity] = useState(90);
    const [textColor, setTextColor] = useState(palette.white);

    const [darkenHeader, setDarkenHeader] = useState(false);

    const transitionHeaderColorSpeed = 8;

    useEffect(() => {
        const handleScroll = () => {
            (window.scrollY > 35) ? setDarkenHeader(true) : setDarkenHeader(false);;
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    useEffect(() => {
        const setRgbaHeader = (red: number, green: number, blue: number, opacity: number) => {
            if (red >= 0 && red < 240) {
                setRedColor(red);
                setGreenColor(green);
                setBlueColor(blue);
            }
            setOpacity(opacity);
        }

        const changeHeaderOpacity = (opacityLimit: number, textColor: string) => {
            const darkenOpacity = (opacity < opacityLimit && darkenHeader);
            const lightenOpacity = (opacity > opacityLimit && !darkenHeader);

            countDownTimeOut = setTimeout(() => {
                if (darkenOpacity) {
                    setRgbaHeader(redColor - 20, greenColor - 20, blueColor - 20, opacity + 1);
                } else if (lightenOpacity) {
                    setRgbaHeader(redColor + 20, greenColor + 20, blueColor + 20, opacity - 1);
                } else {
                    clearTimeout(countDownTimeOut);
                }
            }, transitionHeaderColorSpeed);

            setTextColor(textColor);
        }

        (darkenHeader) ? changeHeaderOpacity(100, palette.white) : changeHeaderOpacity(90, palette.black);

    }, [darkenHeader, opacity])

    return (

        <header className={styles.container} style={{
            background: `rgba(${redColor}, ${greenColor}, ${blueColor}, ${opacity})`,
            color: textColor
        }}>

            <img src='./favicon.png' />

        </header>

    )
}