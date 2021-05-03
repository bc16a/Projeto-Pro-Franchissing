import { API_URL } from '../../config'
import URLSearchParams from '@ungap/url-search-params';
import { Alert } from 'react-native';


export class BaseService {

  getProduct(token,size) {
    return fetch(API_URL + "/product/list?page=0&size="+size,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*',
          'Authorization': token
        }
      });
  }


  save(token, product) {
    return fetch(API_URL + "/product/save",
      {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json',
          'accept': '*/*',
          'Authorization': token
        }
      });
  }


  delete(token, id) {
    return fetch(API_URL + "/product/delete/" + id,
      {
        method: 'DELETE',

        headers: {
          'Accept': '*/*',
          'Authorization': token
        }
      });
  }

  login(data) {
    return fetch(API_URL + "/auth/login", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      },
    })
  }

}
