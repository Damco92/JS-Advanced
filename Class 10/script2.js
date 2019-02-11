// Task 3
// let keys = [], values = []
// let person = {
//     name: 'Martina',
//     middleName: 'Luther',
//     lastName: 'Queen'
// }



// const getNamesAndVals = obj => {
//     let {name: getName, middleName: getMiddleName, lastName: getLastName} = person;
//     values.push(getName,getMiddleName,getLastName);
//     keys.push(Object.keys(obj));
//     return [...keys, values];
// }

// console.log(getNamesAndVals(person))

let score = 5;

function UserCreator(name,score) {
    this.name = name;
    this.score = score;
}

UserCreator.prototype.logIn = function () {
    return `${this.name} has logged in`;
}

UserCreator.prototype.incrimentScore = function () {
    function add() {
        ++this.score;
    }
    add();
}

let user1  = new UserCreator("Damjan",56);

console.log(user1.incrimentScore());

// Zosto ova add() ne pokazuva na objektot koga imam closure i nemozam da pristam na property na metod so closure funkcija?
// 