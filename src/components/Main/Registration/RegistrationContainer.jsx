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

let RegistrationContainer = connect(null,mapDispatchToProps)(Registration)

export default RegistrationContainer;