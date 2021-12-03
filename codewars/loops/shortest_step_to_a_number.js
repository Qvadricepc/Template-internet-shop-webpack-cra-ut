function shortestStepsToNum(num) {
    let steps = 0
    while (num > 1) {
        num % 2 === 0 ? num /= 2 : num--
        steps++
    }
    return steps
}

console.log(shortestStepsToNum(1) === 0);
console.log(shortestStepsToNum(12) === 4);
console.log(shortestStepsToNum(16) === 4);
console.log(shortestStepsToNum(71) === 9);