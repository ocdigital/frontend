import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListagemComponent } from './tasks-listagem.component';

describe('TasksListagemComponent', () => {
  let component: TasksListagemComponent;
  let fixture: ComponentFixture<TasksListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
