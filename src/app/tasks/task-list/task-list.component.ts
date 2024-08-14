import { Component, Input, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { Task } from './task-list.model';
import { CommonModule } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input({ required: true }) task!: Task;
  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
