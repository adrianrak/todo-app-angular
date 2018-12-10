import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  tasksDoneList: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksDoneListObs().subscribe((tasks: Array<Task>) => {
      this.tasksDoneList = tasks;
    });
  }

  ngOnInit() {
  }

}