type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Roman',
  privileges: ['mess-around'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(1, 5);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(e: UnknownEmployee) {
  if ('privileges' in e) {
    console.log('Privileges: ' + e.privileges);
  }
  if ('startDate' in e) {
    console.log('Start date: ' + e.startDate);
  }
  console.log('Name: ' + e.name);
}

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
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

// const userInputElement =<HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById(
  'user-input'
)! as HTMLInputElement;

userInputElement.value = 'Hi there!';

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a capital character!',
};

const fetchedUserData = {
  id: 'u1',
  name: 'Mina',
  job: { title: 'CEO', description: 'My own company' },
};

console.log(fetchedUserData?.job?.title);

const userInput = null;

const storeData = userInput ?? 'DEFAULT';

console.log(storeData);
