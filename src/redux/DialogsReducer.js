const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogs: [
        {id: 1, name: 'Romeo'},
        {id: 2, name: 'Myanya'},
        {id: 3, name: 'Mother'},
        {id: 4, name: 'Katya'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hello'},
        {id: 4, message: 'Yo'}
    ],
    newMessageText: 'Hi. How are you?'
}

const dialogsReducer = (state=initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            // push - метод массива, который добавляет в конец массива новый элемент
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;

    }

    return state;
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, newText: text })

export default dialogsReducer;