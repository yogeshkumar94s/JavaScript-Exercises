// Q:  Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

function findSundayBetween2014and2050() {
  for (let year = 2014; year <= 2050; year++) {
    const JanuaryFirst = new Date(year, 0, 1);

    if (JanuaryFirst.getDay() === 0) {
      console.log(`january 1, ${year} is a Sunday.`);
    }
  }
}

findSundayBetween2014and2050();
