import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/_models';
import { AuthService, ErrorService } from 'src/app/_service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router, public errorService:ErrorService){}

  ngOnInit(): void {
  this.errorService.errorMessage = ""
    
  }


  user = new Auth("","");

  public login(){
    console.log(this.user);
    this.auth.login(this.user.username, this.user.password).subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem('token', response.access);
      localStorage.setItem('refresh', response.refresh);
      this.router.navigate(["/"]);

    })
  }

}
