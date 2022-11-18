import classes from './Posts.module.css';
import Post from './Post/Post';
import React from 'react';
function Posts(props){

  let newPostElement = React.createRef();

  let addPost = ()=>{

    let text = newPostElement.current.value; 
    props.addPost(text);
    props.changeLetters('Введите текст');
  }
  let changeLetters = ()=>{
    let text = newPostElement.current.value;
    props.changeLetters(text);
    
  }

    return(
        <section className={classes.posts}>
          <textarea onChange={changeLetters} ref={newPostElement} value={props.profilePage.newPostText} ></textarea>
          <button onClick={addPost}>add post</button>
          <button>remove</button>
        <p className={classes.text}>Основной контент</p>
        <Post  postsItems={props.profilePage.postsItems}/>
      </section>
    )
}
export default Posts;