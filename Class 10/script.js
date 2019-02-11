// Task 1

function Person({name,lastName,dataOfBirth,hometown}) {
    this.name = name;
    this.lastName = lastName;
    this.dataOfBirth = dataOfBirth;
    this.hometown = hometown;
}



Person.prototype.sayFullName = function (){
    return `${this.name} ${this.lastName}`
}
let personCaracteristics = {
    name: "Damjan",
    lastName: "Stojanovski",
    dataOfBirth: "20.03.1992",
    hometown: "Skopje"
}
let me = new Person(personCaracteristics);



Person.prototype.age =  function() {
    let currentTime = new Date();
    let currentYear = currentTime.getFullYear();
    let yearOfBirthString = this.dataOfBirth.substr(this.dataOfBirth.length -4);
    let yearOfBirth = parseInt(yearOfBirthString);
    return `The person's age is ${currentYear - yearOfBirth} years old.`;
}


function Trainer (obj) {
    let {course,yearsOfTeaching} = obj;
    this.course = course;
    this.yearsOfTeaching = yearsOfTeaching;
    Person.call(this,obj)
}


let trainerCaracteristics = {
    name: "Jordan",
    lastName: "Michael",
    dataOfBirth: "01.03.1974",
    course: "Dribling",
    yearsOfTeaching: 1
}
Trainer.prototype = Object.create(Person.prototype)
let myTrainer = new Trainer(trainerCaracteristics);


console.log(myTrainer.sayFullName())
console.log(myTrainer.age())





