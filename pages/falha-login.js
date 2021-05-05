import styles from '../styles/Login.module.css'

import Loginleft from './components/_loginleft'
import UseFalhaLogin from './components/_useFalhaLogin'

function FalhaLogin() {
    return (
        <div className={styles.container}>
            <Loginleft />
            <UseFalhaLogin />
        </div>
    )
}

export default FalhaLogin;