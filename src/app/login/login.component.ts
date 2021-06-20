import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
users!:User[];
submitted = false;
model: User={userName:'Mongolia',id:"123"};


  constructor(private userService:UserService) { }
 // model: User={userName:'Dr IQ', password:'123'};
 // user:User={id:18, name:'Chuck Overstreet'};
 // user=this.userService.getUsers();
 
  get diagnostic() { return JSON.stringify(this.users); }
 
 
  ngOnInit(): void {
    this.getUsers();
    
  }
  onSubmit() {
    this.userService.addUser(this.model)
    .subscribe((id:string)=>this.model.id=id);
    this.submitted = true; 
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers()
        .subscribe((users: User[]) => this.users = users);
  }
}
