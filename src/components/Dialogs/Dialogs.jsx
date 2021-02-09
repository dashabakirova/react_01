import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/DialogsReducer";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages
        .map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        // вызываем функцию addMessage из мира BLL (файл store.js), которую прокинули через props
        props.dispatch(sendMessageActionCreator());
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        // let text = newMessageElement.current.value;
        let action = updateNewMessageBodyActionCreator(body);
        props.dispatch(action);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
            </div>
            <div className={s.messages}>
                <div> { messagesElements } </div>
                <div>
                    <textarea placeholder='Enter your message' onChange={ onMessageChange }
                              value={props.newMessageText} />
                </div>
                <div>
                    <button onClick={ addMessage }>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;