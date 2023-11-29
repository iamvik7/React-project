//variables
let a = 233;
let b = 131;

// function two find products of two numbers
function findProduct(a, b) {
  return a * b;
}

function findDivision(a, b) {
  if(a > b && a > 0 && b > 0) {
    return a/b;
  } else if(b > a && a > 0 && b > 0) {
    return b/a;
  }
}

// calling division fuction
let divisionAns = findDivision(a, b);
  

//calling the function 
let ans = findProduct(a, b);

//printing the answer
console.log(ans);
