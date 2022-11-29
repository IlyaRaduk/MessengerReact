import classes from './ProfileInfo.module.css';
import Prelouder from '../../../Prelouder/Prelouder'

let ProfileInfo=(props)=>{
    if (props.profile===null){
        return (
            <Prelouder/>
        )
    }
    else
    return(
        <>
            
            <div className={classes.profileInfo}>
                <div className="photo">
                    <img src={props.profile.photoUrl} alt="photo" />
                </div>
                <div className="name">
                    {props.profile.name}
                </div>
                <div className="status">
                    {props.profile.status}
                </div>
            </div>
        </>
    )
}
export default ProfileInfo;