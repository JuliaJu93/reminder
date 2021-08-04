import React from 'react';

export const AddEvents = () => {
    return <form>
        <input id="eventInput" />
        <input id="datetime" type="datetime-local" />
        <input id="addButton" type="submit" value="Добавить" />
    </form>
};
