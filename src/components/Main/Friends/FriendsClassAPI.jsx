import React from 'react';
import { useEffect } from 'react';
import Friends from './Friends';


const FriendsClassAPI = (props) => {
    useEffect(()=>{
        props.selectedPages(1);
    },[])
    return (
        <Friends
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            selectedPages={props.selectedPages}
            currentPage={props.currentPage}
            users={props.users}
            unFollow={props.unFollow}
            follow={props.follow}
            isFetching={props.isFetching}
            isAuth={props.isAuth}
        />
    )
}

// class FriendsClassAPI extends React.Component {

//     componentDidMount() {
//         this.props.selectedPages(1)

//     }
//     render() {

//         return (
//             <Friends
//                 totalUsersCount={this.props.totalUsersCount}
//                 pageSize={this.props.pageSize}
//                 selectedPages={this.props.selectedPages}
//                 currentPage={this.props.currentPage}
//                 users={this.props.users}
//                 unFollow={this.props.unFollow}
//                 follow={this.props.follow}
//                 isFetching={this.props.isFetching}
//                 isAuth={this.props.isAuth}
//             />
//         )
//     }
// }
export default FriendsClassAPI;