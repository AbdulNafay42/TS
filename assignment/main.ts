import { Car } from "./car";
import { Motorcycle } from "./Motorcycle";
import { Truck } from "./truck";

const car = new Car("Toyota", "Corolla", 2021, false, 4, 5);

console.log("----")
console.log("Make:",car.getMake(), "|| Model:",car.getModel(), "|| Year:",car.getYear(), "|| Doors:",car.getNumDoors(), "|| Seats:",car.getNumSeats())
console.log("----")
car.rent(); 
console.log("----")
car.returnVehicle();

console.log("----")
console.log("----")
console.log("----")
console.log("----")
console.log("----")

const truck = new Truck("mercedes", "benz truck", 2021, false, 10000);
console.log("----")
console.log("Make:",truck.getMake(), "|| Model:",truck.getModel(), "|| Year:",truck.getYear(), "|| Capacity:",truck.getCargoCapacity())
console.log("----")
truck.rent(); 
console.log("----")
truck.returnVehicle();


console.log("----")
console.log("----")
console.log("----")
console.log("----")
console.log("----")

const motorcycle = new Motorcycle("suzuki", "hayabusa", 2021, false, 1000);
console.log("----")
console.log("Make:",motorcycle.getMake(), "|| Model:",motorcycle.getModel(), "|| Year:",motorcycle.getYear(), "|| CC:",motorcycle.getEngineSize())
console.log("----")
motorcycle.rent(); 
console.log("----")
motorcycle.returnVehicle();
