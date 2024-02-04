const computer = {
    name: "",
    model: "",
    aboutComputer() {
        console.log(`this computer name is ${this.name} and the model is ${this.model}`);
    }
}

let dell = Object.create(computer)
dell.name = "DEll";
dell.model = "2342dksdh"
dell.aboutComputer()
console.log(dell)

let hp = Object.create(computer)

hp.name = "HP"
hp.model = "293sdf"

hp.aboutComputer()