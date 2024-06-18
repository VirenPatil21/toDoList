import { Injectable } from '@angular/core';
import { EndPointURL } from '../model/service.endPoints';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class ToDoService
  {
    endPoint = new EndPointURL();

    constructor(private http: HttpClientService,
         ) {

    }

    // To get the todo list from server
    getToDoList(): Observable<any> {
        return this.http.get(
          this.endPoint.TO_DO_SERVICE
        );
      }
  }