
import { Vehicle } from './vehicleAbstract'

export class Car extends Vehicle {
  private numDoors: number;
  private numSeats: number;

  constructor(make: string, model: string, year: number, rented: boolean, numDoors: number, numSeats: number) {
    super(make, model, year, rented);
    this.numDoors = numDoors;
    this.numSeats = numSeats;
  }

  rentalRate(): number {
    // implementation for rental rate for a car
    return 50;
  }

  // Additional methods and accessors
  getNumDoors(): number {
    return this.numDoors;
  }
  getNumSeats(): number {
    return this.numSeats;
  }
}

