// Q1
let nickname = 'kanata';
let age = 23;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');
// Q2
let language = ['JavaScript', 'PHP', 'Python', 'Ruby', 'Go'];
console.log(`私の好きな言語は${language[0]}です。次は${language[2]}を勉強してみたいです。`);
// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);
// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);
// Q5
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

// Q6
function sayHello() {
  console.log('Hello');
}
sayHello();
let sayWorld = function () {
  console.log('World');
}
sayWorld();
// Q7
user.birthday = '2000-09-27';
user.sayHello = function () {
  console.log('Hello!');
}
user.sayHello();
// Q8
let calc = {
  add: function (a, b) {
    console.log(a + b);
  },
  subtract: function (a, b) {
    console.log( a - b);
  },
  multiply: function (a, b) {
    console.log( a * b);
  },
  divide: function (a, b) {
    if (b === 0) {
      return;
    }
    console.log( a / b);
  },
};
calc.add(4, 3);
calc.subtract(12, 2);
calc.multiply(7, 7);
calc.divide(30, 6);

// Q9
const remainder = function (x, y) {
  return x % y;
}
console.log('5を3で割った余りは' + remainder(5, 3) + 'です。');
//Q10
//スコープ内で定義されている変数をスコープ外から参照しようとしているため、参照不可