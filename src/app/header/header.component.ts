import { Component } from '@angular/core';
import {faChevronDown,faMagnifyingGlass,faUser,faCartShopping} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   down = faChevronDown
   search = faMagnifyingGlass
   user = faUser
   cart = faCartShopping
}
