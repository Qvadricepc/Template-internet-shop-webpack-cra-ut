function encode(string) {
    const  vowels = ['a', 'e', 'i', 'o', 'u'];


    return [...string].map(code => vowels.includes(code) ? vowels.indexOf(code)+1 : code).join('');

}

console.log(encode('hello') === 'h2ll4')


function decode(string) {
    const  vowels = ['a', 'e', 'i', 'o', 'u'];
    return [...string].map(code => Number(code) ? vowels[Number(code)-1] : code).join('');
}
console.log(decode('h2ll4') === 'hello')
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5