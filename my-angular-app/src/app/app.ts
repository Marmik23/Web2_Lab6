import {Component} from '@angular/core';
import {Child} from './child';

@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
})
export class User {
  username = 'Marmik';
}
@Component({
  selector: 'app-root',
  styleUrls: ['app.css'],
  template: `
    Hello {{ city }}, {{ 1 + 1 }}

    <section>
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>

    <section>
      <app-user />
    </section>

    @if (isServerRunning) {
    <span>Yes, the server is running</span>
    } @else {
    <span>No, the server is not running</span>
    }

    @for(user of users; track user.id) {
    <p>{{ user.name }}</p>
    }

    <div [contentEditable]="isEditable"></div>

    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>

    <app-user name="Marmik" />

    <app-child />
    <p>🐢 all the way down {{ items.length }}</p>
  `,
  imports: [User,Child],
})
export class App {
  city = 'San Francisco';

  isServerRunning = true;

  users = [
    {id: 0, name: 'Marmik'},
    {id: 1, name: 'Ritik'},
    {id: 2, name: 'Jainish'},
    {id: 3, name: 'Sanket'},
  ];

  isEditable = true;

  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
