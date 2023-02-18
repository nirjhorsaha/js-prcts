function MinToHour(min) {
    givenHours = Math.floor(min / 60);
    minutes = min % 60;
    return { givenHours, minutes };
}

const number = 200;
const minute = MinToHour(number);
console.log(number, 'Minutes = ', givenHours, 'hours' ,minutes, 'Minute');
