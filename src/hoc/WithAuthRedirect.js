import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

const WithAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        if (props.isAuth == false) return <Navigate to={"/login"} />
        return <Component {...props} />
    }
    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth,
        }
    }
    return connect(mapStateToProps)(RedirectComponent);
}



export default WithAuthRedirect;

