// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornInThe1500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(bornInThe1500s);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.sort((a, b) => a.year - b.year);
console.table(sortedInventors);

// Array.prototype.reduce() - foi preciso colocar o valor inicial 0 pra funcionar como 'number'!
// 4. How many years did all the inventors live all together?
const livedYears = inventors.reduce((totalAge, inventor) => totalAge + (inventor.passed - inventor.year), 0);
console.log(livedYears);

// 5. Sort the inventors by years lived
const sortByYearsLived = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year))
console.log(sortByYearsLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/*
  const boulevardsOfParis = document.querySelectorAll('div.mw-category-group li a');
  const boulevarsWithWord = Array.from(boulevardsOfParis).reduce((finalList, boulevard) => {
    if (boulevard.innerHTML.includes('de')) {
        finalList.push(boulevard.innerHTML);
    }
    return finalList;
}, []);
  console.log(boulevardsWithWord);
*/
const boulevardsWithWord = [
  "Boulevard de l'Amiral-Bruix",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard de la Zone"
]
console.log(boulevardsWithWord);

// 7. sort Exercise - people.sort() would also work since last name comes first in each value
// Sort the people alphabetically by last name
const peopleSorted = people.sort((a, b) => getLastName(a)(b));
console.log(peopleSorted);

// The function below was created to train the usage of the currying technique! 🙂
// It mays seem too much for a simple exercise but it was just a way to train something new
function getLastName(fullName) {
  const lastName = fullName.substring(0, fullName.indexOf(','));
  return (fullNameB) => {
    const lastNameB = fullNameB.substring(0, fullNameB.indexOf(','));
    if (lastName > lastNameB) {
      return 1;
    } else if (lastName === lastNameB) {
      return 0;
    }
    return -1;
  };
}

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const summedUpData = data.reduce((acc, current) => {
  if (acc[current]) {
    acc[current]++;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {});
console.log(summedUpData);
