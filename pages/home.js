import styles from '../styles/Home.module.css';

export default function Home() {
    return(
        <div className={styles.container}>
            <left>
                <div className={styles.divUser}>
                    <p>nome do arrombado</p>
                </div>
                <div className={styles.divUserInfo}>
                    <li>cargo:</li>
                    <li>Identificação:</li>
                </div>
            </left>
        </div>
    )
}