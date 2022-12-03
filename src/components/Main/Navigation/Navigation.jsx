import classes from './Navigation.module.css';
import {NavLink} from 'react-router-dom';
function Navigation(){
    return(
        <nav className={classes.nav}>
          <ul className={classes.nav__menu}>
            <li className={classes.nav__item}><NavLink  className={ navData => navData.isActive ? classes.active : null}  to="/profile/1">Главная страница</NavLink ></li>
            <li className={classes.nav__item}><NavLink  className={ navData => navData.isActive ? classes.active : null }  to="/friends">Друзья</NavLink ></li>
            <li className={classes.nav__item}><NavLink  className={ navData => navData.isActive ? classes.active : null}  to="/dialogs">Сообщения</NavLink ></li>
            <li className={classes.nav__item}><NavLink  className={ navData => navData.isActive ? classes.active : null }  to="/about">О нас</NavLink ></li>
          </ul>
        </nav>
    )
}
export default Navigation