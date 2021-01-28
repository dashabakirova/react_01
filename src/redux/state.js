let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', likesCount: 150},
            {id: 2, message: "It's my first post", likesCount: 100},
        ]
    },
    friendsPage: {
        avatar: [
            {imgUrl: 'https://im0-tub-ru.yandex.net/i?id=7f86536ac347ae11681a1c598735d4e6&n=13'},
            {imgUrl: 'https://i.pinimg.com/736x/e7/3a/99/e73a99effdce0434bb51012b51ce4b4e--animal-fashion-pet-fashion.jpg'},
            {imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/30229/pub_5b0550e91410c3afaa604823_5b055258799d9d1ff70abf8e/scale_1200'},
            {imgUrl: 'https://cp16.nevsepic.com.ua/post/4/109_files/f1677157e477e26d3487d6e64e13243d.jpg'}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Romeo',
                imgUrl: 'https://im0-tub-ru.yandex.net/i?id=7f86536ac347ae11681a1c598735d4e6&n=13'},
            {id: 2, name: 'Myanya',
                imgUrl: 'https://i.pinimg.com/736x/e7/3a/99/e73a99effdce0434bb51012b51ce4b4e--animal-fashion-pet-fashion.jpg'},
            {id: 3, name: 'Mother',
                imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/30229/pub_5b0550e91410c3afaa604823_5b055258799d9d1ff70abf8e/scale_1200'},
            {id: 4, name: 'Katya',
                imgUrl: 'https://cp16.nevsepic.com.ua/post/4/109_files/f1677157e477e26d3487d6e64e13243d.jpg'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Hello'},
            {id: 4, message: 'Yo'}
        ]
    }
}

export default state;