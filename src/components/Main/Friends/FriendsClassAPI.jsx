import React from 'react';
import Friends from './Friends';

class FriendsClassAPI extends React.Component {

    componentDidMount() {
        this.props.selectedPages(1)

    }
    render() {

        return (
            <Friends
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                selectedPages={this.props.selectedPages}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                isFetching={this.props.isFetching}
                isAuth={this.props.isAuth}
            />
        )
    }
}
export default FriendsClassAPI;