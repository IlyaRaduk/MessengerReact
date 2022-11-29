import classes from './Posts.module.css';
import Post from './Post/Post';
import React from 'react';

function Posts(props){
  let newPostElement = React.createRef();

  let onAddPost = ()=>{
    props.addPost();
  }

  let onChangeLetters = ()=>{
    let text = newPostElement.current.value;
    props.changeLetters(text);
  }

  
    return(
        <section className={classes.posts}>
          <textarea onChange={onChangeLetters} ref={newPostElement}  value={props.newPostText} ></textarea>
          <button onClick={onAddPost}>add post</button>
          <button>remove</button>
        <p className={classes.text}>Основной контент</p>
        <Post  postsItems={props.postsItems}/>
      </section>
    )
}
export default Posts;