import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import { Cart } from 'src/models/cart.model';
import { Panier } from 'src/models/panier.module';

@Injectable({
  providedIn :  'root'
})
export class cartService{
  constructor(private http :HttpClient){}
  carts$! : Observable<Cart[]>

  getAllCarts() : Observable<Cart[]> {
        return this.http.get<Cart[]>('http://localhost:3000/carts')
  }
  getAllPaniers() : Observable<Panier[]> {
    return this.http.get<Panier[]>('http://localhost:3000/paniers')
}
  getCatById(CartId : number) : Observable<Cart>{
    const cart = this.http.get<Cart>(`http://localhost:3000/carts/${CartId}`);
    if(!cart){
      throw new Error('Page non trouvz')

    }else {
      return cart
    }
  }
  onAddCart(Cart : Cart) : void{
      this.http.post('http://localhost:3000/panier',Cart).
      subscribe(response => {
        console.log('Réponse du serveur :', response);
      });

  }

}
