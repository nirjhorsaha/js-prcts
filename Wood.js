/**
 * chair - 3 cft
 * table - 10 cft
 * bed - 50c cft
 */

function woodCount(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;
    
    const totalWoodneeded = chairWood + tableWood + bedWood;
    return totalWoodneeded;
}

const totalWood = woodCount(5, 7, 3);
console.log('Total Wood Needed: ', totalWood);