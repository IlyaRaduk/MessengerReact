import classes from './Navigation.module.css';

function Navigation(){
    return(
        <nav className={classes.nav}>
          <ul className={classes.nav__menu}>
            <li>Меню</li>
            <li>Друзья</li>
            <li>Сообщения</li>
            <li>О нас</li>
          </ul>
        </nav>
    )
}
export default Navigation;