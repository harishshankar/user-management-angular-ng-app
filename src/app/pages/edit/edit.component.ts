import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_models';
import { UserService } from 'src/app/_service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  constructor(private userService:UserService, private act:ActivatedRoute, private router:Router){}

  user = new User(0,"","","");

  ngOnInit(): void {
    let id:number = this.act.snapshot.params["id"];
    this.userService.view(id).subscribe((data)=>{
      this.user = data
      console.log(data)
    })
  }

  update(){
    this.userService.update(this.user, this.user.id).subscribe((data)=>{
      alert("user updated")
      this.router.navigate(['view-all'])

    })
  }

}
