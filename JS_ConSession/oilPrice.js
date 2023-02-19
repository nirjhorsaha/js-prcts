function oilPrice(Diesel, Petrol, Octen) {
    const DieselPrice = 114;
    const PetrolPrice = 130;
    const OctenPrice = 135;

    const totalPrice = ((Diesel * DieselPrice) + (Petrol * PetrolPrice) + (Octen * OctenPrice));
    return totalPrice;
}

const oilQuantity = oilPrice(1, 3, 2);
console.log("Total Price:", oilQuantity,"Taka");