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
        console.log("Hello fellow person!")
    }
}


class Coder extends Person{
    constructor(name, occupation){
        super(name);
        let occupation = "Full Stack Web Developer";
        this.occupation = occupation;
        
    }

    greeting(){
        console.log(`Hello my name is ${this.name} I am a ${this.occupation}`);
    }
}

