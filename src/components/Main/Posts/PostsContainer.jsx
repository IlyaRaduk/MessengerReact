import Posts from './Posts';
import { addPostActionCreator, changeLettersActionCreator} from '../../../redux/profile-reducer';
import { connect } from 'react-redux';


// function PostsContainer(props){

 

//   let addPost = ()=>{
//     props.store.dispatch(addPostActionCreator());
//   }
//   let changeLetters = (text)=>{
//     props.store.dispatch(changeLettersActionCreator(text));
//   }

//     return(
//        <Posts profilePage={props.store.getState().profilePage} 
//        changeLetters={changeLetters} 
//        addPost={addPost}
//        value = {props.store.getState().profilePage.newPostText}
//        postsItems={props.store.getState().profilePage.postsItems}
//        />
//     )
// }
// export default PostsContainer;

const mapStateToProps = (state)=>{
  return{
    profilePage: state.profilePage,
    value: state.profilePage.newPostText,
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