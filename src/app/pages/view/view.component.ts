import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models';
import { UserService } from 'src/app/_service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  constructor(private userService:UserService, private act:ActivatedRoute){}
  user = new User(0,"","","")

  ngOnInit(): void {
    let id:number = this.act.snapshot.params["id"];
    this.userService.view(id).subscribe((data)=>{
      this.user = data
    })

  }


}
