// task-management.component.ts

import { Component } from '@angular/core';
import { Task, TaskHistoryLog } from '../todo/todo.component';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent {
  taskList: Task[] = [];
  taskHistoryLogs: TaskHistoryLog[] = [];

  // ... Add any common methods or logic needed for both TodoComponent and HistoryComponent ...
}
