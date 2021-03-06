import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  userprofiles : any;
  private Username : string;


  constructor( private http : HttpClient ) {
    console.log("It's Alive !");
    this.Username = "AlphaniaMuthee";
  }


  getuserprofile(){
    let promise = new Promise((resolve)=>{
    return this.http.get("https://api.github.com/users/" + this.Username + "?client_id =" + environment.clientId+ "&client_secret=" + environment.clientsecret).toPromise().then(userprofiles =>{
      this.userprofiles = userprofiles
      resolve()
    })
    })
    return promise
  }
  updateuserprofile(username : string){
    this.Username = username

  }
}
