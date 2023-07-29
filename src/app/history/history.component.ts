
import { Component, Input } from '@angular/core';
import { Task, TaskHistoryLog } from '../todo/todo.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  @Input() historyLogs: TaskHistoryLog[] = [];
  @Input() taskList!: Task[];

  updateStatus(taskId: number, status: string) {
    const taskToUpdate = this.taskList.find((task) => task.id === taskId);
    console.log(taskToUpdate);
    if (taskToUpdate) {
      const previousStatus = taskToUpdate.status;
      taskToUpdate.status = status;
      this.addTaskHistoryLog('Status updated', 'Status', taskToUpdate.title, previousStatus);
      // this.taskHistoryLogs.push(log);
    }
  }

  updatePriority(taskId: number, priority: string) {
    const taskToUpdate = this.taskList.find((task) => task.id === taskId);
    if (taskToUpdate) {
      const previousPriority = taskToUpdate.priority;
      taskToUpdate.priority = priority;
      this.addTaskHistoryLog('Priority updated', 'Priority', taskToUpdate.title, previousPriority);
    }
  }

  updateDueDate(taskId: number, dueDate: Date) {
    const taskToUpdate = this.taskList.find((task) => task.id === taskId);
    if (taskToUpdate) {
      const previousDueDate = taskToUpdate.dueDate;
      taskToUpdate.dueDate = dueDate;
      this.addTaskHistoryLog('Due Date updated', 'Due Date', taskToUpdate.title, previousDueDate);
    }
  }

  // Inside TodoComponent class

// addTaskHistoryLog(action: string, editedElement: string, taskName: string, previousValue: any) {
//   const taskId = this.taskList.length; // Assign taskId based on your requirement
//   const editedTime = new Date().toLocaleString();
//   const historyLog: TaskHistoryLog = { taskId, taskName, editedTime, editedElement, previousValue, action };
//   this.historyLogs.push(historyLog);
//   localStorage.setItem('taskHistoryLogs', JSON.stringify(this.historyLogs));
//   console.log(this.historyLogs);
// }

// // console.log(taskHistoryLogs);
// }

addTaskHistoryLog(action: string, editedElement: string, taskName: string, previousValue: any) {
  const taskId = this.taskList.length; // Assign taskId based on your requirement
  const editedTime = new Date().toLocaleString();
  const historyLog: TaskHistoryLog = { taskId, taskName, editedTime, editedElement, previousValue, action };
  this.historyLogs.push(historyLog);
  localStorage.setItem('taskHistoryLogs', JSON.stringify(this.historyLogs));
  console.log(this.historyLogs);
}
}