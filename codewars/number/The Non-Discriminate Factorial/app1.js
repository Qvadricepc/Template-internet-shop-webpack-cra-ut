function factorial(n) {
    let res = 1;
    for (let i = 1; i <= Math.abs(n); i++) {
        if (n > 0) {
            res = res * i;
        }
        if (n < 0) {
            res = res*i - 2 * res*i;
        }
        if (n === 0) {
            res = 1;
        }
    } return res;
}

console.log('factorial(0)=1', factorial(0) === 1);
console.log('factorial(1)=1', factorial(1) === 1);
console.log('factorial(3)=6', factorial(3) === 6);
console.log('factorial(-3)=-6', factorial(-3) === -6);