import { Component,OnInit } from '@angular/core';
import { Cart } from 'src/models/cart.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent  implements OnInit{
  Cart1! : Cart
  ngOnInit(): void {

      this.Cart1 = new Cart(
        1,
        'Lacoste',
        'Coton',
        10000,
        './../../assets/cart1.png'

      )


  }

}
