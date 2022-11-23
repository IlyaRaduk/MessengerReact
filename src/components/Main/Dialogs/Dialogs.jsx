import classes from './Dialogs.module.css';
import DialogsList from './DialogsList/DialogsList';
import {Route,Routes} from 'react-router-dom';
import MessagesContainer from './Messages/MessagesContainer';





function Dialogs(props){
    return(
        <div className={classes.wrapper}>
            <DialogsList dialogsItems= {props.store.getState().dialogsPage.dialogsItems}/>
            <Routes>
                <Route path="/1" element={<MessagesContainer store={props.store}  id={1} />} />
                <Route path="/2" element={<MessagesContainer store={props.store}  id={2} />}/>
                <Route path="/3" element={<MessagesContainer store={props.store}  id={3} />} />
                <Route path="/4" element={<MessagesContainer store={props.store}  id={4} />} />
                <Route path="/5" element={<MessagesContainer store={props.store}  id={5} />} />
                <Route path="/6" element={<MessagesContainer store={props.store}  id={6} />} />
            </Routes> 
           
        </div>
        
    )
}
export default Dialogs