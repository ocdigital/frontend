import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tasks-listagem',
  templateUrl: './tasks-listagem.component.html',
  styleUrls: ['./tasks-listagem.component.css']
})
export class TasksListagemComponent implements OnInit {

  tasks: Array<any>;
  task: any;

  constructor(private tasksService: TaskService) { }

  ngOnInit() {

    this.task ={};

    this.listar();
  }

  listar(){
    this.tasksService.listar().subscribe(dados => this.tasks = dados)

  }
  criar(frm: FormGroup){
    this.tasksService.criar(this.task).subscribe(resposta => {
      this.tasks.push(resposta);
      
      frm.reset
    })

  }

}
