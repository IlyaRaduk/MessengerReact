import classes from './ProfileInfo.module.css';


let ProfileInfo=(props)=>{

    return(

        <div className={classes.profileInfo}>
            <div className={classes.avatar}>
                <img src={props.profile.photoUrl} className={classes.photo}alt='photo' />
            </div>
            <div className={classes.discription}>
                <div className={classes.name}>
                    {props.profile.name}
                </div>
                <div className={classes.city}>
                    {props.profile.location.city}
                </div>
                <div className={classes.status}>
                    {props.profile.status}
                </div>
            </div>
        </div>

    )
}
export default ProfileInfo;