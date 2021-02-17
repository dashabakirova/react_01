import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import StoreContext from "../../storeContext";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/ProfileReducer";
import MyPosts from "../Profile/MyPosts/MyPosts";

const Navbar = () => {
    return (
        <StoreContext.Consumer>
            { store => {
                let friendsElements = store.getState().navBarPage.friendsAvatar
                    .map(a => <Friends imgUrl={a.imgUrl}/>);
                return (
                    <nav className={s.nav}>
                        <div className={s.item}>
                            <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
                        </div>
                        <div> Friends </div>
                        <div className={s.friendsItem}>
                            { friendsElements }
                        </div>
                    </nav>
                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default Navbar;