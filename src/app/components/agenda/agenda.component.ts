import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/auth/login/login.component';

import { AgendaService } from 'src/app/services/agenda.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  // Declarando variables para su reutilización:
  public users: [] = [];
  public existsToken: boolean = false;
  public existsUsers: boolean = false;

  constructor(
    private agendaService: AgendaService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.agendaService.obtenerContactos_JSONPlaceholder().then((results: []) => {
      if (results.length !== 0) {
        this.users = results;

        setTimeout(() => {
          this.existsUsers = true;
        }, 1000);
      }
    });

    this.authService.verificaToken_LocalStorage().then((results: boolean) => {
      /** PRUEBA: Imprime en consola la bandera recibida. */
      // console.log(results);

      this.existsToken = results;
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.existsUsers = false;
    this.existsToken = false;
  };

}
