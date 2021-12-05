function validPass(password){
    return /^(?=.*[a-z])(?=.*[0-9])\w{3,20}$/i.test(password) ? 'VALID':'INVALID'

}

console.log(validPass('Username123') === "VALID")
console.log(validPass('Username') === "INVALID")
console.log(validPass('1Username') === "VALID")
console.log(validPass('123') === "INVALID")