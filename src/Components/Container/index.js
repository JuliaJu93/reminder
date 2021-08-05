import React from 'react';
import { AddEvents } from '../AddEvents';
import { Events } from '../Events';
import './styles.scss';

export const Container = () => {
    return <div className='container'>
        <AddEvents />
        <Events />
    </div>
};
