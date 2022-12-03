import { connect } from 'react-redux';
import DialogsList from './DialogsList';

const mapStateToProps = (state) => {
  return {
    dialogsItems: state.dialogsPage.dialogsItems,
  }
}

const DialogsListContainer = connect(mapStateToProps, null)(DialogsList);
export default DialogsListContainer;