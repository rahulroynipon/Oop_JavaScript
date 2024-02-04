// <---------->
// Static Method with class constructor
// <---------->


class Computer {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    aboutComputer() {
        console.log(`this computer name is ${this.name} and the model is ${this.model}`);
    }

    static sayAboutComputer = function () {
        console.log("this is computer");
    }
}


const dell = new Computer('Dell', "sldk33");

Computer.sayAboutComputer()

console.log(dell)
dell.aboutComputer()