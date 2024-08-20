import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-user';

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-app';

  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id == this.selectedUserId);
  }

  onSelectUser(id: string) {
    console.log('Selected user with id' + id);
    this.selectedUserId = id;
  }
}
