import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TaskData } from './task-data.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() add = new EventEmitter<TaskData>();
  @Output() cancel = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    });
    this.onCancel();
  }
}