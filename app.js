//Part 1
class Person{
    constructor(name, pets, residence, hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    addHobby(hobby){
        this.hobbies.push(hobby);
    }

    removeHobby(hobby){
        let index = this.hobbies.indexOf(hobby);
        this.hobbies.slice(index);
    }

    greeting(){
        console.log(`Hello fellow person`);
    }
}

//part2
class Coder extends Person{
    constructor(){
        super();
        this.occupation = "Full Stack Web Developer";
        
    }

    greeting(){
        console.log(`Hello my name is ${this.name} I am a ${this.occupation}`);
    }
}

//part3
let man = new Coder("Dewel");
let work = new Coder("Web Developer");

console.log(man.greeting());
console.log(work.greeting());


//part4
//idea1
class Calculator{
    constructor(result){
        result = 0;
    }

    add(a, b){
        if (a + b){
            result = a + b;
            return result;
        }

    }
    subtract(a, b){
        if (a - b){
            result = a - b;
            return result;
        }
    }
    divided(a, b){
        if (a % b){
            result = a % b;
            return result;
        }
    }
    multiply(a, b){
        if (a * b){
            result = a * b;
            return result;
        }
    }
}



//idea2
class Calculator{
    constructor(result, number1, number2){
        this.result = result;
        this.number1 = number1;
        this.number2 = number2;
    }

    add(number1, number2){
        if (number1 + number2){
            result = number1 + number2;
            return result;
        }

    }
    subtract(number1, number2){
        if (number1 - number2){
            result = number1 - number2;
            return result;
        }
    }
    divided(number1, number2){
        if (number1 % number2){
            result = number1 % number2;
            return result;
        }
    }
    multiply(number1, number2){
        if (number1 * number2){
            result = number1 * number2;
            return result;
        }
    }

    displayResult(){
        console.log(this.add);
        console.log(this.subtract);
        console.log(this.divided);
        console.log(this.multiply);
    }
}



