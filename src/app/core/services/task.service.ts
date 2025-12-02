import { computed, Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = signal<Task[]>([
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
  ]);

  readonly allTasks = this.tasks.asReadonly();

  readonly todoTasks = computed(() => this.tasks().filter((t) => t.status === 'to-do'));

  readonly inProgressTasks = computed(() => this.tasks().filter((t) => t.status === 'in-progress'));

  readonly doneTasks = computed(() => this.tasks().filter((t) => t.status === 'done'));

  readonly taskCounts = computed(() => ({
    todo: this.todoTasks().length,
    inProgress: this.inProgressTasks().length,
    done: this.doneTasks().length,
    total: this.tasks().length,
  }));

  addTask(task: Omit<Task, 'id' | 'createdAt'>) {
    const newTask: Task = {
      ...task,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };

    this.tasks.update((curr) => [...curr, newTask]);
  }

  updateTask(id: string, updates: Partial<Task>) {
    this.tasks.update((curr) =>
      curr.map((task) => (task.id === id ? { ...task, ...updates } : task))
    );
  }

  deleteTask(id: string) {
    this.tasks.update((curr) => curr.filter((t) => t.id !== id));
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks().find((task) => task.id === id);
  }
}
