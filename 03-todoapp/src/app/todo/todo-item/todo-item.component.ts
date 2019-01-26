import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo
  @ViewChild('textInputFisico') textInputFisico: ElementRef

  checkField: FormControl
  textInput: FormControl

  editando: boolean

  constructor() { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completado)
    this.textInput = new FormControl(this.todo.texto, Validators.required)
    console.log(this.todo)
  }

  editar() {
    this.editando = true
    setTimeout(() => {
      this.textInputFisico.nativeElement.select()
    }, 1);
  }

  terminarEdicion() {
    this.editando = false
  }

}
