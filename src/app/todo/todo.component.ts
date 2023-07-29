// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';



// import { Component, OnInit, Input } from '@angular/core';
// import { TaskHistoryLog } from './todo/todo.component';
// export class HistoryComponent {
//   @Input() historyLogs: TaskHistoryLog[] = [];
// }



// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css']
// })
// export class TodoComponent implements OnInit {
//   taskList: { id: number; title: string; description: string; status: string; priority: string, dueDate:Date, completed: boolean }[] = [];
//   newTodoForm: FormGroup;
//   updateStatusForm: FormGroup;
//   selectedTask: any;

//   constructor(private formBuilder: FormBuilder) {
//     this.newTodoForm = this.formBuilder.group({
//       title: '',
//       description: '',
//       status: 'Inprogress',
//       priority: 'Highest',
//       dueDate: null
//     });

//     this.updateStatusForm = this.formBuilder.group({
//         status: 'Inprogress'
//       });
//   }
//   sortingCriteria: string = 'status'; // Default sorting criteria
//   sortingDirection: number = 1; // 1 for ascending, -1 for descending


  

//   ngOnInit(): void {
//     const storedData = localStorage.getItem('task');
//     console.log('Stored Data:', storedData);
//     this.taskList = storedData ? JSON.parse(storedData) : [];
//     // this.taskList.forEach((task) => (task.showDetails = false));
//   }
// //   toggleDetails(task: any) {
// //     task.showDetails = !task.showDetails;
// //   }

//   addTask() {
//     const task = {
//       id: this.taskList.length,
//       title: this.newTodoForm.value.title,
//       description: this.newTodoForm.value.description,
//       status: this.newTodoForm.value.status,
//       completed: false,
//       priority:this.newTodoForm.value.priority,
//       dueDate : this.newTodoForm.value.dueDate,
//     //   showDetails:this.newTodoForm.value.showDetails()
//     };

//     this.taskList.push(task);
//     window.localStorage.setItem('task', JSON.stringify(this.taskList));
//     this.newTodoForm.reset({
//       status: 'Inprogress',
//       priority: "Highest",
//       dueDate: null,
//     //   showDetails:false
//     });
//   }

//   removeTask(id: number) {
//     this.taskList = this.taskList.filter(task => task.id !== id);
//     window.localStorage.setItem('task', JSON.stringify(this.taskList));
//   }

//   markDone(task: any) {
//     task.completed = !task.completed;
//     if (task.completed) {
//       this.taskList.push(this.taskList.splice(this.taskList.indexOf(task), 1)[0]);
//     } else {
//       this.taskList.unshift(this.taskList.splice(this.taskList.indexOf(task), 1)[0]);
//     }
//     window.localStorage.setItem('task', JSON.stringify(this.taskList));
//   }

//   updateStatus(task: any) {
//     this.selectedTask = task;
//     this.updateStatusForm.patchValue({
//       status: task.status
//     });
//   }

//   saveStatus() {
//     if (this.selectedTask) {
//       this.selectedTask.status = this.updateStatusForm.value.status;
//       this.selectedTask = null;
//       window.localStorage.setItem('task', JSON.stringify(this.taskList));
//     }
//   }
// } 
// sortBy(criteria: string) {
//   if (this.sortingCriteria === criteria) {
//     this.sortingDirection = -this.sortingDirection; // Toggle sorting direction if the same criteria is clicked
//   } else {
//     this.sortingCriteria = criteria;
//     this.sortingDirection = 1; // Reset sorting direction if a different criteria is clicked
//   }

//   this.taskList.sort((a, b) => {
//     let comparison = 0;

//     if (criteria === 'status') {
//       comparison = a.status.localeCompare(b.status); // Sort based on status (Inprogress > Todo > Delete)
//     } else if (criteria === 'priority') {
//       comparison = a.priority.localeCompare(b.priority); // Sort based on priority (Highest > Least)
//     } else if (criteria === 'dueDate') {
//       const dateA = new Date(a.dueDate).getTime();
//       const dateB = new Date(b.dueDate).getTime();
//       comparison = dateA - dateB; // Sort based on due date (Earlier date first)
//     }

