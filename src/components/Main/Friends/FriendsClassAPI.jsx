import React from 'react';
import Friends from './Friends';
import axios from 'axios';
import { getUsersAPI } from '../../../api';

class FriendsClassAPI extends React.Component {

    selectedPages(page) {
        this.props.togleIsFetching(true)
        this.props.selectedPage(page)
        getUsersAPI(page)
            .then(data => {
                this.props.togleIsFetching(false)
                this.props.setUsers(data.users)
            })
    }

    componentDidMount() {
        this.props.togleIsFetching(true)
        this.props.selectedPage(1);
        getUsersAPI(1)
            .then(data => {
                this.props.togleIsFetching(false)
                this.props.setUsers(data.users)
                this.props.setTotalUsersCount(data.totalUsersCount);
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