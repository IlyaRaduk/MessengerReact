
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Btn from './../common/Button/Btn';

function Header(props) {

    return (
        <div className={classes.headerWrapper}>
            <div className='container'>
                <header className={classes.header}>
                    <h1 className={classes.title}>Messenger</h1>
                    <NavLink to="/login"><Btn isActive={false} setClick={props.unAuth} title={'Sign out'} /></NavLink >
                </header>
            </div>
        </div>
    )
}
export default Header;