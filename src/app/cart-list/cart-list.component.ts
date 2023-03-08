import { Component,OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/models/cart.model';
import { cartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent  implements OnInit{
   constructor(private CartService : cartService ){}

   carts$! : Observable<Cart[]>

  ngOnInit(): void {
     this.carts$ = this.CartService.getAllCarts()
  }
}
