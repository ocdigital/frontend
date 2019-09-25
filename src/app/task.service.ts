import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //caminho da Api do Backend
  tasksUrl='http://localhost:3000/listar';
  taskAddUrl='http://localhost:3000/add';

  constructor(private http: HttpClient) { }
  
  //retorna um array de tasks
  listar(){
    return this.http.get<any[]>(`${this.tasksUrl}`);

  }

  //Cria uma nova Task
  criar(task: any){
    return this.http.post(this.taskAddUrl,task)
  }
}
