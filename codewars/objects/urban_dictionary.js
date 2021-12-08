var WordDictionary = function () {
    this.arr = []
};
WordDictionary.prototype.addWord = function (word) {
    this.arr.push(word)
};
WordDictionary.prototype.search = function (word) {
    let searchValues = new RegExp('^'+word+'$')
    return this.arr.find(search=>searchValues.test(search))!==undefined
};

let wd= new WordDictionary();

wd.addWord('a')

console.log(wd)
console.log(wd.search('a'))
