


class Product {

  constructor({ name = "" , description = "", value = 0, image = new URL(), categories = [""] }){
    this.name = name
    this.description = description
    this.value = value
    this.image = image
    this.category = categories
  }


  static saveProduct (ProductModel = new Product()) {
    const products = JSON.parse(localStorage.getItem("@qipu:products")) || []
    products.push(ProductModel)
    localStorage.setItem("@qipu:products", JSON.stringify(products))
    return `Product ${ProductModel.name} registrado com sucesso!`
  }

}

export default Product