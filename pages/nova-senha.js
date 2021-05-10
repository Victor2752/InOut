import styles from '../styles/Login.module.css'

import Loginleft from './components/_loginleft'
import UseNovaSenha from './components/_useNovaSenha'

function NovaSenha() {
    return (
        <div className={styles.container}>
            <Loginleft />
            <UseNovaSenha />
        </div>
    )
}

export default NovaSenha;