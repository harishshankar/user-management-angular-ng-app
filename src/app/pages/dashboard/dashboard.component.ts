import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models';
import { UserService } from 'src/app/_service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private userService:UserService){}

  userList:User[] = []
  userCount:number = 0

  ngOnInit(): void {
    this.viewall()
  }

  public viewall(){
    this.userService.viewall().subscribe((data)=>{
      this.userCount = data.length
      this.userList = data.reverse().slice(0,10)
      console.log("data",data)
    })
  }

}
