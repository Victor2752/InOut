import styles from '../../styles/Login.module.css'

export default function UseCodigoVerifica() {
    return(
        <right>
        <div className={styles.boxR}>
            <h1>
                Recuperar Senha
            </h1>
            <div className={styles.boxR}>
                <p>codigo de recuperação da conta</p>
                <input type='text' value='Codigo Verificação' className={styles.Box} />
                <button className={styles.btnEntra}>
                    <a href='/nova-senha'>
                        Verificar codigo
                    </a>
                </button>
            </div>
            <a href="/falha-login" className={styles.link}>
                <p>tentar login novamente &rarr;</p>
            </a>
        </div>
    </right>
    )
}