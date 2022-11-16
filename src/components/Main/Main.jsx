import Navigation from './Navigation/Navigation';
import Posts from './Posts/Posts';
import classes from './Main.module.css';

function Main(){
    return(
    <main className={classes.main}>
        <Navigation/>
        <Posts/>
    </main>
    )
}
export default Main;