import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Declarando la url de servicios de NautilusApi by AzuriaN BeltraniX:
  private baseUrl_NautilusApi: string = environment.url_NautilusApi;

  constructor(private http: HttpClient) { }

  // Función que devuelve un token de NautilusApi:
  login_Nautilus(dataLogin: any) {
    return new Promise (resolve => {
      this.http.post(`${this.baseUrl_NautilusApi}/login`, dataLogin).subscribe(async resp => {
        /** PRUEBA: Imprime en consola la respuesta de la petición. */
        // console.log(resp);
        
        // Si la respuesta devuelve "true", entonces retorna el token recibido:
        if (resp['ok'] === true) {
          resolve(resp['token']);

          await localStorage.setItem('token', resp['token']);
        };
      }, (err) => {
        console.log(err);
        resolve(err)
      });  
    });
  };

  async verificaToken_LocalStorage() {
    const token = await localStorage.getItem('token');

    /** PRUEBA: Imprime en consola el token almacenado en LocalStorage. */
    // console.log(token);

    return new Promise(resolve => {
      if (token === null) {
        resolve(false);
      } else {
        resolve(true);
      };
    });
  };

}
