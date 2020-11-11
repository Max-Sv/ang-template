import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  loading = false;
  users: Array<User>;
  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    this.loading = true;
    // this.userService.getAllFake().pipe(first()).subscribe(users => {
    //   console.log('users:', users);
    //   this.loading = false;
    //   this.users = users;
    // });
    this.userService.getAll().pipe(first()).subscribe(users => {
      console.log('users from back:', users);
      this.loading = false;
      this.users = users;
    });
  }
}
