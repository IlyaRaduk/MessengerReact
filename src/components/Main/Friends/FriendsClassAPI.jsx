import React from 'react';
import Friends from './Friends';
import axios from 'axios';

class FriendsClassAPI extends React.Component {

    selectedPages(page) {
        this.props.togleIsFetching(true)
        this.props.selectedPage(page)
        axios.get('http://192.168.100.3:3005/users/' + page)
            .then(response => {
                this.props.togleIsFetching(false)
                let users = response;
                this.props.setUsers(users.data.users)
            })
    }

    componentDidMount() {
        this.props.togleIsFetching(true)
        this.props.selectedPage(1);
        axios.get('http://192.168.100.3:3005/users/1')
            .then(response => {
                this.props.togleIsFetching(false)
                let users = response;
                this.props.setUsers(users.data.users)
                this.props.setTotalUsersCount(users.data.totalUsersCount);

            })

    }

    render() {

        return (
            <Friends
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                selectedPages={this.selectedPages.bind(this)}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                isFetching={this.props.isFetching}

            />
        )
    }
}
export default FriendsClassAPI;