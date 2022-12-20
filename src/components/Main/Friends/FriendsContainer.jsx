
import { connect } from 'react-redux';
import {followThunkCreator, unFollowThunkCreator, selectedPagesThunkCreator } from '../../../redux/friends-reducer';
import Friends from './Friends';
import { compose } from 'redux';
import WithAuthRedirect from './../../../hoc/WithAuthRedirect';

let mapStateToProps = (state) => {
    return {
        users: state.friends.users,
        pageSize: state.friends.pageSize,
        totalUsersCount: state.friends.totalUsersCount,
        currentPage: state.friends.currentPage,
        isFetching: state.friends.isFetching,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followThunkCreator(id))
        },
        unFollow: (id) => {
            dispatch(unFollowThunkCreator(id))
        },
        selectedPages: (page)=>{
            dispatch(selectedPagesThunkCreator(page))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(Friends);


