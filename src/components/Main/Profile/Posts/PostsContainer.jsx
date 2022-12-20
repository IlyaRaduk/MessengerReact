import Posts from './Posts';
import { addPostsThunkCreator, changeLettersActionCreator } from '../../../../redux/profile-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    postsItems: state.profilePage.postsItems,
    profileId: state.profilePage.profile.id,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text, id) => { dispatch(addPostsThunkCreator(text, id)) },
    changeLetters: (text) => { dispatch(changeLettersActionCreator(text)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

