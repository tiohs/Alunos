export class Address {
  private _street: string
  private _zipCode: string
  private _number: number
  private _city: string
 
  constructor(street: string,zipCode: string, number: number, city: string) {
    this._street = street
    this._zipCode = zipCode
    this._number = number
    this._city = city
    this.validate()
  }

  validate() {
    if(this._zipCode.length === 0) {
      throw new Error('ZipCode is required')
    }
    if(this._number < 0) {
      throw new Error('Number is required')
    }
    if(this._city.length === 0) {
      throw new Error('City is required')
    } 
  }

  get street(): string {
    return this._street
  }
  get number(): number {
    return this._number
  }
  get zipCode(): string {
    return this._zipCode
  }
  get city(): string {
    return this._city
  }
  toString() {
    return `${this._street}, ${this._number}, ${this._zipCode}, ${this._city}`
  }
  create(): Address {
    return new Address(this._street, this._zipCode, this._number, this._city)
  }
}