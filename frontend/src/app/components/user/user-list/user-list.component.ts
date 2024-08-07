import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.error('Error fetching users', error);
      }
    );
  }

  navigateToNewUser(): void {
    this.router.navigate(['/users/new']); // Asegúrate de que la ruta es correcta
  }

  editUser(id: number): void {
    this.router.navigate(['/users/edit', id]); // Asegúrate de que la ruta es correcta
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers(); // Reload the user list after deletion
    });
  }
}
