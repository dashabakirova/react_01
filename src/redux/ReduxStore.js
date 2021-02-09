import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import navbarReducer from "./NavbarReducer";

let reducers = combineReducers({
    // как из _state
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBarPage: navbarReducer
});

// создает внутри себя state с 3 свойствами
let store = createStore(reducers);

export default store;