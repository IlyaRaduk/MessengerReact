import Login from "./Login";
import { connect } from "react-redux";
import { loginThunkCreator } from "../../redux/auth-reducer";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        toLogin: (user) => { dispatch(loginThunkCreator(user)) },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);