import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  // Declarando la url de JSONPlaceHolder:
  private baseUrl_JsonPlaceHolderApi: string = environment.url_JsonPlaceHolderApi;

  constructor(private http: HttpClient) { }

  // Función para obtener un listado de contactos desde JSONPlaceholder/users:
  obtenerContactos_JSONPlaceholder() {
    return new Promise (resolve => {
      this.http.get(`${this.baseUrl_JsonPlaceHolderApi}/users`).subscribe((resp: any) => {
        /** PRUEBA: Imprime en consola la respusta de la petición. */
        // console.log(resp);

        resolve(resp);
      });
    });
  };

}
