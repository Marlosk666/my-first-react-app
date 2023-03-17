import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://thumbs.dreamstime.com/b/aerial-view-lago-antorno-dolomites-lake-mountain-landscape-alps-peak-misurina-cortina-di-ampezzo-italy-reflected-103752677.jpg' alt='mountains'></img>
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    )
};

export default ProfileInfo; 