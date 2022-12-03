import { legacy_createStore, combineReducers } from "redux";
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

let store = legacy_createStore(reducers);

export default store;