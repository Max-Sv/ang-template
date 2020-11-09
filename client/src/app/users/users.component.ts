import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public user: any;
  userId = new FormControl('');
  public currentUser;

  constructor(
    public appDataService: AppDataService
  ) { }

  ngOnInit() {

  }
  getUser() {
    const id = this.userId.value;
    const users = this.appDataService.users;
    console.log('id:', id);
    console.log('users:', users);
    if (id && users) {
      [this.currentUser] = users.filter(user => user.id == id);
    }
    console.log('this.currentUser:', this.currentUser);
  }

}
