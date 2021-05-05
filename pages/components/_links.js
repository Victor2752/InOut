import styles from '../../styles/Login.module.css'

export function EsqueceuSenhaLink() {
    return(
        <a href="/recuperarconta" className={styles.link}>
            <p>esqueceu a senha? &rarr;</p>
        </a>
    )
}

export function LoginSenhaLink() {
    return(
        <a href="/login" className={styles.link}>
            <p>Voltar para a tela de login login &rarr;</p>
        </a>
    )
}