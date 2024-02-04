//-----class expretion

// const myName = class {

// }

//-----class declaration

// class MyName {

// }


class Computer{
    constructor(name, model){
        this.name = name 
        this.model = model
    }

    aboutComputer(){
        console.log(`Name: ${this.name}\nModel: ${this.model}`)
    }
}


const c1 = new Computer('HP',2023)
const c2 = new Computer('Dell',2024)

console.log(c1)
c1.aboutComputer()