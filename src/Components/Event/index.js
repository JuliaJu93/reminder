import React from 'react';
import './styles.scss';

export const Event = ({ title, date, styles }) => {
    return <div className={styles}>
        <div> {date} </div>
        <div> {title} </div>
        <button> Удалить </button>
    </div>
};
