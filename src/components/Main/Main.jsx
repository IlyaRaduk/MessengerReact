import Navigation from './Navigation/Navigation';
import ProfileContainer from './Profile/ProfileContainer';
import classes from './Main.module.css';
import Dialogs from './Dialogs/Dialogs';
import {Route,Routes} from 'react-router-dom';
import About from './About/About';
import FriendsContainer from './Friends/FriendsContainer';

function Main(props){
    return(
        <main className={classes.main}>
            <Navigation/>
            <Routes>
                <Route path="/profile/:id" element={<ProfileContainer/>} />
                <Route path="/dialogs/*" element={<Dialogs/>}/>
                <Route path="/friends/*" element={<FriendsContainer />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </main>
    )
}
export default Main;