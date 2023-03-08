import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import {LandingPageComponent} from './landing-page/landing-page.component'
import { PanierComponent } from './panier/panier.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { SingleCartComponent } from './single-cart/single-cart.component';

const routes: Routes = [
  {
    path:'cart/:id', component : SingleCartComponent
  },


  {
    path:'cart', component : LandingPageComponent,

  },
  {
    path:'panier', component:PanierComponent
  },
  {
    path:'', component : AccountComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
