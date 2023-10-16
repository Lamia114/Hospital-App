import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
})
export class ManageUsersComponent implements OnInit {
  users: any[] = [];
  user: any = {
    name: '',
    id:'',
    specialization:'',
    email: '',

  };
  specializationOptions: string[] = ['Cardiology', 'Dermatology', 'Orthopedics'];


  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  onSubmit() {
    this.userService.addUser(this.user);
    this.clearForm();
  }

  editUser(user: any) {
    this.user = { ...user };
  }

  deleteUser(user: any) {
   
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  clearForm() {
    this.user = {
      name: '',
      id:'',
      specialization:'',
      email: '',
    };
  }
}
