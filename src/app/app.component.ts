import { Component } from '@angular/core';
import { TaskHistoryLog } from './todo/todo.component';
import { Input } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// [x: string]: TaskHistoryLog[];
  title = 'my-first-app';
taskHistoryLogs!: TaskHistoryLog[];
  
}


