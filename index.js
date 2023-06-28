const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);
    
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (n) => {
    return fareMuliplier = (n) => n**2;
}

const fareDoubler = (createFareMultiplier) => {
    return createFareMultiplier * 2;
}

const fareTripler = (createFareMultiplier) => {
    return createFareMultiplier * 3;
}

const selectDifferentDrivers = (drivers, selectingDrivers) => {
    return selectingDrivers(drivers);
}