//     return comparison * this.sortingDirection;
//   });
// }


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css']
// })
// export class TodoComponent implements OnInit {
//   taskList: { id: number; title: string; description: string; status: string; priority: string; dueDate: Date; completed: boolean; showDetails: boolean; }[] = [];
//   newTodoForm: FormGroup;
//   updateStatusForm: FormGroup;
//   selectedTask: any;

//   sortingCriteria: string = 'status'; // Default sorting criteria
//   sortingDirection: number = 1; // 1 for ascending, -1 for descending

//   constructor(private formBuilder: FormBuilder) {
//     this.newTodoForm = this.formBuilder.group({
//       title: '',
//       description: '',
//       status: 'Inprogress',
//       priority: 'Highest',
//       dueDate: null
//     });

//     this.updateStatusForm = this.formBuilder.group({
//       status: 'Inprogress'
//     });
//   }

//   ngOnInit(): void {
//     const storedData = localStorage.getItem('task');
//     console.log('Stored Data:', storedData);
//     this.taskList = storedData ? JSON.parse(storedData) : [];
//     this.taskList.forEach((task) => (task.showDetails = false)); // Initialize showDetails property
//   }

//   addTask() {
//     const task = {
//       id: this.taskList.length,
//       title: this.newTodoForm.value.title,
//       description: this.newTodoForm.value.description,
//       status: this.newTodoForm.value.status,
//       priority: this.newTodoForm.value.priority,
//       dueDate: this.newTodoForm.value.dueDate,
//       completed: false,
//       showDetails: false // Initialize showDetails property for new task
//     };

//     this.taskList.push(task);
//     window.localStorage.setItem('task', JSON.stringify(this.taskList));
//     this.newTodoForm.reset({
//       status: 'Inprogress',
//       priority: 'Highest',
//       dueDate: null
//     });
//   }

//   toggleDetails(task: any) {
//     task.showDetails = !task.showDetails;
//   }

//   sortBy(criteria: string) {
//     if (this.sortingCriteria === criteria) {
//       this.sortingDirection = -this.sortingDirection; // Toggle sorting direction if the same criteria is clicked
//     } else {
//       this.sortingCriteria = criteria;
//       this.sortingDirection = 1; // Reset sorting direction if a different criteria is clicked
//     }

//     this.taskList.sort((a, b) => {
//       let comparison = 0;

//       if (criteria === 'status') {
//         comparison = a.status.localeCompare(b.status); // Sort based on status (Inprogress > Todo > Delete)
//       } else if (criteria === 'priority') {
//         comparison = a.priority.localeCompare(b.priority); // Sort based on priority (Highest > Least)
//       } else if (criteria === 'dueDate') {
//         const dateA = new Date(a.dueDate).getTime();
//         const dateB = new Date(b.dueDate).getTime();
//         comparison = dateA - dateB; // Sort based on due date (Earlier date first)
//       }

//       return comparison * this.sortingDirection;
//     });
//   }

//   removeTask(index: number) {
//     this.taskList.splice(index, 1);
//     window.localStorage.setItem('task', JSON.stringify(this.taskList));
//   }

//   markDone(task: any) {
//     task.completed = !task.completed;
//     window.localStorage.setItem('task', JSON.stringify(this.taskList));
//   }

//   updateStatus(task: any) {
//     task.status = this.updateStatusForm.value.status;
//     window.localStorage.setItem('task', JSON.stringify(this.taskList));
//   }
// }
// saveStatus() {
//       if (this.selectedTask) {
//         this.selectedTask.status = this.updateStatusForm.value.status;
//         this.selectedTask = null;
//         window.localStorage.setItem('task', JSON.stringify(this.taskList));
//       }
    
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { ViewChild } from '@angular/core';

// // Export the Task interface
// export interface Task {
//   id: number;
//   title: string;
//   description: string;
//   status: string;
//   priority: string;
//   dueDate: Date;
//   completed: boolean;
//   showDetails: boolean;
// }

// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css']
// })
// export class TodoComponent implements OnInit {
//   taskList: { id: number; title: string; description: string; status: string; priority: string; dueDate: Date; completed: boolean; showDetails: boolean; }[] = [];
//   newTodoForm: FormGroup;
//   updateStatusForm: FormGroup;
//   selectedTask: any;

//   sortingCriteria: string = 'status'; // Default sorting criteria
//   sortingDirection: number = 1; // 1 for ascending, -1 for descending

//   constructor(private formBuilder: FormBuilder) {
//     this.newTodoForm = this.formBuilder.group({
//       title: '',
//       description: '',
//       status: 'Inprogress',
//       priority: 'Highest',
//       dueDate: null
//     });

//     this.updateStatusForm = this.formBuilder.group({
//       status: 'Inprogress'
//     });
//   }

//   ngOnInit(): void {
//     const storedData = localStorage.getItem('task');
//     console.log('Stored Data:', storedData);
//     this.taskList = storedData ? JSON.parse(storedData) : [];
//     this.taskList.forEach((task) => (task.showDetails = false)); // Initialize showDetails property
//   }

//   addTask() {
//     const task = {
//       id: this.taskList.length,
//       title: this.newTodoForm.value.title,
//       description: this.newTodoForm.value.description,
//       status: this.newTodoForm.value.status,
//       priority: this.newTodoForm.value.priority,
//       dueDate: this.newTodoForm.value.dueDate,
//       completed: false,
//       showDetails: false // Initialize showDetails property for new task
//     };

//     this.taskList.push(task);
//     window.localStorage.setItem('task', JSON.stringify(this.taskList));
//     this.newTodoForm.reset({
//       status: 'Inprogress',
//       priority: 'Highest',
//       dueDate: null
//     });
//   }

//   toggleDetails(task: any) {
//     task.showDetails = !task.showDetails;
//   }

//   sortBy(criteria: string) {
//     if (this.sortingCriteria === criteria) {
//       this.sortingDirection = -this.sortingDirection; // Toggle sorting direction if the same criteria is clicked
//     } else {
//       this.sortingCriteria = criteria;
//       this.sortingDirection = 1; // Reset sorting direction if a different criteria is clicked
//     }

//     this.taskList.sort((a, b) => {
//       let comparison = 0;

//       if (criteria === 'status') {
//         comparison = a.status.localeCompare(b.status); // Sort based on status (Inprogress > Todo > Delete)
//       } else if (criteria === 'priority') {
//         comparison = a.priority.localeCompare(b.priority); // Sort based on priority (Highest > Least)
//       } else if (criteria === 'dueDate') {
//         const dateA = new Date(a.dueDate).getTime();
//         const dateB = new Date(b.dueDate).getTime();
//         comparison = dateA - dateB; // Sort based on due date (Earlier date first)
//       }

//       return comparison * this.sortingDirection;
//     });
//   }

//   removeTask(index: number) {
//     this.taskList.splice(index, 1);
//     window.localStorage.setItem('task', JSON.stringify(this.taskList));
//   }

//   markDone(task: any) {
//     task.completed = !task.completed;
//     window.localStorage.setItem('task', JSON.stringify(this.taskList));
//   }

//   updateStatus(task: any) {
//     task.status = this.updateStatusForm.value.status;
//     window.localStorage.setItem('task', JSON.stringify(this.taskList));
//   }

//   saveStatus() {
//     const selectedStatus = this.updateStatusForm.value.status;
//     if (this.selectedTask) {
//       this.selectedTask.status = selectedStatus;
//       window.localStorage.setItem('task', JSON.stringify(this.taskList));
//     }
//   }
// }




// import { Component, ViewChild } from '@angular/core'; 





// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';


// export interface Task {
//   id: number;
//   title: string;
//   description: string;
//   status: string;
//   priority: string;
//   dueDate: Date;
//   completed: boolean;
//   showDetails: boolean;
// }

// export interface TaskHistoryLog {
//   taskId: number;
//   taskName: string;
//   editedTime: string;
//   editedElement: string;
//   // taskId: number;
//   previousValue: any;
//   action: string;
  


