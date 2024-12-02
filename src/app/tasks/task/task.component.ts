import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() selectedTaskId = new EventEmitter<string>();
  onSelectedTaskId() {
    this.selectedTaskId.emit(this.task.id);
  }
}
