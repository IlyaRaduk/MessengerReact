import { connect } from 'react-redux';
import DialogsList from './DialogsList';

const mapStateToProps = (state) => {
  return {
    dialogsItems: state.dialogsPage.dialogsItems,
  }
}

export default connect(mapStateToProps, null)(DialogsList);
