import { Usuario } from '../../models/LoginMode'
import { BaseService } from './BaseService' 

export class UsuarioService extends BaseService {
 
  fazerLogin(data) { 
    return this.login(data).then(res => res).then(dado => {
      return dado
    }) 
  }

  syncToServer() { 
  }

}


