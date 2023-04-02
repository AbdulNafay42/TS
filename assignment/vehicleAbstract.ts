export abstract class Vehicle {
    protected make: string;
    protected model: string;
    protected year: number;
    protected rented: boolean;
  
    constructor(make: string, model: string, year: number, rented: boolean) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = rented;
    }
  
    // Getters
    getMake(): string {
      return this.make;
    }
    getModel(): string {
      return this.model;
    }
    getYear(): number {
      return this.year;
    }
    isRented(): boolean {
      return this.rented;
    }
  
    // Setter
    setRented(rented: boolean): void {
      this.rented = rented;
    }
  
    // Abstract method
    abstract rentalRate(): number;
  
    // Methods
    rent(): void {
      if (this.rented) {
        console.log(`Sorry, this ${this.make} ${this.model} is already rented.`);
      } else {
        console.log(`You have successfully rented this ${this.make} ${this.model}.`);
        this.setRented(true);
      }
    }
  
    returnVehicle(): void {
      if (this.rented) {
        console.log(`You have successfully returned this ${this.make} ${this.model}.`);
        this.setRented(false);
      } else {
        console.log(`This ${this.make} ${this.model} was not rented.`);
      }
    }
  }
  