import styles from '../../styles/Login.module.css'

export default function LoginBox() {
    return(
        <right>
        <div className={styles.boxR}>
            <h1>
                sign-in
            </h1>
            <div className={styles.boxR}>
                <input type='text' value='E-mail' className={styles.Box} />
                <input type='text' value='Senha' className={styles.Box} />
                <button className={styles.btnEntra}>
                    Entrar
                    </button>
            </div>
            <a href="/" className={styles.link}>
                <p>esqueceu a senha? &rarr;</p>
            </a>
        </div>
    </right>
    )
}