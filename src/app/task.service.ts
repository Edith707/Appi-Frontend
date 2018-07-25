import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Task} from "./task";

const httpOptions = {
  headers: new HttpHeaders ({"Content-Tipe": "applications/json"})
};

@Injectable()
export class TaskService {
  api_url ="http://localhost:3000";
  tasksUrl = `${this.api_url}"/tasks"`;
  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get<Task[]>(this.tasksUrl)
    .pipe(map(data => data));
  }

  createTask(task: Task): Observable<any>{
    return this.http.post<Task>(this.tasksUrl, task, httpOptions);
  }
}
