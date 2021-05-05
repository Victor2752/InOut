import styles from '../../styles/Login.module.css'

function UseFalhaLogin() {
    return(
        <right>
        <div className={styles.boxR}>
            <h1>
                Recuperar Senha
            </h1>
            <div className={styles.boxR}>
                <p>email de recuperação da conta</p>
                <input type='text' value='E-mail' className={styles.Box} />
                <button className={styles.btnEntra}>
                    enviar E-mail de recuperação
                </button>
            </div>
            <a href="/login" className={styles.link}>
                <p>tentar login novamente &rarr;</p>
            </a>
        </div>
    </right>
    )
}

export default UseFalhaLogin;