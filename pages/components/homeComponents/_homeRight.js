import styles from '../../../styles/Home.module.css';
import HomeEntradaSaida from './_homeentradasaida';

export default function HomeRight() {
    return(
        <right>
                <div className={styles.containerHistorico}>
                    <div className={styles.head}>
                        <h1>Histórico de marcações</h1>
                    </div>
                    <div className={styles.subtitle}>
                        <p>12/04/2021</p>
                    </div>
                    <div className={styles.historicBox}>
                        <HomeEntradaSaida />
                        <div className={styles.horasTotal}>
                            <div className={styles.histoicBoxeInOut}>
                                <p>Horas trabalhadas</p>
                            </div>
                            <div className={styles.blueBox}>
                                <p className={styles.Horario}>8 Horas</p>
                            </div>
                        </div>
                        <div className={styles.horasTotal}>
                            <div className={styles.histoicBoxInOut}>
                                <p>Tempo exedido</p>
                            </div>
                            <div className={styles.blueBox}>
                                <p className={styles.Horario}>8 Horas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </right>
    )
}