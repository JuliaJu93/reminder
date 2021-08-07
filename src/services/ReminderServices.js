const url = 'http://localhost:9000/events';

export const addEvent = (eventValue, eventData, setEventsData) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({title: eventValue, date: eventData}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(() => getEvent(setEventsData));
}

export const getEvent = setEventsData => {
    fetch(url, {
        method: 'GET'
    })
        .then(response => {
            return response.json()
        })
        .then(data => setEventsData(data))
}
