import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models';
import { UserService } from 'src/app/_service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit{
  constructor(private userService:UserService){}

  userlist:User[] = []
  search:string = ""

  page:number = 1;
  count:number = 0;
  tablesize:number = 10;
  tablesizes:number[] = [5, 10, 15, 20];

  ngOnInit(): void {
    this.viewall()
  }

  public viewall(){
    this.userService.viewall().subscribe((data)=>{
      this.userlist = data
    })
  }

  rem(id:number){
    let v:boolean = confirm("Do you want to delete")
    if(v==true){
      this.userService.remove(id).subscribe((data)=>{
      const index = this.userlist.findIndex(user => user.id === id);
      
      this.userlist.splice(index, 1);
      })
    } 
  }

  onTableDataChange(event:any){
    this.page = event;
    this.viewall()
  }
  
  onTableSizeChange(event:any):void{
    this.tablesize = event.target.value;
    this.page = 1;
    this.viewall()
  }


}
