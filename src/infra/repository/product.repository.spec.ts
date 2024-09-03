import { Sequelize } from "sequelize-typescript"
import ProductModel from "../db/sequelize/model/product.model";
import Product from "../../domain/entity/product";
import ProductRepository from "./product.repository";

describe("Product repository unit tests", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite", 
      storage: ":memory:", 
      logging: false, 
      sync: { force: true },
    });

    sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });
  afterAll(async () => {
    await sequelize.close();
  });

  it("should create a product", async () => { 
    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 1", 10);

    await productRepository.create(product);

    const productModel = await ProductModel.findOne({ where: { id: "1" } });
    expect(productModel.toJSON()).toStrictEqual({
      id: "1",
      name: "Product 1",
      price: 10,
    });
  })
  it("should update a product", async () => { 
    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 1", 10);  

    await productRepository.create(product);

    product.changeName("Product 2");
    product.changePrice(20);

    await productRepository.update(product);

    const productModel2 = await ProductModel.findOne({ where: { id : "1"}})

    expect(productModel2.toJSON()).toStrictEqual({
      id: "1",
      name: "Product 2",
      price: 20
    })
  })

  it("should find a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 1", 10);

    await productRepository.create(product); 
    const productModel = await ProductModel.findOne({ where: { id: "1" } });
    const foundProduct = await productRepository.find("1")
    
    expect(productModel.toJSON()).toStrictEqual({
      id: foundProduct.id,
      name: foundProduct.name,
      price: foundProduct.price
    })
   })
  it("should find all products", async () => {
    const productRepository = new ProductRepository();
    const product1 = new Product("1", "Product 1", 10);
    const product2 = new Product("2", "Product 2", 20);
    const product3 = new Product("3", "Product 3", 30);

    await productRepository.create(product1);
    await productRepository.create(product2);
    await productRepository.create(product3);

    const foundProducts = await productRepository.findAll();
    expect(foundProducts).toEqual([product1, product2, product3]);
  })
})