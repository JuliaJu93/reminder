import React, { useState } from 'react';
import { addEvent } from '../../services/ReminderServices';
import './styles.scss';

export const NewEventForm = ({ setEventsData }) => {
    const [eventValue, setEventValue] = useState('');
    const [eventData, setEventData] = useState('');

    const clearFields = () => {
        setEventValue('');
        setEventData('');
    }

    const handleSubmit = e => {
        e.preventDefault();
        addEvent(eventValue, eventData, setEventsData);
        clearFields();
    }

    return <form className='addEventsContainer' onSubmit={e => handleSubmit(e)} >
        <label>
            Событие:
            <input id="eventInput" value={eventValue} onChange={e => setEventValue(e.target.value)} />
        </label>
        <label>
            Время:
            <input id="datetime" type="datetime-local" value={eventData} onChange={e => setEventData(e.target.value)} />
        </label>
        <input id="addButton" type="submit" value="Добавить" />
    </form>
};
