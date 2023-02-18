/**
 * 1. if ticket number is less than 100, then per ticket price is : 100tk
 * 2. if ticket number is more than 100 but less than 200, then first 100 ticket price will be: 100tk and rest will be 90 tk
 * 1. if ticket number is more than 200, then
 *  - first 100 tickets price will be: 100tk
 *  - second 100 ticket price will be: 90tk
 *  - 200+ ticket price will be: 70tk
 */

function ticketDiscount(ticketQuantity) {
    const first100 = 100;
    const second100 = 90;
    const rest = 70;

    if (ticketQuantity <= 100) {
        const ticketPrice = ticketQuantity * first100;
        return ticketPrice;
    } else if (ticketQuantity <= 200) {
        const first100price = 100 * first100;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100;
        const ticketPrice = first100price + restTicketPrice;
        return ticketPrice;
    } else {
        const first100price = 100 * first100;
        const second100price = 100 * second100;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * rest;
        const ticketPrice = first100price + second100price + restTicketPrice;
        return ticketPrice;
    }
}

const price = ticketDiscount(220);
console.log("Total Ticket Price: ", price);
