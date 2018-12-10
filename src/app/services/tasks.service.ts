import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class TasksService {

    private tasksList: Array<string> = [];
    private tasksDoneList: Array<string> = [];

    private tasksListObs = new BehaviorSubject<Array<string>>(this.tasksList);
    private tasksDoneListObs = new BehaviorSubject<Array<string>>(this.tasksDoneList);

    constructor() {
        this.tasksList = ['Nauka Angulara', 'Redux'];
        this.tasksListObs.next(this.tasksList);
    }
    add(task: string) {
        this.tasksList.push(task);
        this.tasksListObs.next(this.tasksList);
    }

    remove(task: string) {
        this.tasksList = this.tasksList.filter(e => e !== task);
        this.tasksListObs.next(this.tasksList);
        console.log(this.tasksList);
    }

    done(task: string) {
        this.tasksDoneList.push(task);
        this.remove(task);
        this.tasksDoneListObs.next(this.tasksDoneList)
    }

    getTasksListObs(): Observable<Array<string>>{
        return this.tasksListObs.asObservable();
    }

    getTasksDoneListObs(): Observable<Array<string>>{
        return this.tasksDoneListObs.asObservable();
    }
}