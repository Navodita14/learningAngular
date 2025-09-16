import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  // providers:[UserService]
})
export class AdduserComponent implements OnInit {

  username: string = '';
  status: string = 'active';

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }

  AddUser(){
    this.userservice.AddNewUser(this.username, this.status)
    console.log(this.userservice.users);
    
  }

}
