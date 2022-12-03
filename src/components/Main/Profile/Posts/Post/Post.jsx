
import classes from './Post.module.css';

function Post(props){
    const createPostItem =(data)=>{
        return data.map((e)=>{
            return <div key={e.id} className={classes.post}>
                <div className={classes.name}>{e.name}</div>
                <div className={classes.post}>{e.post}</div>
                <div className={classes.like}>{e.like}</div>
            </div>
        })
    }
    return(
        <>
            {createPostItem(props.postsItems)}
        </>
    )
}
export default Post;