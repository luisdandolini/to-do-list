import { Component, DoCheck } from '@angular/core';

// Interface
import { TaskList } from './../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  taskList: Array<TaskList> = [];

  constructor() { }

  ngDoCheck(): void {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
  }

  ngOnInit(): void {
  }

  deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  deleteAllTaskList() {
    const confirm = window.confirm("Você deseja realmente deletar tudo?")

    if(confirm) {
      this.taskList = [];
    }
  }

  setEmitTaskList(event: string) {
    this.taskList.push({task: event, checked: false})
  }
}
