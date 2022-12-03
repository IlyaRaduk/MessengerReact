import classes from './Posts.module.css';
import Post from './Post/Post';
import React from 'react';
import Btn from './../../../Button/Btn'

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
          <div className={classes.areaWrapper}>
            <textarea placeholder="Что у вас нового?" className={classes.textArea} onChange={onChangeLetters} ref={newPostElement}  value={props.newPostText} ></textarea>
            <Btn setClick={onAddPost} title={'Add post'} isActive={true}/>
          </div>
          <Post  postsItems={props.postsItems}/>
      </section>
    )
}
export default Posts;