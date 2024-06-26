import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../db/sequelize/model/customer.model";
import CustomerRepository from "./customer-repository";
import { Customer } from "../../domain/entity/customer";
import { Address } from "../../domain/entity/address";

describe("Customer repository unit tests", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite", 
      storage: ":memory:", 
      logging: false, 
      sync: { force: true },
    });

    sequelize.addModels([CustomerModel]);
    await sequelize.sync();
  });
  afterAll(async () => {
    await sequelize.close();
  });

  it("should create a customer", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("1", "Customer 1");
    const address = new Address("Street 1", "123", 12345, "City 1");

    customer.address = address;

    await customerRepository.create(customer);

    const customerModel = await CustomerModel.findOne({ where: { id: "1" } });

    expect(customerModel.toJSON()).toStrictEqual({
        id: "1",
        name: customer.name,
        street: address.street,
        number: address.number,
        zip: address.zipCode,
        city: address.city,
        active: customer.isActive(),
        rewardPoints: 0,
      });
   })

  it("should update a customer", async () => {
    // Primeiro deve criar um customer
    // Depois encontrar um customer 
    // Atualizar o customer
    // Verificar se o customer foi atualizado
    const customerRepository = new CustomerRepository();
    const customer = new Customer("1", "Customer 1");
    const address = new Address("Street 1", "123", 12345, "City 1");

    customer.address = address;

    await customerRepository.create(customer);
    const customerModel = await CustomerModel.findOne({ where: { id: "1" } });
    
    
  })
})