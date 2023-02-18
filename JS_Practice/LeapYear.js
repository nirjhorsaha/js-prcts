function FindLeapYear(Numbers) {
  const leapYear = [];
  for (i = 0; i < Numbers.length; i++) {
    const index = i;
    const year = Numbers[index];
    if ((year % 4 == 0 && year % 4 != 100) || year % 400 == 0) {
      leapYear.push(year);
    }
  }
  return leapYear;
}

const years = [2000, 2005, 2004, 2015, 2002, 2020,];
const number = FindLeapYear(years);
console.log("These years are leap year: ", number);
