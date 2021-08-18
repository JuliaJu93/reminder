import React, { useState } from 'react';
import { addEvent, getEvents } from '../../services/ReminderServices';
import './styles.scss';
import { IndicatorAddingEvent } from '../IndicatorAddingEvent';

export const NewEventForm = ({ setEventsData, setMessageErrorModal }) => {
    const [eventValue, setEventValue] = useState('');
    const [eventData, setEventData] = useState('');
    const [isIndicatorAddingEvent, setIsIndicatorAddingEvent] = useState(false);

    const clearFieldsForm = () => {
        setEventValue('');
        setEventData('');
    }

    const showIndicatorAddingEvent = () => {
        setIsIndicatorAddingEvent(true);
        setTimeout(() => setIsIndicatorAddingEvent(false), 1500);
    }

    const handleSubmit = e => {
        e.preventDefault();
        addEvent(eventValue, eventData)
            .then(() => { getEvents(setEventsData, setMessageErrorModal); showIndicatorAddingEvent()})
            .catch(() => setMessageErrorModal('Ошибка!'));
        clearFieldsForm();
    }

    return <div>
        <form className='eventsContainer' onSubmit={e => handleSubmit(e)} >
            <label>
                Событие:
                <input required id="eventInput" value={eventValue} onChange={e => setEventValue(e.target.value)} />
            </label>
            <label>
                Время:
                <input required id="datetime" type="datetime-local" value={eventData} onChange={e => setEventData(e.target.value)} />
            </label>
            <input id="addButton" type="submit" value="Добавить" />
        </form>
        {isIndicatorAddingEvent && <IndicatorAddingEvent />}
    </div>
};
