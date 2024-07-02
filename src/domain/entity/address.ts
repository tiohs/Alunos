export class Address {
  private _street: string
  private _zip: string
  private _number: number = 0
  private _city: string
 
  constructor(street: string,zip: string, number: number, city: string) {
    this._street = street
    this._zip = zip
    this._number = number
    this._city = city
    this.validate()
  }

  validate() {
    if(this._zip.length === 0) {
      throw new Error('zip is required')
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
  get zip(): string {
    return this._zip
  }
  get city(): string {
    return this._city
  }
  toString() {
    return `${this._street}, ${this._number}, ${this._zip}, ${this._city}`
  }
  create(): Address {
    return new Address(this._street, this._zip, this._number, this._city)
  }
}