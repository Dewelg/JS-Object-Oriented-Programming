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
        let valuesBefore = this.hobbies.slice(0, index);
        let valuesAfter = this.hobbies.slice(index + 1);
        this.hobbies = valuesBefore.concat(valuesAfter);
        
    }

    greeting(){
        console.log(`Hello fellow person`);
    }

    info(){
        return Object.entries(this).toString();
}
}

//part2
class Coder extends Person{
    constructor(name, pets, residence, hobbies, occupation){
        super(name, pets, residence, hobbies);
        this.occupation = occupation ;
        
    }

    greeting(){
        console.log(`Hello I am a coder`);
    }
}

//part3
let coder = new Coder(
    "Dewel", 
    0, 
    "New York", 
    ["reading", "working out", "writing"],
    "Full Stack Web Developer"
    );
    coder.addHobby("MMA")
    console.log(coder);
    coder.removeHobby("writing");
    console.log(coder);
    console.log(coder.info())
//part4
class Calculator{
    result = 0;

    add(a, b){
      this.result = a+b;
			return this.result;
    }
    subtract(a, b){
       this.result = a-b;
			return this.result;
    }
    divided(a, b){
        this.result = a/b;
			return this.result;
    }
    multiply(a, b){
				this.result = a*b;
			return this.result;
		}
		
		display(){
			console.log(this.result);
	}
}






