let nums = [10, 20, 30, 41, 53, 60]; 
// return [20, 40, 60, 82, 106, 120]

function isOdd(num) {
    return num % 2 != 0; 
}

function double(num) {
    return num * 2; 
}

const doubles = nums.map(double)
console.log(doubles, nums); 
const oddNums = nums.filter(isOdd)
// console.log(oddNums,); 






// .find(), .findINdex(), .map(), .filter()


function hello() {
    console.log("HELLO"); 
}

// First class citizens
function repeat(n, f) {
    for (let i = 0; i < n; i++) {
        f();
    }
}

// repeat(5, hello)






