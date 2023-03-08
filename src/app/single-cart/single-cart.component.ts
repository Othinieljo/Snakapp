import { Component,OnInit} from '@angular/core';
import { Cart } from 'src/models/cart.model';
import { cartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-cart',
  templateUrl: './single-cart.component.html',
  styleUrls: ['./single-cart.component.css']
})
export class SingleCartComponent implements OnInit {
  cart$! : Observable<Cart>
  constructor( private CartsService : cartService,
    private route : ActivatedRoute){}
    heart = faHeart
    color = '#fff'

    onColor() : void {

      if (this.color == '#fff'){
        this.color = '#ff0000'
      }else{
        this.color = '#fff'
      }
    }
  ngOnInit(): void {
    const cartId = +this.route.snapshot.params['id']
    this.cart$ = this.CartsService.getCatById(cartId)
  }
}
