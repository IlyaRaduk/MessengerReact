
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator,setUsersActionCreator } from '../../../redux/friends-reducer';
import Friends from './Friends';


let mapStateToProps = (state)=>{
    return{
        users:state.friends.users,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followActionCreator(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowActionCreator(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersActionCreator(users))
        },
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Friends);