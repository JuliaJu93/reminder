import React from 'react';
import { Event } from '../Event';
import { dateFormatting } from  './helpers/datesFormatting';

export const Events = ({ eventsData }) => {
    const currentDate = new Date();

    return eventsData.map(event => {
        const eventsDateFormatted = new Date(event.date);
        const differenceBetweenDates = Math.round((eventsDateFormatted - currentDate) / 60000);
        return <Event title={event.title} date={dateFormatting(differenceBetweenDates)} />
    })
};
