import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../service/to-do.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  toDoList: any;
  status: any = null;
  cloneToDoList: any;

  constructor(private toDoService: ToDoService) {}

  ngOnInit(): void {
    this.toDoService.getToDoList().subscribe(result => {
      if (result) {
        this.toDoList = result;
        this.cloneToDoList = JSON.parse(JSON.stringify(result));
      }
    });
  }

  // To filter the list
  filterToDoList() {
    this.toDoList = JSON.parse(JSON.stringify(this.cloneToDoList));
    this.toDoList = this.toDoList.filter((item: any) => item.completed == Boolean(this.status));
  }
}
