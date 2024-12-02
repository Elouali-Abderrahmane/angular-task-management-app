import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CardComponent } from '../shared/card/card.component';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,

  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() selectedUserId = new EventEmitter<string>();
  get pathImage() {
    return `./../../assets/users/${this.user.avatar}`;
  }
  onSelectedUserId() {
    this.selectedUserId.emit(this.user.id);
  }
}
