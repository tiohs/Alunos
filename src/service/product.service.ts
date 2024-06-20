import Product from "../entity/product"

export default class ProductService {
  static increasePrice(products: Product[], percentage: number): void {
    products.forEach(product => {
      let newPrice = product.price + (product.price * ( percentage / 100))
      product.changePrice(newPrice)
    })
  }
}