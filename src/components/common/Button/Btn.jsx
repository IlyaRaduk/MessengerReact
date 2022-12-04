import classes from './Btn.module.css';
let Btn = (props) => {
    return (<>
        {props.isActive ? <button onClick={props.setClick} className={classes.btnActive}>{props.title}</button> :
            <button onClick={props.setClick} className={classes.btn}>{props.title}</button>}
    </>
    )
}
export default Btn;