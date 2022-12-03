import Messages from './Messages';
import { addMessageActionCreator, changeLettersMessageActionCreator } from '../../../../redux/dialogs-reducer';
import { connect } from 'react-redux';

// function MessagesContainer(props){

//     let addMessage = ()=>{
//       props.store.dispatch(addMessageActionCreator());
//     }
//     let changeLetters = (text)=>{
//       props.store.dispatch(changeLettersMessageActionCreator(text));

//     }
//     return(
//         <>
//             <Messages addMessage={addMessage} 
//             changeLetters={changeLetters} 
//             id={props.id} 
//             value={props.store.getState().dialogsPage.newMessageText}
//             messages={props.store.getState().dialogsPage.messages}/>
//         </>
//     )
// }

const mapStateToProps = (state) => {
  return {
    value: state.dialogsPage.newMessageText,
    messages: state.dialogsPage.messages,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => { dispatch(addMessageActionCreator()) },
    changeLetters: (text) => { dispatch(changeLettersMessageActionCreator(text)) },
  }
}



const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;