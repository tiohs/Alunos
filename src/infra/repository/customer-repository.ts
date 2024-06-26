import { Address } from "../../domain/entity/address";
import { Customer } from "../../domain/entity/customer";
import { CustomerRepositoryInterface } from "../../domain/repository/customer-repository.interface";
import CustomerModel from "../db/sequelize/model/customer.model";

export default class CustomerRepository implements CustomerRepositoryInterface {

  async create(entity: Customer): Promise<void> {
    await CustomerModel.create({
      id: entity.id,
      name: entity.name,
      street: entity.address.street,
      number: entity.address.number,
      zip: entity.address.zipCode,
      city: entity.address.city,
      active: entity.isActive(),
      rewardPoints: entity.rewardPoints
    })
  }
  update(entity: Customer): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async find(id: string): Promise<Customer> {
    const customerModel = await CustomerModel.findOne({
      where: {
        id
      }
    })
    
    const customer = new Customer(id, customerModel.name)
    const address = new Address(customerModel.street, customerModel.zip, customerModel.number, customerModel.city)
    customer.address = address
    return customer
  }
  findAll(): Promise<Customer[]> {
    throw new Error("Method not implemented.");
  }
}