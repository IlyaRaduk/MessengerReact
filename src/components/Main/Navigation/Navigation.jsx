import classes from './Navigation.module.css';
import {NavLink } from 'react-router-dom';
function Navigation(){
    return(
        <nav className={classes.nav}>
          <ul className={classes.nav__menu}>
            <li><NavLink  to="/profile">Главная страница</NavLink ></li>
            <li><NavLink  to="/friends">Друзья</NavLink ></li>
            <li><NavLink  to="/dialogs">Сообщения</NavLink ></li>
            <li><NavLink  to="/about">О нас</NavLink ></li>
          </ul>
        </nav>
    )
}
export default Navigation;