//   // taskId, taskName, editedTime, editedElement, previousValue, action

  
// }

// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css']
// })
// // export class HistoryComponent {
// //   @Input() historyLogs: TaskHistoryLog[] = [];
// // }


// export class TodoComponent implements OnInit {
//   taskList: Task[] = [];
//   newTodoForm: FormGroup;
//   updateStatusForm: FormGroup;
//   selectedTask: any;
//   taskHistoryLogs: TaskHistoryLog[] = [];

//   addTaskHistoryLog(action: string, editedElement: string, taskName: string, previousValue: any) {
//     const taskId = this.taskList.length; // Assign taskId based on your requirement
//     const editedTime = new Date().toLocaleString();
//     const historyLog: TaskHistoryLog = { taskId, taskName, editedTime, editedElement, previousValue, action };
//     this.taskHistoryLogs.push(historyLog);
//     localStorage.setItem('taskHistoryLogs', JSON.stringify(this.taskHistoryLogs));
//     console.log(this.taskHistoryLogs);
//   }

//   sortingCriteria: string = 'status';
//   sortingDirection: number = 1;



  
//   constructor(private formBuilder: FormBuilder) {
//     this.newTodoForm = this.formBuilder.group({
//       title: '',
//       description: '',
//       status: 'Inprogress',
//       priority: 'Highest',
//       dueDate: null
//     });

  

//     this.updateStatusForm = this.formBuilder.group({
//       status: 'Inprogress'
//     });


    
//   }

//   ngOnInit(): void {
//     const storedData = localStorage.getItem('task');
//     this.taskList = storedData ? JSON.parse(storedData) : [];
//     this.taskList.forEach((task) => (task.showDetails = false));
//   }

  

//   // addTaskHistoryLog(action: string, editedElement: string, taskName: string, previousValue: any) {
//   //   const taskId = this.taskList.length; // Assign taskId based on your requirement
//   //   const editedTime = new Date().toLocaleString();
//   //   const historyLog: TaskHistoryLog = { taskId, taskName, editedTime, editedElement, previousValue, action };
//   //   this.taskHistoryLog.push(historyLog);
//   //   localStorage.setItem('taskHistoryLogs', JSON.stringify(this.taskHistoryLog));
//   // }
  
//   updateTask(task: Task) {
//     // Get the selected priority and due date values from the form controls
//     const selectedPriority = this.updateStatusForm.value.priority;
//     const selectedDueDate = this.updateStatusForm.value.dueDate;
    
//     // Find the task in the taskList array by its ID
//     const taskToUpdate = this.taskList.find(t => t.id === task.id);
    
//     // If the task is found, update its priority and due date
//     if (taskToUpdate) {
//       taskToUpdate.priority = selectedPriority;
//       taskToUpdate.dueDate = selectedDueDate;
//       window.localStorage.setItem('task', JSON.stringify(this.taskList));
//     }
//   }

//   // updateStatus(task: Task) {
//   //   const previousStatus = task.status; // Store the previous status for history log
//   //   task.status = this.updateStatusForm.value.status;
  
//   //   // Add history log for status update
//   //   const editedElement = 'Status';
//   //   this.addTaskHistoryLog('Status updated', editedElement, task.title, previousStatus);
  
//   //   window.localStorage.setItem('task', JSON.stringify(this.taskList));
//   // }
  
  



//   addTask() {
//     const currentTime = new Date().toLocaleString();
//     const task = {
//       id: this.taskList.length,
//       title: this.newTodoForm.value.title,
//       description: this.newTodoForm.value.description,
//       status: this.newTodoForm.value.status,
//       priority: this.newTodoForm.value.priority,
//       dueDate: this.newTodoForm.value.dueDate,
//       completed: false,
//       showDetails: false,
//       createdTime: currentTime, // Add createdTime property with current time
//     };
  
//     this.taskList.push(task);
//     window.localStorage.setItem('task', JSON.stringify(this.taskList));
//     this.newTodoForm.reset({
//       status: 'Inprogress',
//       priority: 'Highest',
//       dueDate: null,
//     });
//   }
//     toggleDetails(task: any) {
//     task.showDetails = !task.showDetails;
//   }




