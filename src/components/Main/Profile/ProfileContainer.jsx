import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { setProfileActionCreator } from '../../../redux/profile-reducer';
import Prelouder from './../../Prelouder/Prelouder';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { getProfileAPI } from '../../../api';

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
        getProfileAPI(this.props.router.params.id)
            .then((data) => {
                this.props.setProfile(data);
            })
    }

    componentDidUpdate(props, prevState) {

        if (Number(this.props.router.params.id) !== this.props.profile?.id) {
            getProfileAPI(this.props.router.params.id)
                .then((data) => {
                    this.props.setProfile(data);
                })
        }
    }

    render() {
        if (this.props.profile === null) {
            return (
                <Prelouder />
            )
        } else {
            return (
                <Profile profile={this.props.profile} />
            )
        }

    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (profile) => {
            dispatch(setProfileActionCreator(profile))
        },
    }
}

let WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlProfileContainer);