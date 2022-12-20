import Header from "./Header";
import { connect } from 'react-redux';
import { setUserDataActionCreator, unAuthThunkCreator } from "../../redux/auth-reducer";

const HeaderContainer = (props) => {
    return (
        <Header isAuth={props.isAuth}
            unAuth={props.unAuth} />
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (userId, email, login) => {
            dispatch(setUserDataActionCreator(userId, email, login))
        },
        unAuth: () => {
            dispatch(unAuthThunkCreator())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);