
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Btn from './../common/Button/Btn';

function Header(props) {

    return (
        <div className={classes.headerWrapper}>
            <div className='container'>
                <header className={classes.header}>
                    <h1 className={classes.title}>Messenger</h1>
                    {props.isAuth ? <NavLink to="/login"><Btn isActive={false} setClick={props.unAuth} title={'Sign out'} /></NavLink > : null
                        // <NavLink to="/login"><Btn isActive={true} setClick={props.auth} title={'Sign in'}
                    }
                </header>
            </div>
        </div>
    )
}
export default Header;