import styles from '../styles/Login.module.css'

function Login () {
    return(
        <main className={styles.container}>
            <div className={styles.mainL}>
                <h1>olá</h1>
            </div>
            <div className={styles.mainR}>
                <div className={styles.boxR}>
                    <h1 className={styles.titleR}>
                        sig-in
                    </h1>
                    <div className={styles.loginBox}>
                        <input type='text' value='E-mail'/>
                        <input type='text' value='Senha'/>
                    </div>
                    <button className={styles.btnEntra}>
                        Entrar
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Login;