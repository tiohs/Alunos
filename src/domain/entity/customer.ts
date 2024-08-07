import { Address } from "./address";

export class Customer {
  private _id: string; 
  private _name: string;
  private _address!: Address;
  private _active: boolean = false;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  } 


  validate() {
    if(this._name.length === 0) {
      throw new Error('Name is required');  
    }
    if(this._id.length === 0) {
      throw new Error('Id is required');
    }
  }

  get id(): string {
    return this._id;
  }
  changeName(name: string): void {
    this._name = name;
    this.validate();
  }
 
  activate(): void {
    if(this._address === undefined) {
      throw new Error('Address is required');
    }
    this._active = true;
  }

  set address(address: Address) {
    this._address = address;
  }

  deactivate(): void {
    this._active = false;
  }

  get name(): string {
    return this._name;
  }

  isActive(): boolean {
    return this._active;
  }

  addRewardPoints(points: number): void {
    this._rewardPoints += points;
  }

  changeAddress(address: Address) {
    this._address = address;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  get address(): Address {
    return this._address;
  }
}
