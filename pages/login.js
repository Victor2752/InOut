import styles from '../styles/Login.module.css'

import Loginleft from './components/_loginleft'
import LoginBox from './components/_loginBox'

function Login() {
    return (
        <div className={styles.container}>
            <Loginleft />
            <LoginBox />
        </div>
    )
}

export default Login;