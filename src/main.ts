import { Address } from "./domain/entity/address";
import { Customer } from "./domain/entity/customer";
import { Order } from "./domain/entity/order";
import { OrderItem } from "./domain/entity/order_item";

let customer = new Customer("123", "John");
let address = new Address("Street", "123", 12345, "City");

customer.address = address;
customer.activate();

const item1 = new OrderItem("123", "Item 1", 10, "p1", 2);
const item2 = new OrderItem("123", "Item 1", 15, "p2", 1);

const order = new Order("1", "123", [item1, item2]);