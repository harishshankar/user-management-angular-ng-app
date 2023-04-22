import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models';
import { UserService } from 'src/app/_service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  constructor(private userService:UserService, private router:Router){}

  user = new User(0,"","","")

  ngOnInit(): void {
    
  }

  public create(){
    this.userService.create(this.user).subscribe((data)=>{
      alert("user created")
      this.router.navigate(['view-all'])
    })
  }

}
