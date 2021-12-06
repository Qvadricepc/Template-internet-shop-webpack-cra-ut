function hungrySeven(arr) {
    let string = arr.toString();
    while (string.includes('7,8,9')) {
        arr.forEach(function(number, index) {
            if (number === 7 && arr[index + 1] === 8 && arr[index + 2] === 9) {
                arr[index] = 8;
                arr[index + 1] = 9;
                arr[index + 2] = 7;
                string = arr.toString();
            }
        });
    }
    return arr;
}

console.log(hungrySeven([7,8,9]))