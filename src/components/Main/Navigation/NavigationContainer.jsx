import { connect } from "react-redux";
import Navigation from "./Navigation";
import { getProfileThunkCreator } from "../../../redux/profile-reducer";

let mapStateToProps = (state) => {
  return {
      userId: state.auth.userId,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
      getProfile: (id) => {
          dispatch(getProfileThunkCreator(id))
      },
  }
}


export default  connect(mapStateToProps,mapDispatchToProps)(Navigation);