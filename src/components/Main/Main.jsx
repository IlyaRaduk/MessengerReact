import Navigation from './Navigation/Navigation';
import Posts from './Posts/Posts';
import classes from './Main.module.css';
import Dialogs from './Dialogs/Dialogs';
import {Route,Routes} from 'react-router-dom';

function Main(){
    return(
        <main className={classes.main}>
            <Navigation/>
            <Routes>
                <Route path="/profile" element={<Posts/>} />

                <Route path="/dialogs"  element={<Dialogs/>}/>
            </Routes>
        </main>
    )
}
export default Main;