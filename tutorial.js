const sum = (num1,num2) => num1+num2;
function diff(num1,num2) {
    return num1-num2;
}
const PI = 3.14;

class SomeMathObject{
    constructor(){
        console.log("Object created");
    }
}

// 1st Method
// module.exports = [sum,diff];

// 2nd Method
// module.exports.sum = sum;
// module.exports.diff = diff;
// module.exports.PI = PI;
// module.exports.SomeMathObject = SomeMathObject;

// 3rd Method
module.exports = { sum : sum, diff : diff, PI : PI, SomeMathObject : SomeMathObject}