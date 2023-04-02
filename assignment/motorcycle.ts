import { Vehicle } from "./vehicleAbstract";

export class Motorcycle extends Vehicle {
    private engineSize: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, engineSize: number) {
      super(make, model, year, rented);
      this.engineSize = engineSize;
    }
  
    rentalRate(): number {
      // implementation for rental rate for a motorcycle
      return 30;
    }
  
    // Additional methods and accessors
    getEngineSize(): number {
      return this.engineSize;
    }
  }