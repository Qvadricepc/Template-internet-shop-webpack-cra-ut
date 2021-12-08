function highestRank(arr) {
    let result = {};
    let highestNumber = 0;
    arr.forEach((number) => {
        result[number] = !result[number] ? 1 : result[number] + 1;
        if (result[number] > highestNumber) {
            highestNumber = result[number];
        }
    });
    const filtered = Object.keys(result).sort((a, b) => {
        return result[b] - result[a];
    }).filter(element => result[element] === highestNumber).sort((a,b) => b - a)

    return +filtered[0];

}


console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))