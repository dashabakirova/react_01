import React from 'react';
import s from '../Navbar.module.css';

const Friends = (props) => {
    return (
        <div className={s.friendsItem}>
            <img src={props.imgUrl} />
        </div>
    );
}

export default Friends;