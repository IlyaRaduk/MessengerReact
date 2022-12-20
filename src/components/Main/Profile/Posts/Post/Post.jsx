import classes from './Post.module.css';

function Post(props) {
    const createPostItem = (data) => {
        return data.map((e, index) => {
            return (
                <div key={index} className={classes.post}>
                    <div className={classes.name}>{e.name}</div>
                    <div className={classes.post}>{e.text}</div>
                </div>
            )
        })
    }

    return (
        <>
            {createPostItem(props.postsItems)}
        </>
    )
}
export default Post;