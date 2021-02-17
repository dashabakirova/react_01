import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();

                let addMessage = () => {
                    // вызываем функцию addMessage из мира BLL (файл store.js), которую прокинули через props
                    store.dispatch(sendMessageActionCreator());
                }
                let onMessageChange = (body) => {
                    let action = updateNewMessageBodyActionCreator(body);
                    store.dispatch(action);
                }

                return <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage}
                         dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}
                         newPostText={state.dialogsPage.newMessageText}/>
            }
        }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;