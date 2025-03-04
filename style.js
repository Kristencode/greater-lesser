let fixedNum = 0;
let inputNum = t;

if (inputNum > fixedNum) {
console.log("Positive");
} else if (inputNum < fixedNum) {
 console.log("negative");
} else if (inputNum === fixedNum) {
  console.log("neutral");
} else if (isNaN(inputNum)) {
  console.log("not a number");
}

console.log(inputNum);
