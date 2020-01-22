import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects: Project[] = [];
  constructor(private projService: ProjectService) {
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projService.getProjects()
      .subscribe(projects => this.projects = projects.slice(1, 5));
  }
}
