function spinWords(string) {
    console.log(string.split(' '));
    return string.split(' ').map(word => {
        if (word.length < 5) return word;
        else return word.split('').reverse().join('');
    }).join(' ')
}

console.log(spinWords('Welcome') === 'emocleW');
console.log(spinWords('Hey fellow warriors') === "Hey wollef sroirraw");
console.log(spinWords('This is a test') === "This is a test");
console.log(spinWords('This is another test')=== "This is rehtona test");
console.log(spinWords('You are almost to the last test') === "You are tsomla to the last test");
console.log(spinWords('Just kidding there is still one more') === "Just gniddik ereht is llits one more");