import { Vehicle } from "./vehicleAbstract";


export class Truck extends Vehicle {
    private cargoCapacity: number;

    constructor(make: string, model: string, year: number, rented: boolean, cargoCapacity: number) {
        super(make, model, year, rented);
        this.cargoCapacity = cargoCapacity;
    }

    rentalRate(): number {
        // implementation for rental rate for a truck
        return 100;
    }

    // Additional methods and accessors
    getCargoCapacity(): number {
        return this.cargoCapacity;
    }
}