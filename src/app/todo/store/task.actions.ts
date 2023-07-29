// import { Store } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';
import { Task } from '../../todo/todo.component';

export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());
export const updateTaskStatus = createAction('[Task] Update Task Status', props<{ taskId: number, newStatus: string }>());
export const removeTask = createAction('[Task] Remove Task', props<{ taskId: number }>());
export const sortTasksByDueDate = createAction('[Task] Sort By Due Date');
export const sortTasksByPriority = createAction('[Task] Sort By Priority');
export const sortTasksByStatus = createAction('[Task] Sort By Status');

