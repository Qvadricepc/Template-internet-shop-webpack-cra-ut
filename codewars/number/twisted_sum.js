function twistedSum(n) {
    let result = 0;
    for (let i=0; i <=n; i++) {
        let numToStr = i.toString();
        if (numToStr.length === 1) {
            result = result + parseInt(numToStr);
        } else {
        let numArr = numToStr.split('');
        numArr.forEach(value => {
            result = result + parseInt(value);
        })
        }
    }
    return result;
}

console.log(twistedSum(3 ) === 6);
console.log(twistedSum(10) === 46);
console.log(twistedSum(11) === 48);
console.log(twistedSum(12) === 51);
