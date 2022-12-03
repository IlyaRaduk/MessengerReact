import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import friendsReducer from './friends-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    friends: friendsReducer,
    auth: authReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;