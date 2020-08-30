import { Component } from '@angular/core';
import Task from 'src/app/interfaces/task';

const initialTasks: Task[] = [
  { label: 'my first task' },
  { label: 'my second task' },
  { label: 'my third task' },
]
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  tasks = initialTasks;

  constructor() {}

  done(task: Task) {
    this.tasks = this.tasks.filter(t => t.label !== task.label)
  }

}
