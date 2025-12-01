import { Component } from '@angular/core';
import { Task } from '../../../core/models/task.model';

@Component({
  selector: 'app-board',
  imports: [],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})
export class Board {
  tasks: Task[] = [
    {
      id: '1',
      title: 'Learn Angular basics',
      description: 'Study components, templates, and data binding',
      status: 'done',
      priority: 'high',
      createdAt: new Date('2024-01-10'),
    },
    {
      id: '2',
      title: 'Build task board UI',
      description: 'Create the board layout with columns',
      status: 'in-progress',
      priority: 'high',
      createdAt: new Date('2024-01-11'),
    },
    {
      id: '3',
      title: 'Add drag and drop',
      description: 'Implement drag and drop between columns',
      status: 'to-do',
      priority: 'medium',
      createdAt: new Date('2024-01-12'),
    },
    {
      id: '4',
      title: 'Connect to API',
      description: 'Integrate with .NET backend',
      status: 'to-do',
      priority: 'low',
      createdAt: new Date('2024-01-13'),
    },
    {
      id: '5',
      title: 'Write unit tests',
      status: 'to-do',
      priority: 'medium',
      createdAt: new Date('2024-01-14'),
    },
  ];

  get todoTasks(): Task[] {
    return this.tasks.filter((t) => t.status === 'to-do');
  }

  get inProgressTasks(): Task[] {
    return this.tasks.filter((t) => t.status === 'in-progress');
  }

  get doneTasks(): Task[] {
    return this.tasks.filter((t) => t.status === 'done');
  }

  onAddTask() {
    alert('Add task button clicked!');
  }
}
