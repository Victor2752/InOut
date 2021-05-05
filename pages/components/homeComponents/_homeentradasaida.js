import styles from '../../../styles/Home.module.css';

export default function HomeEntradaSaida() {
    return (
        <div className={styles.HistoricoEntradaSaida}>
            <div className={styles.histoicBoxeInOut}>
                <p>Horario</p>
                <p>Entrada/Saída</p>
            </div>
            <div className={styles.HomeEntradaSaida}>
                <div className={styles.in}>
                    <p className={styles.Horario}>10:00</p>
                    <p className={styles.Type}>Entrada</p>
                </div>
                <div className={styles.out}>
                    <p className={styles.Horario}>14:00</p>
                    <p className={styles.Type}>Saída</p>
                </div>
                <div className={styles.in}>
                    <p className={styles.Horario}>10:00</p>
                    <p className={styles.Type}>Entrada</p>
                </div>
                <div className={styles.out}>
                    <p className={styles.Horario}>14:00</p>
                    <p className={styles.Type}>Saída</p>
                </div>
            </div>
        </div>
    )
}