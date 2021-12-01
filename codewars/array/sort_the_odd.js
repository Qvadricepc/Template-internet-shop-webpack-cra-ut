function sortArray(array) {
    let oddArr= [];
    let evenArr=[];
    let result =[];
    for (let i=0; i < array.length; i++)
        array[i] % 2 === 0 ? evenArr.push(array[i]) : oddArr.push(array[i])
    oddArr.sort((a,b) => a - b)
    for (let i=0; i < array.length; i++)
        array[i] % 2 === 0 ? result.push(evenArr.shift()) : result.push(oddArr.shift())
    return result
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))
console.log(sortArray([5, 3, 1, 8, 0]))