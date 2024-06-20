import { Address } from "./address";
import { Customer } from "./customer";

describe("Customer unit tests", () => {

  it("should thow error when id is empty", () => {
    expect(() => { let customer = new Customer("", "John") }).toThrow("Id is required")
  });

  it("should throw error when name is empty", () => {
    expect(() => { let customer = new Customer("1234", "") }).toThrow("Name is required")
  });

  it("should change name", () => {
    const customer = new Customer("123", "John");
    customer.changeName("Jane");
    expect(customer.name).toBe("Jane");
  });

  it("should activate customer", () => {
    const customer = new Customer("1", "Customer 1")
    const address = new Address("Street 1", "123", "12345-678", "City 1");
    customer.address = address;

    customer.activate();

    expect(customer.isActive()).toBe(true);
  })

  it("should throw error when activate customer without address", () => {
    let customer = new Customer("1", "Customer 1")
    expect(() => { customer.activate() }).toThrow("Address is required");
  })

  it("should deactivate customer", () => {
    const customer = new Customer("1", "Customer 1")
 
    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  })
})