import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { getProfileThunkCreator } from '../../../redux/profile-reducer';
import Prelouder from './../../common/Prelouder/Prelouder';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
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

    componentDidUpdate(props, prevState) {

        if (Number(this.props.router.params.id) !== this.props.profile?.id) {
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
        getProfile: (id) => {
            dispatch(getProfileThunkCreator(id))
        },
    }
}

let WithUrlProfileContainer = withRouter(WithAuthRedirect(ProfileContainer));

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlProfileContainer);