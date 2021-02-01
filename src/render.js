import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

// Оборачиваем в функцию рендеринг, чтобы делать его при каждом чихе в state
export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
            </React.StrictMode>,
        </BrowserRouter>, document.getElementById('root')
    );
}
