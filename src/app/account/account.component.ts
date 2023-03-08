import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit  {
  User!:FormGroup

  constructor(private formBuilder : FormBuilder,
    private http : HttpClient){}

  ngOnInit(): void {
    this.User = this.formBuilder.group({
      email : [null],
      password : [null]
    })
  }

  onSubmitForm() : void{
    this.http.post('localhost:3000/users', this.User.value)
    .subscribe(response => {
      console.log('Reponse du serveur',response)
    })
  }

}
