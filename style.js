let fixedNum = 0;
let inputNum = 2;

if (inputNum > fixedNum) {
  return "Positive NUm";
} else if (inputNum < fixedNum) {
  return "Negative number";
} else if (inputNum === fixedNum) {
  return"number is neutral";
} if(isNaN(inputNum)){
  console.log('not a number')
}

console.log(inputNum);
