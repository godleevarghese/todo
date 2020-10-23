import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoArray = [];
  todo:any;
  id:number=1;
  todoForm:any;
  tests = [[[],1],[{ a: 1 },1],[{ a: 1, b: { c: 1 } },2],[{ a: 1, b: { c: 1 }, c: { d: 1 , e : { g : 1} } },3]]
  testResults=[];

  constructor() {
  }

  printObj(obj){
    return JSON.stringify(obj)
  }

  addTodo(value:any) {
    if (value!='' || value==null) {
      var value:any={
        val:value,
        id:this.id++,
        check:false
      }
    
      this.todoArray.push(value);
      
    } else {
      alert('Field required **');
    }
  }

 

  calculateDepth(){
   this.testResults = this.tests.map((t) => this.getDepth(t[0])===t[1])

  }

  getDepth(input){
    return 0
  }

  check(todo:any){
    if(!todo.check){
      todo.check=true
    }
    else{
      todo.check=false
    }
  }

  deleteTodo(todo:any){

this.todoArray=this.todoArray.filter(t=> t.val !== todo.val)

  }
}
