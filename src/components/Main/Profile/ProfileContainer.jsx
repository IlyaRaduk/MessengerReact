import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { getProfileThunkCreator, setStatusThunkCreator, checkStatusOwnerThunkCreator, blockStatusOwnerActionCreator } from '../../../redux/profile-reducer';
import Prelouder from './../../common/Prelouder/Prelouder';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { compose } from 'redux';
import WithAuthRedirect from '../../../hoc/WithAuthRedirect';

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.router.params.id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.props.router.params.id && Number(prevProps.router.params.id)) {
            this.props.getProfile(this.props.router.params.id);
        }
        if (this.props.router.params.id == true && Number(this.props.router.params.id) !== this.props.profile?.id) {
            this.props.getProfile(this.props.router.params.id);
        }

    }

    render() {
        if (this.props.profile === null) {
            return (
                <Prelouder />
            )
        } else {
            return (
                <Profile blockStatusOwner={this.props.blockStatusOwner} allowsEditStatus={this.props.allowsEditStatus} checkStatusOwner={this.props.checkStatusOwner} profile={this.props.profile} setStatus={this.props.setStatus} />
            )
        }

    }

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
        blockStatusOwner:()=>{
            dispatch(blockStatusOwnerActionCreator())
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer);
