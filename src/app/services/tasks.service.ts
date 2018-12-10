import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable } from "rxjs/internal/Observable";
import { Task } from "../model/task";

@Injectable()
export class TasksService {

    private tasksList: Array<Task> = [];
    private tasksDoneList: Array<Task> = [];

    private tasksListObs = new BehaviorSubject<Array<Task>>([]);
    private tasksDoneListObs = new BehaviorSubject<Array<Task>>([]);

    constructor() {
        this.tasksList = [
            {name: 'Nauka Angulara', created: new Date()}, 
            {name: 'Redux', created: new Date()}
        ];
        this.tasksListObs.next(this.tasksList);
    }
    add(task: Task) {
        this.tasksList.push(task);
        this.tasksListObs.next(this.tasksList);
    }

    remove(task: Task) {
        this.tasksList = this.tasksList.filter(e => e !== task);
        this.tasksListObs.next(this.tasksList);
        console.log(this.tasksList);
    }

    done(task: Task) {
        this.tasksDoneList.push(task);
        this.remove(task);
        this.tasksDoneListObs.next(this.tasksDoneList)
    }

    getTasksListObs(): Observable<Array<Task>>{
        return this.tasksListObs.asObservable();
    }

    getTasksDoneListObs(): Observable<Array<Task>>{
        return this.tasksDoneListObs.asObservable();
    }
}