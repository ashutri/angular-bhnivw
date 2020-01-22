import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MemoryService }  from './memory.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProjectsDetailComponent }  from './projects-details/projects-details.component';
import { ProjectsComponent }      from './projects/projects.component';

import { MessageComponent } from './message/message.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksDetailComponent } from './tasks-details/tasks-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      MemoryService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectsComponent,
    ProjectsDetailComponent,  
    MessageComponent,
    TasksComponent,
    TasksDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/