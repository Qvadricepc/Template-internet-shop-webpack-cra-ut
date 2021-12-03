function reverse(arr) {
    let left = null;
    let right = null;
    let length = arr.length;
    for (left = 0, right = length - 1; left < right; left += 1, right -= 1)
    {
        let newArr = arr[left];
        arr[left] = arr[right];
        arr[right] = newArr;
    }
    return arr
}

console.log(reverse(['hello','world','how','are','you','?']))