import classes from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';


function DialogItem(props){

    const createDialogItem = (data)=>{
        return data.map((e)=>{
            return <li className={classes.item}><NavLink to={"/dialogs/"+e.id}>{e.name}</NavLink ></li>
        })
    }
    return( 
        <>
           {createDialogItem(props.dialogsItems)}
        </>
    )
}
export default DialogItem