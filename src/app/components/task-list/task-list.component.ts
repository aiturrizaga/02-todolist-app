import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  newTask: string = '';

  tasks: any[] = [
    {
      title: 'Obtener información',
      completed: true
    },
    {
      title: 'Realizar las HUs',
      completed: false
    },
    {
      title: 'Agregar estilos y validaciones',
      completed: false
    },
    {
      title: 'Desplegar el proyecto',
      completed: false
    }
  ];

  addTask() {
    console.log('Task:', this.newTask);
    const task = {
      title: this.newTask,
      completed: false
    }
    this.tasks.push(task);
    this.newTask = '';
  }

  deleteTask(task: any) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }
}
