import classes from './Intro.module.css';

function Intro(){
    return(
        <section className={classes.intro}>
        <p className={classes.text}>Основной контент</p>
      </section>
    )
}
export default Intro;