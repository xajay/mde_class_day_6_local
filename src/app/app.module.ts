import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HttpModule } from '@angular/http';
import { TodoService } from './todo-data/todo.service';
import { AlertsModule } from 'angular-alert-module';


@NgModule({
    declarations: [
        AppComponent,
        TodoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
