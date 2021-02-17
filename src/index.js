import React from 'react';
import './index.css';
import store from "./redux/ReduxStore";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./storeContext";

// Оборачиваем в функцию рендеринг, чтобы делать его при каждом чихе в state
let rerenderEntireTree = (state) => {
    // ReactDOM рендерит JSX, превращая его в DOM
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </React.StrictMode>,
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
// callback, отдаем кому-то функцию, чтобы кто-то ее вызвал
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
