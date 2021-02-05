import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile.jsx';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar navBarPage={props.state.navBarPage}/>
            <div className='app_wrapper_content'>
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                              addMessage={props.addMessage}
                                              updateNewMessageText={props.updateNewMessageText}
                                              newMessageText={props.state.dialogsPage.newMessageText}/>}/>

                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
