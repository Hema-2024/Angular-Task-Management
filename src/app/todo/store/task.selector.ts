import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';
import { Task } from '../../todo/todo.component'; // Import Task interface from todo.component.ts

export const selectTaskState = createFeatureSelector<TaskState>('tasks');

export const selectTasks = createSelector(
  selectTaskState,
  (state: TaskState) => state.tasks
);
