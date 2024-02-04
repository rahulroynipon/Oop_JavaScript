class Computer {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }

    aboutComputer() {
        console.log(`this computer name is ${this.name} and the model is ${this.model}`);
    }
}

class Hp extends Computer {
    constructor(name, model, warenty) {
        super(name, model);
        this.warenty = warenty;
        // console.log("this is hp computer");
    }

    aboutWarenty() {
        console.log(`${this.name} provider ${this.warenty} year of warenty`);
    }

    useComputer(value) {
        console.log(`${(this.warenty * 12 * 30) - (value * 30)} day warenty remaing `);
    }
}

let hp = new Hp("HP", "dk34", 3);
hp.aboutComputer();
hp.aboutWarenty()
hp.useComputer(6.5)
// console.log(hp)