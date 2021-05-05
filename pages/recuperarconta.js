
import styles from '../styles/Login.module.css'

import Loginleft from './components/_loginleft'
import RecuperaSenha from './components/_recuperarConta'



function Login() {
    return (
        <div className={styles.container}>
            <Loginleft />
            <RecuperaSenha />
        </div>
    )
}
export default Login;