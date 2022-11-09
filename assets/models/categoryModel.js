

class Category {

  constructor({ name = "" }) {
    this.name = name
  }

  static saveCategory(CategoryModel = new Category("")) {
    const categories = JSON.parse(localStorage.getItem("@qipu:categories")) || []
    categories.push(CategoryModel)
    localStorage.setItem("@qipu:categories", JSON.stringify(categories))
    return `Categoria ${CategoryModel.name} registrado com sucesso!`
  }
}

export default Category