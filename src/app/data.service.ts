import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

    private goals = new BehaviorSubject<any>(['Learn AngularJs', 'Work with REST APIs', 'Learn React']);
    goal = this.goals.asObservable();

    constructor() { }

    changeGoal(goal) {
        this.goals.next(goal)
    }

}
