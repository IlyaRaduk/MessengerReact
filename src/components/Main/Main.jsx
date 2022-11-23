import Navigation from './Navigation/Navigation';
import PostsContainer from './Posts/PostsContainer';
import classes from './Main.module.css';
import Dialogs from './Dialogs/Dialogs';
import {Route,Routes} from 'react-router-dom';
import Friends from './Friends/Friends';
import About from './About/About';

function Main(props){
    return(
        <main className={classes.main}>
            <Navigation/>
            <Routes>
                <Route path="/profile" element={<PostsContainer store={props.store}/>} />
                <Route path="/dialogs/*" element={<Dialogs store={props.store}/>}/>
                <Route path="/friends/*" element={<Friends />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </main>
    )
}
export default Main;