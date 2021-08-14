import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';

//import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class Authservice {
  url="https://bookcart.azurewebsites.net/api/Login"
  constructor(private http: HttpClient) { }
  poster(post:any){
    const httpHeader=new HttpHeaders({
      'content-type':'application/json'
    });
  
    return this.http.post(this.url, JSON.stringify(post),{headers:httpHeader});
  }  
}
