const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function generateName()
{
    let result = [null, null, null, null, null, null];
    const res = result.map(element=>letters[Math.floor(Math.random()*26)]).join('')
    return photoManager.nameExists(res) ? generateName() : res
}

generateName()