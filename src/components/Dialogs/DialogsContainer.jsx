import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        // вызываем функцию addMessage из мира BLL (файл store.js), которую прокинули через props
        props.store.dispatch(sendMessageActionCreator());
    }
    let onMessageChange = (body) => {
        let action = updateNewMessageBodyActionCreator(body);
        props.store.dispatch(action);
    }

    return (
        <Dialogs updateNewMessageText={ onMessageChange } addMessage={ addMessage}
                 dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}
                 newPostText={state.dialogsPage.newMessageText}/>
    );
}

export default DialogsContainer;