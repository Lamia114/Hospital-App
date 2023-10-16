import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // This function runs when the component is initialized
    this.loadAdminData();
  }

  // Example function to load admin data from a service
  loadAdminData() {
    // You can implement the logic to fetch admin data here
    // For example, call an API or retrieve data from a service
    console.log('Loading admin data...');
    // Replace the following with actual data retrieval logic
    // this.adminData = this.adminService.getAdminData();
  }

  // Example function to perform an admin action
  performAdminAction() {
    // Implement your admin action logic here
    console.log('Admin action performed');
  }
}
