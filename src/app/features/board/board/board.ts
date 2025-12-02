import { Component, inject } from '@angular/core';
import { Task } from '../../../core/models/task.model';
import { Column } from '../components/column/column';
import { TaskService } from '../../../core/services/task.service';

@Component({
  selector: 'app-board',
  imports: [Column],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})
export class Board {
  private taskService = inject(TaskService);

  todoTasks = this.taskService.todoTasks;
  inProgressTasks = this.taskService.inProgressTasks;
  doneTasks = this.taskService.doneTasks;

  onAddTask() {
    this.taskService.addTask({
      title: 'New Task ' + Date.now(),
      description: 'This is a new task',
      status: 'to-do',
      priority: 'medium',
    });
  }

  onEditTask(task: Task) {
    alert(`Edit task: ${task.title}`);
  }

  onDeleteTask(taskId: string) {
    const confirmed = confirm('Are you sure you want to delete this task?');
    if (confirmed) {
      this.taskService.deleteTask(taskId);
    }
  }
}
