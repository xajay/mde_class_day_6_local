import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from './todo';
import 'rxjs/add/operator/map';
import { $ } from 'protractor';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Injectable()
export class TodoService {
    private getAllUrl = 'http://localhost:8080/todo';
    private addUrl = 'http://localhost:8080/new';
    private editUrl = 'http://localhost:8080/edit';
    private deleteUrl = 'http://localhost:8080/delete';

    constructor(private http: Http) {

    }
    getAllTodos(): Observable<any> {
        return this.http.get(this.getAllUrl)
            .map(res => res.json());
    }

    addTodo(todo: Todo): Observable<any> {
        return this.http.post(this.addUrl, todo)
            .map(res => res.text());
    }

    editTodo(todo: Todo): Observable<any> {
        return this.http.put(this.editUrl, todo)
            .map(res => res.text());
    }

    deleteTodo(id: number): Observable<any> {
        return this.http.delete(this.deleteUrl + '/' + id)
            .map(res => res.text());
    }
}
