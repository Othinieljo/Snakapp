import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/models/cart.model';
import { cartService } from '../services/cart.service';
import { ShoppingComponent } from '../shopping/shopping.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  constructor(private CartService : cartService){}
  panier$! : Observable<Cart[]>

  ngOnInit(): void {
    this.panier$ = this.CartService.getAllPaniers()
  }
}
