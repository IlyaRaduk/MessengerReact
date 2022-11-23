import { legacy_createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
});

let store = legacy_createStore(reducers);
export default store;