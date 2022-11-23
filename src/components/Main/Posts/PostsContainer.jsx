import Posts from './Posts';
import { addPostActionCreator, changeLettersActionCreator} from '../../../redux/profile-reducer';



function PostsContainer(props){

 

  let addPost = ()=>{
    props.store.dispatch(addPostActionCreator());
  }
  let changeLetters = (text)=>{
    props.store.dispatch(changeLettersActionCreator(text));
  }

    return(
       <Posts profilePage={props.store.getState().profilePage} 
       changeLetters={changeLetters} 
       addPost={addPost}
       value = {props.store.getState().profilePage.newPostText}
       postsItems={props.store.getState().profilePage.postsItems}
       />
    )
}
export default PostsContainer;