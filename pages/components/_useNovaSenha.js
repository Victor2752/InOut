import styles from '../../styles/Login.module.css'

export default function UseNovaSenha() {
    return(
        <right>
            <div className={styles.boxR}>
                <h1>
                    Nova Senha
                </h1>
                <div className={styles.boxR}>
                    <p>Adicionar nova senha:</p>
                    <input type='text'value='nova senha' className={styles.Box} />
                    <input type='text'value='confirmar nova senha' className={styles.Box} />
                    <button className={styles.btnEntra}>
                        <a href='/login'>
                            rederinir senha e tentar login novamente
                        </a>
                    </button>
                </div>
                <a href="/login" className={styles.link}>
                    <p>tentar login novamente &rarr;</p>
                </a>
            </div>
        </right>
    )
}