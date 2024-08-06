import { Order } from "./order"
import { OrderItem } from "./order_item"

describe("Order unit tests", () => {

  it("should create an order", () => {
    const item1 = new OrderItem("1", "Item 1", 100, "p1", 2) 
    expect(new Order("123", "123", [item1])).toBeInstanceOf(Order)
  })

  it("should throw error when id is empty", () => {
    expect(() => { 
      let order = new Order("", "123", []) 
    }).toThrow("Id is required");

  })

  it("should throw error when customerId is empty", () => {
    expect(() => { 
      let order = new Order("123", "", []) 
    }).toThrow("customerId is required");
  })

  it("should throw error when items is empty", () => {
    expect(() => { 
      let order = new Order("123", "123", []) 
    }).toThrow("Items are required");
  })

  it("should calculate total", () => {
    const item1 = new OrderItem("1", "Item 1", 100, "p1", 2)
    const item2 = new OrderItem("2", "Item 2", 200, "p2", 2)
    const order = new Order("123", "123", [item1, item2])
    expect(order.total()).toBe(600)
  })

  
  it("should check if the item quantity is greater than zero", () => {    
    expect(() => {
      const item1 = new OrderItem("2", "Item 2", 200, "p2", 0)
      const order = new Order("123", "123", [item1])
    }).toThrow("Quantity must be greater than zero")
  })

})