import React from 'react';
import './styles.scss';

export const Event = ({ title, date }) => {
    return <div className="containerEvent">
        <div> {date} </div>
        <div> {title} </div>
        <button> Удалить </button>
    </div>
};
