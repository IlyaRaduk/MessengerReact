import { Navigate } from 'react-router-dom';
import classes from './Login.module.css';

let Login =(props)=>{
    if(props.isAuth==true) return <Navigate to={"/profile/1"}/>
    return(
        <div className={classes.login} >
            Авторизируйтесь в <div className={classes.title}>MESSENGER</div>
        </div>
    )
}

export default Login;