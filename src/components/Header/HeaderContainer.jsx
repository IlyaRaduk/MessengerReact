import Header from "./Header";
import { connect } from 'react-redux';
import { setUserDataActionCreator, authActionCreator, unAuthThunkCreator } from "../../redux/auth-reducer";

const HeaderContainer = (props) => {
    return (
        <Header isAuth={props.isAuth}
            auth={props.auth}
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
        auth: () => {

            dispatch(authActionCreator())
        },
        unAuth: () => {

            dispatch(unAuthThunkCreator())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);