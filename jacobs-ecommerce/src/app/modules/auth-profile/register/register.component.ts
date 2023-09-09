import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email:string = "";
  name:string = "";
  surname:string = "";
  password:string = "";
  repet_password:string = "";
  constructor(
    public authServices:AuthService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    if(this.authServices.user){
      this.router.navigate(["/"]);
    }
  }

  registerUser(){
    if(!this.email ||
      !this.name ||
      !this.surname ||
      !this.password ||
      !this.repet_password){
       alert("POR FAVOR LLENA TODOS LOS CAMPOS");
       return;
    }
    if(this.password != this.repet_password){
      alert("LAS CONTRASEÑAS NO COINCIDEN");
      return;
    }
    let data = {
      email: this.email,
      name: this.name,
      surname: this.surname,
      password: this.password,
      rol: 'cliente',
    };
    this.authServices.registerUser(data).subscribe((resp:any) => {
      if(!resp.error && resp){
        this.router.navigate(["/auth/login"]);
      }else{
        alert(resp.error.message);
      }
    });
  }
}
