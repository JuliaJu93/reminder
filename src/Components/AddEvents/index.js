import React, { useState } from 'react';
import './styles.scss';

export const AddEvents = () => {
    const [eventValue, setEventValue] = useState('');
    const [eventData, setEventData] = useState('');

    const handleSubmit = e => {
        console.log(eventData, eventValue);
        e.preventDefault();
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
