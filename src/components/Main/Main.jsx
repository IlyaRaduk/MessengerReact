import Navigation from './Navigation/Navigation';
import Posts from './Posts/Posts';
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
                <Route path="/profile" element={<Posts profilePage={props.state.profilePage} addPost={props.addPost}/>} />
                <Route path="/dialogs/*" element={<Dialogs dialogsPage= {props.state.dialogsPage}/>}/>
                <Route path="/friends/*" element={<Friends />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </main>
    )
}
export default Main;