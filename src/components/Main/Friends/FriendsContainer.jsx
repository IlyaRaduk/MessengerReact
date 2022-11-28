
import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator,setUsersActionCreator,selectedPage,setTotalUsersCount } from '../../../redux/friends-reducer';
import FriendsClassAPI from './FriendsClassAPI';


let mapStateToProps = (state)=>{
    return{
        users: state.friends.users,
        pageSize: state.friends.pageSize,
        totalUsersCount: state.friends.totalUsersCount,
        currentPage:state.friends.currentPage,
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
        selectedPage:(page)=>{
            dispatch(selectedPage(page))
        },
        setTotalUsersCount:(TotalUsersCount)=>{
            dispatch(setTotalUsersCount(TotalUsersCount))
        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FriendsClassAPI);