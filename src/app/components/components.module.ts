import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaComponent } from './agenda/agenda.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AgendaComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AgendaComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
