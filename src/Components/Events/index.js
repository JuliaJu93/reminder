import React, { useEffect } from 'react';
import { Event } from '../Event';

export const Events = ({ eventsData }) => {
    return eventsData.map(event => {
        return <Event title={event.title} date={event.date} />
    })
};
