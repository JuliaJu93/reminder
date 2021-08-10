const url = 'http://localhost:9000/events';

export const addEvent = (eventValue, eventData) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({title: eventValue, date: eventData}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getEvents = setEventsData => {
    fetch(url, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .then(data => setEventsData(data))
}

export const deleteEvent = id => {
    return fetch(`${url}/:${id}`, {
        method: 'DELETE',
        body: JSON.stringify({id: id}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
