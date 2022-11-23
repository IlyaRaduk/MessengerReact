import Messages from './Messages';
import { addMessageActionCreator, changeLettersMessageActionCreator } from '../../../../redux/dialogs-reducer'; 

function MessagesContainer(props){

    let addMessage = ()=>{
      props.store.dispatch(addMessageActionCreator());
    }
    let changeLetters = (text)=>{
      props.store.dispatch(changeLettersMessageActionCreator(text));
      
    }
    return(
        <>
            <Messages addMessage={addMessage} 
            changeLetters={changeLetters} 
            id={props.id} 
            value={props.store.getState().dialogsPage.newMessageText}
            messages={props.store.getState().dialogsPage.messages}/>
        </>
    )
}
export default MessagesContainer