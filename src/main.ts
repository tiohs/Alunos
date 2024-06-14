import { Address } from "./entity/address";
import { Customer } from "./entity/customer";
import Order from "./entity/order";
import { OrderItem } from "./entity/order_item";

let customer = new Customer("123", "John");
let address = new Address("Street", "123", "12345-678", "City");

customer.address = address;
customer.activate();

const item1 = new OrderItem("123", "Item 1", 10);
const item2 = new OrderItem("123", "Item 1", 15);

const order = new Order("1", "123", [item1, item2]);