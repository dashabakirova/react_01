const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// начальный state
let initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 150},
        {id: 2, message: "It's my first post", likesCount: 100},
    ],
        newPostText: 'hello.com'
}


// функция reducer, принимает state и action, если action не применен, возвращает тот же state
const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            // push - метод массива, который добавляет в конец массива новый элемент
            state.posts.push(newPost);
            state.newPostText = '';
            // можем не использовать breack, т.к. делаем return сразу, проваливаний не будет
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

// вспомогательная функция, чтобы не ошибиться в создании action
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;