 import { BaseService } from './BaseService' 

export class ProductService extends BaseService {

  ProductList(token, size) {
    return this.getProduct(token, size).then(res => res.json()).then(dado => {
      return dado
    })
  }

  save_updatePruduct(token,product) {
    return this.save(token,product).then(res => res).then(dado => {
      return dado
    })
  }

  deleteProduct(token,id) {
    return this.delete(token, id).then(res => res).then(dado => {
      return dado
    })
  }
 
  syncToServer() {
  }

}
