// Creating an object
let car = {
    make: "BMW",
    model: "X3",
    baujahr: "2010",
    millage: 100000,
    prevOwnder: ["Hans","Klaus","Jürgen"],
    engine: true,
    defect: false,
    drive: function(){
        if(engine == true && defect == false) {
            console.log(`The car is ready to go!`);
        } else {
            console.log(`You need to get it to a mechanic!`);
        }
    }
}
// Looking into it's properties and methods
console.log(car);
// Creating an other object
let auto = car;
// Changing the property of the auto object
auto.model = "M3";
auto.prevOwnder.push("Damjan");
// Displaying the both objects and we notice that the both object properties changed
console.log(car,auto);
// To change this we need to create a new objects that will have the properties of the old object
auto = JSON.parse(JSON.stringify(car));
auto.prevOwnder.push("Goran","Ivan","George");
console.log(car.prevOwnder);
console.log(auto.prevOwnder);
// Trainer mail: igor.mitkovski@gmail.com
