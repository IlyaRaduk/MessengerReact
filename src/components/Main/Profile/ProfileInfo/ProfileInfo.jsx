import classes from './ProfileInfo.module.css';
import Status from './Status/Status';

let ProfileInfo = (props) => {

    return (
        <div className={classes.profileInfo}>
            <div className={classes.avatar}>
                <img src={props.profile.photoUrl} className={classes.photo} alt='avatar' />
            </div>
            <div className={classes.discription}>
                <div className={classes.name}>
                    {props.profile.name}
                </div>
                <div className={classes.city}>
                    {props.profile.location.city}
                </div>
                <Status allowsEditStatus={props.allowsEditStatus} checkStatusOwner={props.checkStatusOwner} setStatus={props.setStatus} status={props.profile.status} id={props.profile.id} />
            </div>
        </div>
    )
}
export default ProfileInfo;