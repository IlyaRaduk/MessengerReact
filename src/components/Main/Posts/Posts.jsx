import classes from './Posts.module.css';
import Post from './Post/Post';

function Posts(){
    return(
        <section className={classes.posts}>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>add post</button>
          <button>remove</button>
        <p className={classes.text}>Основной контент</p>
        <Post/>
        <Post/>
        <Post/>
      </section>
    )
}
export default Posts;