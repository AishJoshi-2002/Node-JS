// console.log("Hey there! I am JS");
// console.log(window); // error
// console.log(alert("Heyy")); // error


// const math = require('./math');
// console.log(math); // before export => {}
// console.log(math.add(2, 5));
// console.log(math.subtract(2, 5));


// const { add, subtract } = require('./math');
// console.log(add(2, 5));
// console.log(subtract(2, 5));


const math = require('./math');
console.log(math.add1(2, 5));
console.log(math.sub1(2, 5));

setTimeout(() => {
    console.log("abc")
}, 5000)