import React, { useState, useEffect } from 'react';
import { Event } from '../Event';
import { dateFormatting } from  './helpers/datesFormatting';
import  { defineStyles } from './helpers/defineStyles';
import  { sortingData } from './helpers/sortingData';

export const Events = ({ eventsData, getEventWrapper, setMessageErrorModal }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = () => setInterval(() => setCurrentDate(new Date()), 60000);
        interval();
        return clearInterval(interval());
    }, []);

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
            setMessageErrorModal={setMessageErrorModal}
        />
        })}
    </ul>
};
