import Posts from './Posts';
import { addPostActionCreator, changeLettersActionCreator} from '../../../../redux/profile-reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state)=>{
  return{
    newPostText: state.profilePage.newPostText,
    postsItems: state.profilePage.postsItems,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    addPost: ()=>{dispatch(addPostActionCreator())},
    changeLetters:(text)=>{ dispatch(changeLettersActionCreator(text))},
  }
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;