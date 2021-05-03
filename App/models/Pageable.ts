import { Sort } from "./Sort";

export default class Pageable {
  offset: number | undefined
  pageNumber: number | undefined
  pageSize: number | undefined
  paged: boolean | undefined
  quantidade: Sort | undefined
  unpaged: boolean | undefined
  
}