// removeTask(id: number) {
//       this.taskList = this.taskList.filter(task => task.id !== id);
//       window.localStorage.setItem('task', JSON.stringify(this.taskList));
//     }
  
//     markDone(task: any) {
//        task.completed = !task.completed;
//     if (task.completed) {
//       this.taskList.push(this.taskList.splice(this.taskList.indexOf(task), 1)[0]);
//     } else {
//       this.taskList.unshift(this.taskList.splice(this.taskList.indexOf(task), 1)[0]);
//     }
//     window.localStorage.setItem('task', JSON.stringify(this.taskList));
//     }
// // updateStatus(task: any) {
  
// //   task.status = this.updateStatusForm.value.status;
// //   window.localStorage.setItem('task', JSON.stringify(this.taskList));
// // }




//   // removeTask(index: number) {
//   //       this.taskList.splice(index, 1);
//   //       window.localStorage.setItem('task', JSON.stringify(this.taskList));
//   //     }
    
//       // markDone(task: any) {
//       //   task.completed = !task.completed;
//       //   window.localStorage.setItem('task', JSON.stringify(this.taskList));
//       // }
//   // updateStatus(task: any) {
//   //   task.status = this.updateStatusForm.value.status;
//   //   window.localStorage.setItem('task', JSON.stringify(this.taskList));
//   // }

//   updateStatus(task: any) {
//     this.selectedTask = task;
//     this.updateStatusForm.patchValue({
//       status: task.status
//     });
//   }
//   saveTaskListToLocalStorage() {
//     window.localStorage.setItem('task', JSON.stringify(this.taskList));
//   }
  



  
  

//   saveStatus() {
//     const selectedStatus = this.updateStatusForm.value.status;
//     if (this.selectedTask) {
//       this.selectedTask.status = selectedStatus;
//       window.localStorage.setItem('task', JSON.stringify(this.taskList));
//     }
//   } 


//   // updateStatus(task: any) {
//   //       this.selectedTask = task;
//   //       this.updateStatusForm.patchValue({
//   //         status: task.status
//   //       });
//   //     }
    
//     //   saveStatus() {
//     //     if (this.selectedTask) {
//     //       this.selectedTask.status = this.updateStatusForm.value.status;
//     //       this.selectedTask = null;
//     //       window.localStorage.setItem('task', JSON.stringify(this.taskList));
//     //     }
//     //   }
//     // } 







//   // Sort tasks based on the selected option
//   sortTasks(event: Event) {
//     const selectedOption = (event.target as HTMLSelectElement).value;
// //     this.sortingCriteria = selectedOption;
// //     this.sortingDirection = this.sortingDirection === 1 ? -1 : 1;
// //     this.taskList.sort((a, b) => {
// //       let comparison = 0;
// //       if (selectedOption === 'status') {
// //         comparison = a.status.localeCompare(b.status);
// //       } else if (selectedOption === 'priority') {
// //         comparison = a.priority.localeCompare(b.priority);
// //       } else if (selectedOption === 'dueDate') {
// //         const dateA = new Date(a.dueDate).getTime();
// //         const dateB = new Date(b.dueDate).getTime();
// //         comparison = dateA - dateB;
// //       }
// //       return comparison * this.sortingDirection;
// //     });
// //   }
// // }
// this.sortingCriteria = selectedOption;
//     this.sortingDirection = this.sortingDirection === 1 ? -1 : 1;
//     this.taskList.sort((a, b) => {
//       let comparison = 0;
//       if (selectedOption === 'status') {
//         comparison = a.status.localeCompare(b.status);
//       } else if (selectedOption === 'priority') {
//         // Sorting based on priority (Highest > Least)
//         comparison = a.priority === 'Highest' ? -1 : a.priority === 'Least' ? 1 : 0;
//       } else if (selectedOption === 'dueDate') {
//         // Sorting based on due date (Earlier date first)
//         const dateA = new Date(a.dueDate).getTime();
//         const dateB = new Date(b.dueDate).getTime();
//         comparison = dateA - dateB;
//       }
//       return comparison * this.sortingDirection;
//     });
//   }
// }
// // With this update, the sorting for priority and due date should work as expected. The tasks with the highest priority will be


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';

