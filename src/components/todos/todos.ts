import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the TodosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'todos',
    templateUrl: 'todos.html'
})
export class TodosComponent {

  todos: any;
  filter: string = null;

  constructor(public http: HttpClient) {
    this.http.get("https://jsonplaceholder.typicode.com/todos")
        .subscribe(data => {
          this.todos = data;
        }, error => {
          console.log(error);
        });
  }

}
