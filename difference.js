//variables
let a = 100;
let b = 265;

//function to find difference
function findDifference(a, b) {
  if(a > b) {
    return a - b;
  } else {
    return b - a;
  }
}

//Answer
let ans = findDifference(a, b);

//Print result to user
console.log(ans);
