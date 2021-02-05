import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages
        .map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        // вызываем функцию addMessage из мира BLL (файл state.js), которую прокинули через props
        props.addMessage();
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement}
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