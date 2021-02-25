import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import styles from '../../styles/components/loginPage/AuthBox.module.css';

export function AuthBox() {
    const { userLogin, username, } = useContext(AuthContext);

    const [input, setInput] = useState('');

    const onChange = (event) => {
        setInput(event.target.value);
    }

    function login() {
        userLogin(input);
    }

    return (
        <div className={styles.authBoxContainer}>
            <div className={styles.authLoginBoxContainer}>

                <strong> Seu nome: </strong>
                <input type="text" value={input} onChange={onChange} />

                <button
                    type="button"
                    onClick={login}
                >
                    Vamos começar!
                </button>

            </div>
        </div>

    )
}