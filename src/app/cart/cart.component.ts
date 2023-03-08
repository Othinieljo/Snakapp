import { Component,Input,OnInit } from '@angular/core';
import { Cart } from 'src/models/cart.model';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { cartService } from '../services/cart.service';
import { Panier } from 'src/models/panier.module';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent   {
    @Input() cart! : Cart ;

    heart = faHeart
    color = '#fff'
    constructor(private router : Router,
      private CartService : cartService){}

    onColor() : void {

      if (this.color == '#fff'){
        this.color = '#ff0000'
      }else{
        this.color = '#fff'
      }
    }

   onViewCart(){
     return this.router.navigateByUrl(`cart/${this.cart.id}`)
   }
   onAddCart(){
    return this.CartService.onAddCart(this.cart)
   }

}
