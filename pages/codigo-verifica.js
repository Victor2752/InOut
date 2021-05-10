import styles from '../styles/Login.module.css'

import Loginleft from './components/_loginleft'
import UseCodigoVerifica from './components/_useCodigoVerifica'

function CodigoVerifica() {
    return (
        <div className={styles.container}>
            <Loginleft />
            <UseCodigoVerifica />
        </div>
    )
}

export default CodigoVerifica;