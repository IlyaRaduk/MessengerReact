import { Navigate } from 'react-router-dom';
import classes from './Login.module.css';
import LoginForm from './LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';

let Login = (props) => {
    if (props.isAuth) return <Navigate to={"/profile"} />
    return (
        <div className={classes.login__page}>
            <div className={classes.login} >
                <div>Авторизируйтесь в <span className={classes.title}>MESSENGER</span></div>
                <LoginForm toLogin={props.toLogin} />
            </div>
            <div className={classes.registration}>
                <NavLink to="/registration"><div className={classes.registration__btn}>Зарегистрироваться</div></NavLink >
                <div className={classes.registration__title}>После регистрации вы получите доступ ко всем возможностям MESSENGER</div>
            </div>
        </div>
    )
}

export default Login;