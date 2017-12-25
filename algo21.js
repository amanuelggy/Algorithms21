// iFactorial
function iFactorial(num) {
    var factor = 1;
    for (var i = 1; i <= num; i++) {
        factor *= i;
    }
    return factor;
}

console.log("Factorial of 5: " + iFactorial(5));