import styles from '../styles/Home.module.css';

import HomeRight from './components/homeComponents/_homeRight';

export default function Home() {
    return(
        <div className={styles.container}>
            <left>
                <div className={styles.divUser}>
                    <h1>nome do arrombado</h1>
                </div>
                <div className={styles.divUserInfo}>
                    <li>cargo:</li>
                    <li>Identificação:</li>
                    <li>Horas trabalhadas:</li>
                </div>
            </left>
            <HomeRight />
        </div>
    )
}