function arrayDiff(a, b) {
    let result = []
    for (let i=0; i<a.length; ++i) {
        if (b.indexOf(a[i]) === -1) {
            result.push(a[i]);
        }
    }
    return result;
}


console.log(arrayDiff([], [4,5]));
console.log(arrayDiff([3,4], [3]));
console.log(arrayDiff([1,8,2], []));
console.log(arrayDiff([1,2,3], [1,2]));
