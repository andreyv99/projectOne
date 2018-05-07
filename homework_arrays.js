var actors = [{
    firstName: "Tom",
    lastName: "Cruise",
    year: 1962
  },
  {
    firstName: "Jackie",
    lastName: "Chan",
    year: 1954
  },
  {
    firstName: "Brad",
    lastName: "Pitt",
    year: 1963
  },
  {
    firstName: "Jean-Claude",
    lastName: "Van Damme",
    year: 1960
  },
  {
    firstName: "Bruce",
    lastName: "Willis",
    year: 1955
  },
  {
    firstName: "Arnold",
    lastName: "Schwarzenegger",
    year: 1947
  },
  {
    firstName: "Silvester",
    lastName: "Stallone",
    year: 1946
  },
]

//1. Получить массив который будет содержать всех актеров родившихся до 1950го года
var before1950 = actors.filter(function(item) {
  return item.year < 1950
})
console.log(before1950)
//2. Получить массив который будет содержать полное имя каждого актера
var fullName = actors.map(function(item) {
  return item.firstName + " " + item.lastName
})
console.log(fullName)
//3. Отсортировать массив по возрасту актеров - от старшего
var sort = actors.sort(function(a, b) {
  if (a.year > b.year) {
    return 1;
  }
  if (a.year < b.year) {
    return -1;
  }

  return 0;
});
console.log(sort)
//4. Какой общий возраст всех актеров (предположим что ворзраст актера равен 2018-actor.year)

var overallAge = actors.map(function(item) {
  return 2018 - item.year
})



overallAge = overallAge.reduce(function(sum, current) {
  return sum + current
});
console.log(overallAge)

var people = ['John, Lock', 'Colin, Hull', 'Jane, Fox', 'Nick, Milner', 'Sarah, Connor', 'David, Smith', 'Hannah, Rose',
  'Peter, Todd', 'Frank, Sample', 'Luke, Pope', 'Alissa, Moss', 'Sam, Washington', 'Eddie, Cope', 'Lucy, Bower', 'Andre, Cox',
  'Monica, Bell', 'Richard, Nowell', 'Chris, Paxton', 'John, Cho', 'Tom, Price', 'Kate, Ritter', 'Mike, Lee', 'Kristin, Spawn',
]
console.log(people)
//5. Отсортировать в алфовитном порядке по фамилии
var alphabetPeople = people.map(function(item) {
  return item.split(', ')
})
console.log(alphabetPeople)
alphabetPeople = alphabetPeople.sort(function(a, b) {
  if (a[1] > b[1]) {
    return 1;
  }
  if (a[1] < b[1]) {
    return -1;
  }

  return 0;
});
alphabetPeople = alphabetPeople.join(' ')
console.log(alphabetPeople)

var data = ['apple', 'banana', 'apple', 'orange', 'banana', 'orange', 'apple', 'lemon', 'pear', 'pear', 'banana']
//6*. посчитать количество каждого фрукта в массиве - вывести объект например - fruitsCount = {apple: 4, banana: 5, ...}

var fruits = {
  apple: 0,
  banana: 0,
  orange: 0,
  lemon: 0,
  pear: 0
}
data.forEach(function(item) {
  switch (item) {
    case 'apple':
      fruits.apple++;
      break;
    case 'banana':
      fruits.banana++;
      break;
    case 'orange':
      fruits.orange++;
      break;
    case 'lemon':
      fruits.lemon++;
      break;
    case 'pear':
      fruits.pear++;
      break;
  }
})
console.log(fruits)
