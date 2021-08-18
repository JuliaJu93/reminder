import React, { memo } from 'react';
import './styles.scss';
import { deleteEvent } from '../../services/ReminderServices';

export const Event = memo(({ id, title, date, styles, getEventWrapper, setMessageErrorModal }) => {
    const onClickDelete = () => {
        deleteEvent(id)
            .then(res => {if (res.status === 204) {
            getEventWrapper();
        }})
            .catch(() => setMessageErrorModal('Ошибка!'));
    }

    return <li className={styles}>
        <div> {date} </div>
        <div> {title} </div>
        <button onClick={() => onClickDelete()}> Удалить </button>
    </li>
});
