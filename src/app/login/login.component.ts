import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import {  Authservice } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private login: Authservice
    ) { }

  ngOnInit() {
  }
  condition=true;
  show="show";

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.valid)
      this.login.poster(this.loginForm.value).subscribe(
        ()=>{
          this.router.navigate(['/login']);
        })
    }
  }


  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  get third() {
    return this.loginForm.get('username')
  }
  get fourth() {
    return this.loginForm.get('password')
  }

  val = "visibility_off"
  icon(inp:any){
    if(this.val=="visibility_off"){
      this.val="visibility"
      inp.type="text"
    }else{
      this.val="visibility_off"
      inp.type="password"
    }
  }

}

