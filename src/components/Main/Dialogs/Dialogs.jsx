import classes from './Dialogs.module.css';
import DialogsList from './DialogsList/DialogsList';
import {Route,Routes} from 'react-router-dom';
import Messages from './Messages/Messages';




function Dialogs(props){
    return(
        <div className={classes.wrapper}>
            <DialogsList dialogsItems= {props.dialogsPage.dialogsItems}/>
            <Routes>
                <Route path="/1" element={<Messages message='Первое сообщение'/>} />
                <Route path="/2" element={<Messages message='Второе сообщение'/>}/>
                <Route path="/3" element={<Messages message='Третье сообщение'/>} />
                <Route path="/4" element={<Messages message='четвёртое сообщение'/>} />
                <Route path="/5" element={<Messages message='Пятое сообщение'/>} />
                <Route path="/6" element={<Messages message='ШЕстое сообщение'/>} />
            </Routes> 
           
        </div>
        
    )
}
export default Dialogs