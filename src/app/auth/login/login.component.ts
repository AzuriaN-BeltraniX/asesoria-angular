import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Declarando variables para su reutilización:
  public baseUrl_NautilusApi: string = environment.url_NautilusApi;
  public year: any = null;
  public loginSuccess: boolean = false;
  public info_Flag: boolean = false;

  // Declarando los datos de inicio de sesión:
  /**
    private loginData_test = {
      email: '',
      password: ''
    };
  */

  public loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.year = new Date().getFullYear();    
  };
  
  // Función que ejecuta obtención de un token mediante NautilusApi:
  async login_NautilusApi() {
    this.loginSuccess = true;

    await this.authService.login_Nautilus(this.loginForm.value).then(results => {
      /** PRUEBA: Imprime en consola los datos filtrados. */
      console.log(`(NautilusApi Users) >>> Token generado: \n ${results}`); 

      this.router.navigateByUrl('/home');
    });
  };

  info() { 
    this.info_Flag = true;
  }

}
