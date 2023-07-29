import { createReducer, on } from '@ngrx/store';
import { Task } from '../../todo/todo.component';
import { addTask, updateTaskStatus, removeTask, sortTasksByDueDate, sortTasksByPriority, sortTasksByStatus } from './task.actions';

export interface TaskState {
  tasks: Task[];
}

export const initialState: TaskState = {
  tasks: []
};

const taskReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task]
  })),
  on(updateTaskStatus, (state, { taskId, newStatus }) => ({
    ...state,
    tasks: state.tasks.map(task => task.id === taskId ? { ...task, status: newStatus } : task)
  })),
  on(removeTask, (state, { taskId }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== taskId)
  })),
  on(sortTasksByDueDate, state => ({
    ...state,
    tasks: [...state.tasks.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime())]
  })),
  on(sortTasksByPriority, state => ({
    ...state,
    tasks: [...state.tasks.sort((a, b) => a.priority.localeCompare(b.priority))]
  })),
  on(sortTasksByStatus, state => ({
    ...state,
    tasks: [...state.tasks.sort((a, b) => a.status.localeCompare(b.status))]
  }))
);

export function reducer(state: TaskState, action: any) {
  return taskReducer(state, action);
}
