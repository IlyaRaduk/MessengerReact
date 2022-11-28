

let initialState ={
 users:[
 ],
 pageSize:5,
 totalUsersCount:'',
 currentPage:1,
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
        users:[...action.users]
      }
    }
    case 'SELECTED_PAGE':{
      return{
        ...state,
        currentPage: action.page,
      }
    }
    case 'SET_TOTAL_USERS_COUNT':{
      return{
        ...state,
        totalUsersCount: action.TotalUsersCount,
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
export const selectedPage = (page)=> {
  return {
    type:'SELECTED_PAGE',
    page,
  }
}
export const setTotalUsersCount = (TotalUsersCount)=> {
  return {
    type:'SET_TOTAL_USERS_COUNT',
    TotalUsersCount,
  }
}
  
