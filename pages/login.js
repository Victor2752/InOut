import styles from '../styles/Login.module.css'
import usuario from './api/users'

import Loginleft from './components/_loginleft'
import LoginBox from './components/_loginBox'
import LoginSenha from './components/_loginSenha'

function Login() {
    return (
        <div className={styles.container}>
            <Loginleft />
            ReactDOM.render(
                <loginState pageview={false} />
            )
        </div>
    )
}

export function loginState(props) {
    const pageview = props.pageview;
    if (pageview) {
        return <LoginBox />;
    }
    return <LoginSenha />;
}

export default Login;