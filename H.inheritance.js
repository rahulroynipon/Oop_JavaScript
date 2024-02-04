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
    }

    aboutWarenty() {
        console.log(`${this.name} provider ${this.warenty} year of warenty`);
    }
}

let hp = new Hp("HP", "dk34", 3);
// hp.aboutComputer()
// hp.aboutWarenty()