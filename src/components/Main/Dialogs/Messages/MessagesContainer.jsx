import Messages from './Messages';
import { addMessageActionCreator, changeLettersMessageActionCreator } from '../../../../redux/dialogs-reducer';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps, mapDispatchToProps)(Messages);