// const sum = require("./tutorial")[0];
// const diff = require("./tutorial")[1];
// console.log(sum);
// console.log(diff);
// console.log(sum(1,2));
// console.log(diff(3,2));

const tutorial = require("./tutorial");
console.log(tutorial.sum(3,2));
console.log(tutorial.diff(3,2));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());