/**
 * @title Button toggle appearance
 */
// export class ButtonToggleAppearanceExample {}

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate: Date;
  completed: boolean;
  showDetails: boolean;
  createdTime: string; // Add createdTime property
}

export interface TaskHistoryLog {
  taskId: number;
  taskName: string;
  editedTime: string;
  editedElement: string;
  previousValue: any;
  action: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  taskList: Task[] = [];
  newTodoForm: FormGroup;
  updateStatusForm: FormGroup;
  selectedTask: any;
  taskHistoryLogs: TaskHistoryLog[] = [];

  sortingCriteria: string = 'status';
  sortingDirection: number = 1;
task: any;

  constructor(private formBuilder: FormBuilder) {
    this.newTodoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['Inprogress', Validators.required],
      dueDate: [null, Validators.required],
      priority: ['Highest', Validators.required],
      requiredField: ['', Validators.required],
    });

    this.updateStatusForm = this.formBuilder.group({
      status: 'Inprogress'
    });
  }

  ngOnInit(): void {
    
    

    const storedData = localStorage.getItem('task');
    this.taskList = storedData ? JSON.parse(storedData) : [];
    this.taskList.forEach((task) => (task.showDetails = false));
  }


  isFormVisible = false; // Initially set the form visibility to false

  toggleFormVisibility() {
    this.isFormVisible = !this.isFormVisible; // Toggle the form visibility on button click
  }
  addTaskHistoryLog(action: string, editedElement: string, taskName: string, previousValue: any) {
    const taskId = this.taskList.length; // Assign taskId based on your requirement
    const editedTime = new Date().toLocaleString();
    const historyLog: TaskHistoryLog = { taskId, taskName, editedTime, editedElement, previousValue, action };
    this.taskHistoryLogs.push(historyLog);
    localStorage.setItem('taskHistoryLogs', JSON.stringify(this.taskHistoryLogs));
    console.log(this.taskHistoryLogs);
  }

  updateTask(task: Task) {
    const selectedPriority = this.updateStatusForm.value.priority;
    const selectedDueDate = this.updateStatusForm.value.dueDate;
    const taskToUpdate = this.taskList.find(t => t.id === task.id);

    if (taskToUpdate) {
      taskToUpdate.priority = selectedPriority;
      taskToUpdate.dueDate = selectedDueDate;
      this.addTaskHistoryLog('Task updated', 'Priority/Due Date', taskToUpdate.title, null);
      window.localStorage.setItem('task', JSON.stringify(this.taskList));
    }
  }

  addTask() {
    const currentTime = new Date().toLocaleString();
    const task = {
      id: this.taskList.length,
      title: this.newTodoForm.value.title,
      description: this.newTodoForm.value.description,
      status: this.newTodoForm.value.status,
      priority: this.newTodoForm.value.priority,
      dueDate: this.newTodoForm.value.dueDate,
      completed: false,
      showDetails: false,
      createdTime: currentTime,
    };

    this.taskList.push(task);
    window.localStorage.setItem('task', JSON.stringify(this.taskList));
    this.newTodoForm.reset({
      status: 'Inprogress',
      priority: 'Highest',
      dueDate: null,
    });
    this.addTaskHistoryLog('Task created', 'Task', task.title, null);
  }

  toggleDetails(task: any) {
    task.showDetails = !task.showDetails;
  }

  removeTask(id: number) {
    this.taskList = this.taskList.filter(task => task.id !== id);
    window.localStorage.setItem('task', JSON.stringify(this.taskList));
  }

  markDone(task: any) {
    task.completed = !task.completed;
    if (task.completed) {
      task.status = 'Done';
      this.taskList.push(this.taskList.splice(this.taskList.indexOf(task), 1)[0]);
    } else {
      // task.status = 'Done';
      this.taskList.unshift(this.taskList.splice(this.taskList.indexOf(task), 1)[0]);
    }
    // task.status = 'Done';
    window.localStorage.setItem('task', JSON.stringify(this.taskList));
  }

  updateStatus(task: any) {
    // if(task.status=="Done")
    // this.selectedTask = task;
    // this.updateStatusForm.patchValue({
    //   status: task.status
    // });

    this.selectedTask = task;
    this.updateStatusForm.patchValue({
      status: task.status
    });
  }

  saveStatus() {
    const selectedStatus = this.updateStatusForm.value.status;
    if (this.selectedTask) {
      this.selectedTask.status = selectedStatus;
      this.addTaskHistoryLog('Status updated', 'Status', this.selectedTask.title, this.selectedTask.status);
      window.localStorage.setItem('task', JSON.stringify(this.taskList));
    }
  }

  sortTasks(event: Event) {
    // const selectedOption = event.value;
    const selectedOption = (event.target as HTMLSelectElement).value;
    this.sortingCriteria = selectedOption;
    this.sortingDirection = this.sortingDirection === 1 ? -1 : 1;
    this.taskList.sort((a, b) => {
      let comparison = 0;
      if (selectedOption === 'status') {
        comparison = a.status.localeCompare(b.status); 
      } else if (selectedOption === 'priority') {
        comparison = a.priority === 'Highest' ? 1 : a.priority === 'Least' ? -1 : 0;
      } else if (selectedOption === 'dueDate') {
        const dateA = new Date(a.dueDate).getTime();
        const dateB = new Date(b.dueDate).getTime();
        comparison = dateA - dateB;
      }
      return comparison * this.sortingDirection;
    });
  }

