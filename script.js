'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
// Destructuring wiht function
restaurant.orderDelivery({
  time: '23:30',
  address: 'Geula 6,1',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Bugrashov 18,4',
  starterIndex: 1,
});

// Objekt destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested objects
const { fri } = openingHours;
console.log(fri);
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
// Assain differen value
const { sat } = openingHours;
console.log(sat);
const {
  sat: { open: o, close: c },
} = openingHours;
console.log(o, c);

///////////////////
// Destructuring Arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// Mutating variable in array
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// swiching varibels
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(1, 2);
// console.log(starter, mainCourse);

//  Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Defoult values
// const [p, q, r] = [8, 9]; // we dont know the array
// console.log(p, q, r);
