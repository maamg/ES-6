// function doubleIt(num) {
//     return num*2;
// }


// const doubleIt = function (num) {
//     return num*2;
// }

const doubleIt = num => num*2 ;  // arrow function
const add = (x,y) => x+y;   // arrow function
const give5 = () => 5;
// arrow function multiline calculation
const calculation = (x,y) => {
    const sum = x+y;
    const diff = x -y;
    const result = sum * diff;
    return result;
}

console.log(calculation(20,10));