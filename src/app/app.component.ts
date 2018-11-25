import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To do App';
  newTask: string;
  tasksList: Array<string> = [];
  tasksDoneList: Array<string> = [];

  add(task: string) {
    this.tasksList.push(task);
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    console.log(this.tasksList);
  }

  done(task: string) {
    this.tasksDoneList.push(task);
    this.remove(task);
  }
}