//   private convertToCSV(data: any[]): string {
//     // Implement the CSV conversion logic here..
//     console.log(data);
//     const csvArray = [];
//     const header = Object.keys(data[0]).map(key => `"${key}"`).join(',');
//     csvArray.push(header);

//     data.forEach(task => {
//       const row = Object.values(task).map(value => `"${value}"`).join(',');
//       csvArray.push(row);
//     });

//     return csvArray.join('\n');
//     // return '';
//   }

//   downloadCSV() {
//     const csvData = this.convertToCSV(this.taskList);
//     const blob = new Blob([csvData], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'task_list.csv';
//     a.click();
//     window.URL.revokeObjectURL(url);
//   }
// }

private convertToCSV(data: Task[], columnNames: string[]): string {
  const separator = ',';
  const lineSeparator = '\n';

  // Generate the header row based on the provided column names
  const headerRow = columnNames.join(separator) + lineSeparator;

  // Generate the data rows
  const dataRows = data.map((task) => {
    return [
      task.id,
      task.title,
      task.description,
      task.status,
      task.priority,
      task.dueDate,
      task.completed ? 'Completed' : 'Not Completed', // Convert the boolean value to a string
      task.createdTime,
    ].join(separator);
  });

  return headerRow + dataRows.join(lineSeparator);
}

downloadCSV(data: Task[], columnNames: string[]): void {
  const csvContent = this.convertToCSV(data, columnNames);
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'tasks.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

// Function to trigger CSV download with custom column names
// exportToCSV() {
//   const columnNames = ['ID', 'Title', 'Description', 'Status', 'Priority', 'Due Date', 'Completed', 'Created Time'];
//   this.downloadCSV(this.taskList, columnNames);
// }
// }
// Inside TodoComponent class

exportToCSV(downloadButton: any) {
  const columnNames = ['ID', 'Title', 'Description', 'Status', 'Priority', 'Due Date', 'Completed', 'Created Time'];
  const csvData = this.convertToCSV(this.taskList, columnNames);

  // Create a new Blob object with the CSV data
  const blob = new Blob([csvData], { type: 'text/csv' });

  // Generate a URL for the Blob and create an anchor element for the download
  const url = window.URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'tasks.csv';

  // Trigger the click event of the anchor to initiate the download
  anchor.click();

  // Clean up by revoking the object URL
  window.URL.revokeObjectURL(url);
}
}
