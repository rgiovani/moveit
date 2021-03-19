import { useContext, useEffect, useState } from 'react';

import { FiSettings, FiPlay } from "react-icons/fi";
import { AiOutlineTrophy } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

import { AuthContext } from '../../context/AuthContext';
import styles from '../../styles/components/homePage/Header.module.css';
import { RankingContext } from '../../context/RankingContext';

const palette = {
    white: "#D1D3D4",
    black: "#231F20",
    buttonOnFocus: "#F2F3F5",
    buttonOutFocus: "#58595B"
}

export function Header() {
    const { logout } = useContext(AuthContext);
    const { showRanking } = useContext(RankingContext);

    const [playIconColor, setPlayIconColor] = useState(palette.buttonOutFocus);
    const [trophyIconColor, setTrophyIconColor] = useState(palette.buttonOutFocus);
    const [settingsIconColor, setSettingsIconColor] = useState(palette.buttonOutFocus);

    const [buttonPlaySize, setButtonPlaySize] = useState(45);
    const [buttonTrophySize, setButtonTrophySize] = useState(25);
    const [buttonSettingSize, setButtonSettingSize] = useState(20);
    const [buttonOnFocusId, setButtonOnFocusId] = useState(0);

    const [maxButtonSize, setMaxButtonSize] = useState(45);
    const [maxWidthScreen, setMaxWidthScreen] = useState(1000);

    function switchToHomePage() {
        setButtonOnFocusId(0);
        showRanking(false);
    }

    function switchToRankPage() {
        setButtonOnFocusId(1);
        showRanking(true);
    }

    useEffect(() => {
        setMaxWidthScreen(window.screen.width);
    });

    useEffect(() => {
        if (maxWidthScreen > 1900) {
            setMaxButtonSize(45);
        } else if (maxWidthScreen < 1400) {
            setMaxButtonSize(35);
        }

        function setButtonIconColors(playButton: string, trophyButton: string, settingButton: string) {
            setPlayIconColor(playButton);
            setTrophyIconColor(trophyButton);
            setSettingsIconColor(settingButton);
        }

        function changeButtonSizeOnFocus(playButton: number, trophyButton: number, settingsButton: number) {
            setButtonPlaySize(playButton);
            setButtonTrophySize(trophyButton);
            setButtonSettingSize(settingsButton);

            if (playButton === maxButtonSize) {
                setButtonIconColors(palette.buttonOnFocus, palette.buttonOutFocus, palette.buttonOutFocus);
            } else if (trophyButton === maxButtonSize) {
                setButtonIconColors(palette.buttonOutFocus, palette.buttonOnFocus, palette.buttonOutFocus);
            } else if (settingsButton === maxButtonSize) {
                setButtonIconColors(palette.buttonOutFocus, palette.buttonOutFocus, palette.buttonOnFocus);
            } else {
                setButtonIconColors(palette.buttonOutFocus, palette.buttonOutFocus, palette.buttonOutFocus);
            }
        }

        switch (buttonOnFocusId) {
            case 0:
                changeButtonSizeOnFocus(maxButtonSize, 25, 20);
                break;

            case 1:
                changeButtonSizeOnFocus(25, maxButtonSize, 20);
                break;

            case 2:
                changeButtonSizeOnFocus(25, 25, maxButtonSize);
                break;

            default:
                break;
        }
    })

    return (

        <header className={styles.container}>

            <img src='./favicon.png' />

            <div className={styles.buttonsContainer}>
                <button onClick={switchToHomePage}>
                    <FiPlay style={{
                        color: playIconColor,
                        fontSize: `${buttonPlaySize}px`,
                        marginRight: '10px',
                    }} />

                </button>
            </div>

            <div className={styles.buttonsContainer}>
                <button onClick={switchToRankPage}>
                    <AiOutlineTrophy style={{
                        color: trophyIconColor,
                        fontSize: `${buttonTrophySize}px`,
                        marginRight: '10px',

                    }} />
                </button>
            </div>

            <div className={styles.buttonsContainer} >
                <button onClick={() => setButtonOnFocusId(2)}>
                    <FiSettings style={{
                        color: settingsIconColor,
                        fontSize: `${buttonSettingSize}px`,
                        marginRight: '10px',
                    }} />
                </button>
            </div>

            <div className={styles.logoutButton}>
                <button
                    style={{ color: palette.buttonOutFocus, fontSize: '25px', marginRight: '5px' }}
                    onClick={logout}
                >
                    <BiLogOut />
                </button>
            </div>

        </header >
    )

}