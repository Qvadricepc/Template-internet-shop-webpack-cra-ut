class Dinglemouse {

    constructor(age, sex, name) {
        this.obj = {};

    }

    setAge(age) {
        this.obj.age = ` I am ${age}.`;
        return this;
    }

    setSex(sex) {
        this.obj.sex = ` I am ${sex == 'M' ? 'male' : 'female'}.`;
        return this;
    }

    setName(name) {
        this.obj.name = ` My name is ${name}.`;
        return this;
    }

    hello() {
        return "Hello." + Object.values(this.obj).join('')
    }
}

let dm = new Dinglemouse().setName("Bob").setAge(27).setSex('M');
console.log(dm.hello())




