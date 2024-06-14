export class Address {
  private _street: string
  private _zipCode: string
  private _number: string
  private _city: string
 
  constructor(street: string,zipCode: string, number: string, city: string) {
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
    if(this._number.length === 0) {
      throw new Error('Number is required')
    }
    if(this._city.length === 0) {
      throw new Error('City is required')
    } 
  }

  toString() {
    return `${this._street}, ${this._number}, ${this._zipCode}, ${this._city}`
  }
}