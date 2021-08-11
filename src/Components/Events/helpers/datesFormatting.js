const calcHighestDateValue = (differenceBetweenDates, value) => {
    return differenceBetweenDates / value;
}

const calcResidual = (differenceBetweenDates, highestDate, result, dateFormatted) => {
    const residual = differenceBetweenDates - highestDate * result;

    if (residual) {
        calcDateFormatting(residual, dateFormatted);
    }
};

const calcDateFormatting = (differenceBetweenDates, dateFormatted) => {
    if (differenceBetweenDates <= 0 || isNaN(differenceBetweenDates)) {
        dateFormatted.push("Выполнено");
        return dateFormatted;
    } else if (differenceBetweenDates < 60) {
        dateFormatted.push(`${differenceBetweenDates}мин `);
    } else if (59 < differenceBetweenDates && differenceBetweenDates < 1440) {
        const hours = Math.trunc(calcHighestDateValue(differenceBetweenDates, 60));
        dateFormatted.push(`${hours}ч `);
        calcResidual(differenceBetweenDates, 60, hours, dateFormatted);
    } else if (1440 < differenceBetweenDates && differenceBetweenDates < 10080) {
        const days = Math.trunc(calcHighestDateValue(differenceBetweenDates, 1440));
        dateFormatted.push(`${days}д `);
        calcResidual(differenceBetweenDates, 1440, days, dateFormatted);
    } else if (10079 < differenceBetweenDates && differenceBetweenDates < 43800) {
        const weeks = Math.trunc(calcHighestDateValue(differenceBetweenDates, 10080));
        dateFormatted.push(`${weeks}н `);
        calcResidual(differenceBetweenDates, 10080, weeks, dateFormatted);
    } else {
        const months = Math.trunc(calcHighestDateValue(differenceBetweenDates, 43800));
        dateFormatted.push(`Более ${months}м `);
        return dateFormatted;
    }
    return dateFormatted;
}

const dateFormatting = differenceBetweenDates => {
    const dateFormatted = [];
    return calcDateFormatting(differenceBetweenDates, dateFormatted).toString();
}

export { dateFormatting };
