import classes from './Messages.module.css';


function Messages(props){
    return(
        <div className={classes.messages}>
            Сообщение  -{props.message} 
        </div>
    )
}
export default Messages