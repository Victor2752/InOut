import styles from '../styles/Login.module.css'
import usuario from './api/users'

function Login() {
    return (
        <div className={styles.container}>
            <left>
                <div className={styles.boxL}>
                    <h1>
                        <a>I</a>n<a>O</a>ut
                    </h1>
                    <div className={styles.boxL}>
                        <b1>
                            <h3>
                                <a>C</a>onsulte seus direitos e obrigações
                            </h3>
                        </b1>
                        <b2>
                            <h3>
                                <a>V</a>isualize sua produtividade
                            </h3>
                        </b2>
                    </div>
                </div>
            </left>
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
        </div>
    )
}

export default Login;