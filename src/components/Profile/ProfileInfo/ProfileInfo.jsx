import React from 'react';
import s from './ProfileInfo.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='https://wpmedia.finalemusic.com/wp-content/uploads/2020/09/092520_FN_blog_BigSurOS-1024x512.jpg'/>
                <div className={s.description_block}>
                    Ava+description
                </div>
            </div>
        </div>
    );
}

export default Profile;