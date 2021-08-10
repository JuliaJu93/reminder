const sortingData = eventsData => {
    return eventsData.sort(function(a,b){
        return new Date(a.date) - new Date(b.date);
    });
}

export { sortingData };
