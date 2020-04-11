"use strict";
var _a;
var e1 = {
    name: 'Roman',
    privileges: ['mess-around'],
    startDate: new Date(),
};
function add2(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = add(1, 5);
function printEmployeeInformation(e) {
    if ('privileges' in e) {
        console.log('Privileges: ' + e.privileges);
    }
    if ('startDate' in e) {
        console.log('Start date: ' + e.startDate);
    }
    console.log('Name: ' + e.name);
}
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo ' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 30 });
var userInputElement = document.getElementById('user-input');
userInputElement.value = 'Hi there!';
var errorBag = {
    email: 'Not a valid email',
    username: 'Must start with a capital character!',
};
var fetchedUserData = {
    id: 'u1',
    name: 'Mina',
    job: { title: 'CEO', description: 'My own company' },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
var userInput = null;
var storeData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storeData);
//# sourceMappingURL=app.js.map