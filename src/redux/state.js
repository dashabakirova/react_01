let rerenderEntireTree = () => {
    console.log('State was changed');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', likesCount: 150},
            {id: 2, message: "It's my first post", likesCount: 100},
        ],
        newPostText: 'hello.com'
    },
    dialogsPage: {
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
    },
    navBarPage: {
        friendsAvatar: [
            {imgUrl: 'https://im0-tub-ru.yandex.net/i?id=7f86536ac347ae11681a1c598735d4e6&n=13'},
            {imgUrl: 'https://i.pinimg.com/736x/e7/3a/99/e73a99effdce0434bb51012b51ce4b4e--animal-fashion-pet-fashion.jpg'},
            {imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/30229/pub_5b0550e91410c3afaa604823_5b055258799d9d1ff70abf8e/scale_1200'},
            {imgUrl: 'https://cp16.nevsepic.com.ua/post/4/109_files/f1677157e477e26d3487d6e64e13243d.jpg'},
        ]
    }
}

window.state = state;

// функция, которая добавляет новый пост в массив постов
export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    // push - метод массива, который добавляет в конец массива новый элемент
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText,
    };
    // push - метод массива, который добавляет в конец массива новый элемент
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}
// вызываем функцию, экспортируем. Затем ее вызывает импортер и передет внутрь какую-то функцию
export const subscribe = (observer) => {
    rerenderEntireTree = observer; // наблюдатель, паттерн (похож на publisher-subscriber, по этому же принципу button.addEventListener, onChange тоже)
}

export default state;