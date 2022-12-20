import classes from './Dialogs.module.css';
import { Route, Routes } from 'react-router-dom';
import MessagesContainer from './Messages/MessagesContainer';
import DialogsListContainer from './DialogsList/DialogsListContainer';
import WithAuthRedirect from '../../../hoc/WithAuthRedirect';

function Dialogs(props) {
    return (
        <div className={classes.wrapper}>
            <DialogsListContainer />
            <Routes>
                <Route path="/1" element={<MessagesContainer />} />
                <Route path="/2" element={<MessagesContainer />} />
                <Route path="/3" element={<MessagesContainer />} />
                <Route path="/4" element={<MessagesContainer />} />
                <Route path="/5" element={<MessagesContainer />} />
                <Route path="/6" element={<MessagesContainer />} />
            </Routes>

        </div>

    )
}
export default WithAuthRedirect(Dialogs)