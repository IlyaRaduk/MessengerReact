import { connect } from "react-redux";
import Registration from "./Registration";
import { registrationNewAccountThunkCreator } from "../../../redux/auth-reducer";

let mapDispatchToProps = (dispatch) => {
  return {
    registrationNewAccount: (user) => {
      dispatch(registrationNewAccountThunkCreator(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(Registration);