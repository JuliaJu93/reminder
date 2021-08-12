import React, { useState, useEffect } from 'react';
import { NewEventForm } from '../NewEventForm';
import { Events } from '../Events';
import { ErrorModal } from '../ErrorModal';
import { getEvents } from '../services/ReminderServices';
import './styles.scss';

export const Container = () => {
    const [eventsData, setEventsData] = useState([]);
    const [messageErrorModal, setMessageErrorModal] = useState('');
    const getEventsWrapper = () => {
        getEvents(setEventsData, setMessageErrorModal);
    }

    useEffect(() => {
        getEventsWrapper();
    }, []);

    return <div className='container'>
        <NewEventForm setEventsData={setEventsData} setMessageErrorModal={setMessageErrorModal} />
        <Events eventsData={eventsData} getEventWrapper={getEventsWrapper} setMessageErrorModal={setMessageErrorModal} />
        {!messageErrorModal && <ErrorModal
            messageErrorModal={messageErrorModal}
            setMessageErrorModal={setMessageErrorModal}
        />}
    </div>
};
