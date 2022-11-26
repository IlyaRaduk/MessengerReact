

let initialState ={
 users:[
 ]
}

const friendsReducer =(state=initialState,action)=>{
   switch(action.type){
    case 'FOLLOW':
      return {
        ...state,
        users:state.users.map((e)=>{
          if(e.id===action.userId) {
            return {...e,followed :true}
          }
          return e;
        })
      }
    
    case 'UNFOLLOW':
      return {
        ...state,
        users:state.users.map((e)=>{
          if(e.id===action.userId) {
            return {...e,followed :false}
          }
          return e;
        })
      }
    case 'SET_USERS':{
      return{
        ...state,
        users:[...state.users, ...action.users]
      }
    }
    default: 
      return state;
   }
}

export default friendsReducer;

export const followActionCreator = (userId)=> {
  return {
    type:'FOLLOW',
    userId,
  }
}
export const unfollowActionCreator = (userId)=> {
  return {
    type:'UNFOLLOW',
    userId,
  }
}
export const setUsersActionCreator = (users)=> {
  return {
    type:'SET_USERS',
    users,
  }
}
  