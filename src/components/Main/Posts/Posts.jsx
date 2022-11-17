import classes from './Posts.module.css';
import Post from './Post/Post';

function Posts(props){
    return(
        <section className={classes.posts}>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>add post</button>
          <button>remove</button>
        <p className={classes.text}>Основной контент</p>
        <Post postsItems={props.profilePage.postsItems}/>
      </section>
    )
}
export default Posts;