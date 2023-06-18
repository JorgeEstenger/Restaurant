import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'menu', component: MenuComponent},
  {path:'delivery', component: DeliveryComponent},
  {path:'formulario', component: FormularioComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
