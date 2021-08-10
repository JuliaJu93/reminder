const defineStyles = differenceBetweenDates => {
    let stylesColor;
    if (isNaN(differenceBetweenDates) || differenceBetweenDates <= 0) {
        stylesColor = "containerEvent performedEvent";
    } else if (differenceBetweenDates <= 5 ) {
        stylesColor = "containerEvent nearEvent";
    } else if (differenceBetweenDates <= 60) {
        stylesColor = "containerEvent mediumEvent";
    } else if (differenceBetweenDates > 60) {
        stylesColor = "containerEvent distantEvent";
    }
    return stylesColor;
}

export { defineStyles };
