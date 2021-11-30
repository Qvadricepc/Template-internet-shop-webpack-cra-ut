function finance(n) {
    let sum=0;
    let firtstNum = 1;
    let lastNumber = n;
    let numberOfInt = n;
    let localSum=(numberOfInt)/2*(firtstNum+lastNumber)+(numberOfInt)/2*(firtstNum+lastNumber+2);
    for (let i = 1; i < lastNumber; i++)
        sum+=(numberOfInt-i)/2*(firtstNum+lastNumber+2+3*i);

    return sum+localSum;
}

console.log(finance(5), '===105');
console.log(finance(6), '=== 168');
console.log(finance(8), '=== 360');
console.log(finance(15), '=== 2040');