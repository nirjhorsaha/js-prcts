function publicBusFare(passenger) {
    const busSeatCapacity = 50;
    const microSeatCapacity = 11;
    const publicBusTicketPrice = 250;

    let remaining = 0;

    remaining = passenger % busSeatCapacity;
    remaining = remaining % microSeatCapacity;
    return remaining * publicBusTicketPrice;
}

const givenPassenger = publicBusFare(365);
console.log('Public Bus Fare:',givenPassenger, 'Taka');