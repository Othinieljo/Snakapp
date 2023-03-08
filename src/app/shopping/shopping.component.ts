import { Component,Input,OnInit } from '@angular/core';
import { Cart } from 'src/models/cart.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent  {
    @Input() cart! : Cart


}
