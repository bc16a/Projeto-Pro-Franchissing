import ProductModel from "./ProductModel";
import Pageable from "./Pageable";
import { Sort } from "./Sort";

export default class PageProductModel {
  content!: ProductModel[]
  empty!: boolean
  first!: boolean
  last!: boolean 
  number!: number
  numnumberOfElementsber!: number
  pageable!: Pageable
  size!: number
  sort!: Sort
  totalElements!: number
  totalPages!: number
}

