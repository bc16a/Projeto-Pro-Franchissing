import IngredientModel from "./IngredientModel";

export default class ProductModel { 
  id!: Number;  
  image!: string;
  ingredients!:IngredientModel[]
  name!: string;
  price:any
}