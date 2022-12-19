import classes from './Prelouder.module.css';
import prelouder from './../../../assets/img/prelouder.gif'
let Prelouder = (props) => {
    return (
        <div className={classes.prelouder}>
            <img src={prelouder} alt="prelouder" />
        </div>
    )
}
export default Prelouder;