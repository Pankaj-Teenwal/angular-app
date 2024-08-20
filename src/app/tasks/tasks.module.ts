import { NgModule } from '@angular/core';
import { TaskComponent } from './task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/card/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [TaskComponent, TaskListComponent, NewTaskComponent],
  exports: [TaskComponent],
  imports: [SharedModule, CommonModule, FormsModule],
})
export class TasksModule {}
