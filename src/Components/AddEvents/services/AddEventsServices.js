const url = 'http://localhost:9000/events';

export const addEvent = (eventValue, eventData) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({title: eventValue, date: eventData}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => console.log(response.json()));
}

export const getEvent = () => {
    fetch(url, {
        method: 'GET'
    })
        .then(response => console.log(response.json()));
}
