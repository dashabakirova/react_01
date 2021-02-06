import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

// Оборачиваем в функцию рендеринг, чтобы делать его при каждом чихе в state
let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}
                     addMessage={store.addMessage.bind(store)} updateNewMessageText={store.updateNewMessageText.bind(store)}/>
            </React.StrictMode>,
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
// callback, отдаем кому-то функцию, чтобы кто-то ее вызвал
store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
