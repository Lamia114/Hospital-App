// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: any[] = []; // Simulated user data

  constructor() {}

  getUsers() {
    return this.users;
  }

  addUser(user: any) {
    this.users.push(user);
  }

  // Implement other user-related methods as needed
}
