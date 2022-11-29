import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from './Profile.module.css';

let Profile=(props)=>{
    
    return(
        <div className={classes.profile}>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer/>
        </div>
    )
}
export default Profile;