class Computer {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    aboutComputer() {
        console.log(`this computer name is ${this.name} and the model is ${this.model}`);
    }

    get computerName() {
        return this.name;
    }

    set computerName(value) {
        this.name = value;
    }
}

const dell = new Computer('Dell', "sldk33");

dell.computerName = "HP"
console.log(dell.computerName)
console.log(dell)