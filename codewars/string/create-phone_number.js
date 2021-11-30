function createPhoneNumber(numbers) {
    numbers.splice(0, 0, '(');
    numbers.splice(4, 0, ')')
    numbers.splice(5, 0, ' ')
    numbers.splice(9, 0, '-')
    return numbers.join("");


}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) === "(123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) === "(111) 111-1111");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) === "(123) 456-7890");

