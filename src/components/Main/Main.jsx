import Navigation from '../Navigation/Navigation';
import Intro from '../Intro/Intro';
import classes from './Main.module.css';

function Main(){
    return(
    <main className={classes.main}>
        <Navigation/>
        <Intro/>
    </main>
    )
}
export default Main;