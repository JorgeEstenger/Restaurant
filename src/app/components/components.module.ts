import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AppRoutingModule } from '../app-routing.module';
import { ItalianFoodMenuComponent } from './italian-food-menu/italian-food-menu.component';
import { FormularioComponent } from './formulario/formulario.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    DeliveryComponent,
    ItalianFoodMenuComponent,
    FormularioComponent,

  ],

exports: [
  HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    DeliveryComponent,

],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }
