import Header from "./Header";
import React from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import { setUserDataActionCreator,authActionCreator,unAuthActionCreator } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount(){
        // axios.get('https://API.com/auth/me',{
        //     withCredentials:true,
        // })
        //     .then(response=>{
        //         if(response.data.resaultCode===0){
        //             this.props.setUserData(response.data.data.login)
        //         }
        //     })

    }

    render(){
        return(
            <Header isAuth={this.props.isAuth}
            auth={this.props.auth}
            unAuth={this.props.unAuth}/> 
        )
    }

}

let mapStateToProps = (state)=>{
    return{
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        setUserData:(userId,email,login)=>{
            dispatch(setUserDataActionCreator(userId,email,login))
        },
        auth:()=>{
          
            dispatch(authActionCreator())
        },
        unAuth:()=>{
           
            dispatch(unAuthActionCreator())
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);