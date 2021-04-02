import { useContext, useEffect, useState } from "react";

import { AiFillTrophy, AiOutlineTrophy, AiOutlineSetting, AiFillSetting } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import styles from '../../styles/components/homePage/FooterMobile.module.css';

import { AuthContext } from "../../context/AuthContext";
import { RankingContext } from "../../context/RankingContext";
import { CountdownContext } from "../../context/CountdownContext";

const outlineIcons = {
    play: FiPlay,
    trophy: AiOutlineTrophy,
    setting: AiOutlineSetting,
    logout: BiLogOut,
    color: '#646668'
}

const filIcons = {
    play: FaPlay,
    trophy: AiFillTrophy,
    setting: AiFillSetting,
    color: 'white'
}

function initIcons(IconID, color = '#646668') {
    let button = { color: color, iconStyle: undefined };
    (IconID == 0) && (button.iconStyle = outlineIcons.play);
    (IconID == 1) && (button.iconStyle = outlineIcons.trophy);
    (IconID == 2) && (button.iconStyle = outlineIcons.setting);
    (IconID == 3) && (button.iconStyle = outlineIcons.logout);

    return button;
}

export function FooterMobile() {
    const { logout } = useContext(AuthContext);
    const { showRanking, isRankingPageOnFocus } = useContext(RankingContext);
    const { isActive, setIsActiveCondition } = useContext(CountdownContext);

    const [buttonOnFocus, setButtonOnFocus] = useState(0);
    const [playButton, setPlayButton] = useState(initIcons(0));
    const [trophyButton, setTrophyButton] = useState(initIcons(1));
    const [settingsButton, setSettingsButton] = useState(initIcons(2));
    const [logoutButton, setLogoutButton] = useState(initIcons(3));


    function selectButton(buttonId: number) {
        setButtonOnFocus(buttonId)
    }

    function resetIcons() {
        setPlayButton({ color: '#646668', iconStyle: FiPlay })
        setTrophyButton({ color: '#646668', iconStyle: AiOutlineTrophy })
        setSettingsButton({ color: '#646668', iconStyle: AiOutlineSetting })
        setLogoutButton({ color: '#646668', iconStyle: BiLogOut })
    }

    useEffect(() => {

        switch (buttonOnFocus) {
            case 0:
                resetIcons();
                setPlayButton({ color: 'white', iconStyle: FaPlay })
                break;
            case 1:
                resetIcons();
                setTrophyButton({ color: 'white', iconStyle: AiFillTrophy })
                break;
            case 2:
                resetIcons();
                setSettingsButton({ color: 'white', iconStyle: AiFillSetting })
                break;
            default:
                break;
        }

        if (isRankingPageOnFocus) {
            resetIcons();
            setTrophyButton({ color: 'white', iconStyle: AiFillTrophy })
            selectButton(1);
        }
    }, [buttonOnFocus])

    function switchToHomePage() {
        selectButton(0);
        showRanking(false);
    }

    function switchToRankPage() {
        selectButton(1);
        showRanking(true);
    }

    function switchToSettingsPage() {
        selectButton(2)
        showRanking(false);
    }

    return (
        <div className={styles.container}>
            <div>
                <button onClick={switchToHomePage}>
                    <playButton.iconStyle style={{ color: playButton.color }} />
                    <span>
                        Inicio
                    </span>
                </button>

                <button onClick={switchToRankPage}>
                    <trophyButton.iconStyle style={{ color: trophyButton.color }} />
                    <span>
                        Classificação
                    </span>
                </button>

                <button onClick={switchToSettingsPage} >
                    <settingsButton.iconStyle style={{ color: settingsButton.color }} />
                    <span>
                        Configurações
                    </span>
                </button>

                <button onClick={logout}>
                    <logoutButton.iconStyle style={{ color: logoutButton.color }} />
                    <span>
                        Sair
                    </span>
                </button>
            </div>
        </div>
    )
}