import { Customer } from "../entity/customer"
import Order from "../entity/order"
import { OrderItem } from "../entity/order_item"
import OrderService from "./ordem.service"

describe("Order service unit tests", () => {

  // it("should place an order", () => { 
  //   const costomer = new Customer("123", "John")
  //   const item1 = new OrderItem("i1", "Item 1", 10, "p1", 1);
  //   const order = OrderService.placeOrder(costomer, [item1])

  //   expect(customer.rewardsPoints).toBe(5)
  //   expect(order.total()).toBe(10)
  //  })

  it("should get total of all orders", () => { 
    const orderItem = new OrderItem("1", "Item 1", 100, "p1", 2)
    const oderItem2 = new OrderItem("2", "Item 2", 200, "p2", 2)
    
    const order = new Order("123", "123", [orderItem])
    const order2 = new Order("1", "123", [oderItem2])

    const total = OrderService.total([order, order2]);

    expect(total).toBe(600)
    
  })
})