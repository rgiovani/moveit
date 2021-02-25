import Head from 'next/head';
import { AuthBox } from '../../components/login/AuthBox';
import styles from '../../styles/pages/Login.module.css';

export default function Login() {
    return (
        <div className={styles.containerAuth}>
            <Head>
                <title>Registre-se | move.it</title>
            </Head>
            <section>
                <AuthBox />
            </section>
        </div>
    )
}