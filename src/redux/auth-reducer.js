

let initialState ={
  userId:null,
  email:null,
  login:null,
  isAuth:false,
}

const authReducer =(state=initialState,action)=>{
   switch(action.type){
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.data,
        isAuth:true,
      }
      case 'AUTH':
      return {
        ...state,
        isAuth:true,
      }
      case 'UNAUTH':
      return {
        ...state,
        isAuth:false,
      }
    default: 
      return state;
   }
}

export default authReducer;

export const setUserDataActionCreator = (userId,email,login)=> {
  return {
    type:'SET_USER_DATA',
    data:{
      userId,
      email,
      login,
    },
  }
}
export const authActionCreator = ()=> {
  return {
    type:'AUTH',
  }
}
export const unAuthActionCreator = ()=> {
  return {
    type:'UNAUTH',
  }
}




  
