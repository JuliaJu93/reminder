import React from 'react';
import { Event } from '../Event';
import { dateFormatting } from  './helpers/datesFormatting';
import  { defineStyles } from './helpers/defineStyles';
import  { sortingData } from './helpers/sortingData';

export const Events = ({ eventsData, getEventWrapper }) => {
    const currentDate = new Date();
    sortingData(eventsData);
    return <ul>{
        eventsData.map(event => {
        const eventsDateFormatted = new Date(event.date);
        const differenceBetweenDates = Math.round((eventsDateFormatted - currentDate) / 60000);
        return <Event
            id={event._id}
            key={event._id}
            title={event.title}
            date={dateFormatting(differenceBetweenDates)}
            styles={defineStyles(differenceBetweenDates)}
            getEventWrapper={getEventWrapper}
        />
        })}
    </ul>
};
