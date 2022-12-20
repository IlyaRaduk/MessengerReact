import NavigationContainer from './Navigation/NavigationContainer';
import ProfileContainer from './Profile/ProfileContainer';
import classes from './Main.module.css';
import Dialogs from './Dialogs/Dialogs';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from './About/About';
import FriendsContainer from './Friends/FriendsContainer';
import LoginContainer from '../Login/LoginContainer';
import RegistrationContainer from './Registration/RegistrationContainer';

function Main() {
    return (
        <div className='container'>
            <main className={classes.main}>
                <NavigationContainer />
                <Routes>
                    <Route path="/profile" element={<ProfileContainer />} />
                    <Route path="/profile/:id" element={<ProfileContainer />} />
                    <Route path="/dialogs/*" element={<Dialogs />} />
                    <Route path="/friends/*" element={<FriendsContainer />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<LoginContainer />} />
                    <Route path="/registration" element={<RegistrationContainer />} />
                    <Route path="/" element={<Navigate to={"/login"} />} />
                </Routes>
            </main>
        </div>
    )
}
export default Main;