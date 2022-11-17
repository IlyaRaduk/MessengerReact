import classes from './DialogsList.module.css';
import DialogItem from './DialogItem/DialogItem';



function DialogsList(props){
    return(
        <ul className={classes.list}>
          <DialogItem dialogsItems={props.dialogsItems}/>
        </ul>
    )
}
export default DialogsList