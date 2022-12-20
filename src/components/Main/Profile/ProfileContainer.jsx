import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileThunkCreator, setStatusThunkCreator, checkStatusOwnerThunkCreator } from '../../../redux/profile-reducer';
import Prelouder from './../../common/Prelouder/Prelouder';
import { compose } from 'redux';
import WithAuthRedirect from '../../../hoc/WithAuthRedirect';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProfileContainer = (props) => {
    const id = useParams().id;
    useEffect(() => {
        props.getProfile(id);
    }, [id]);

    if (!props.profile) {
        return (
            <Prelouder />
        )
    }
    return (
        <Profile blockStatusOwner={props.blockStatusOwner} allowsEditStatus={props.allowsEditStatus} checkStatusOwner={props.checkStatusOwner} profile={props.profile} setStatus={props.setStatus} />
    )
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        allowsEditStatus: state.profilePage.allowsEditStatus,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (id) => {
            dispatch(getProfileThunkCreator(id))
        },
        setStatus: (id, text) => {
            dispatch(setStatusThunkCreator(id, text))
        },
        checkStatusOwner: (id) => {
            dispatch(checkStatusOwnerThunkCreator(id))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(ProfileContainer);
