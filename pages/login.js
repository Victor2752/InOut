import styles from '../styles/Login.module.css'

import Loginleft from './components/_loginleft'
import LoginBox from './components/_loginBox'

function Login() {
    return (
        <div className={styles.container}>
<<<<<<< HEAD
            <Loginleft />
            <LoginBox />
=======
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
                    <h2>
                        sign-in
                    </h2>
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
>>>>>>> parent of 6714fab (ajuste no tamnho do texto sign-in)
        </div>
    )
}

export default Login;