import React, { useState, useEffect } from 'react';
import { NewEventForm } from '../NewEventForm';
import { Events } from '../Events';
import { getEvent } from '../../services/ReminderServices';
import './styles.scss';

export const Container = () => {
    const [eventsData, setEventsData] = useState([]);
    useEffect(() => {
        getEvent(setEventsData);
    }, []);

    return <div className='container'>
        <NewEventForm setEventsData={setEventsData} />
        <Events eventsData={eventsData} />
    </div>
};
