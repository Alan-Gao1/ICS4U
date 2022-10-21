let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// join
// console.log(fruits.join());
// console.log(fruits.join('--'));
// push
// fruits.push('Kiwi'); //push a string on to the array
// console.log(fruits.join());
// fruits.push(['Strawberry', 'Blueberry']); //pushed an array onto the array
// console.log(fruits.join());
// fruits.push(5);
// console.log(fruits.join());

// console.log(JSON.stringify(fruits));
// pop
// console.log(fruits.pop());
// console.log(fruits.join());
// shift
// console.log(fruits.join());
// console.log(fruits.shift());
// console.log(fruits.join());
// unshift
// console.log(fruits.unshift('Potato'));
// console.log(fruits.join());
// concat
// fruits = fruits.concat(['Strawberry', 'Blueberry']);
// console.log(JSON.stringify(fruits));
// // slice
// fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// citrus = fruits.slice(1, 3);
// console.log(citrus);
// console.log(fruits);

// fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// citrus = fruits.slice(1, 3);


// splice
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(1, 1, "Lemon", "Kiwi");
console.log(fruits);