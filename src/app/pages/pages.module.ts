import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
