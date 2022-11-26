import { legacy_createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import friendsReducer from './friends-reducer' 

let reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    friends:friendsReducer,
});

let store = legacy_createStore(reducers);
window.store = store;
export default store;