import { Product, Category } from "./models/index.js"

const product = new Product({name: "batata", description: "alguma parada", image: "", value: 0, categories: [""]})
const category = new Category({name: "tuberculos"})



// Interation for button to go to next steps 
document.querySelector("button").addEventListener("click", () => {

  alert("bost")
})