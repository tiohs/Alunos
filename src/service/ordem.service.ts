import { Customer } from "../entity/customer";
import Order from "../entity/order";
import { OrderItem } from "../entity/order_item";

export default class OrderService {
  // static placeOrder(customer: Customer, items: OrderItem []): Order {
  //   if(!customer.rewardPoints) {
  //     throw new Error("Customer reward points not found")
  //   }
  //   // const order = new Order(customer.id, customer.rewardPoints, items)
  //   // customer.addRewardPoints(order.rewardPoints)
  //   // return order
  // }
  static total(orders: Order[]): number {
    return orders.reduce((acc, order) => acc + order.total(), 0)
  }
}