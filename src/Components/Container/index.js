import React, { useState, useEffect } from 'react';
import { NewEventForm } from '../NewEventForm';
import { Events } from '../Events';
import { getEvents } from '../services/ReminderServices';
import './styles.scss';

export const Container = () => {
    const [eventsData, setEventsData] = useState([]);
    const getEventsWrapper = () => {
        getEvents(setEventsData);
    }

    useEffect(() => {
        getEventsWrapper();
    }, []);

    return <div className='container'>
        <NewEventForm setEventsData={setEventsData} />
        <Events eventsData={eventsData} getEventWrapper={getEventsWrapper} />
    </div>
};
