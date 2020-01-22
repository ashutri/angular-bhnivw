import {forwardRef, Injectable, NgModule} from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@NgModule({providers: [forwardRef(() => MemoryService)]})
export class FooModule {
}
@Injectable()
export class MemoryService implements InMemoryDbService {
  createDb() {
    const projects = [
      { id: 0, name: 'Angular Project',description:'A project is the set of files that comprise a standalone application or a shareable library', duration:'3 months',avatar:'https://a.storyblok.com/f/42908/285x300/208370d792/angularjs-285x300.jpg' },
      { id: 11, name: 'Java Project',description:'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible', duration:'4 months',avatar:'https://cdn.vox-cdn.com/thumbor/giDY0xzU4fKG8MkAl9T_lqTuw-0=/43x0:593x367/920x613/filters:focal(43x0:593x367):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/48667835/dbgxt2rvpd26udoyzcqn.0.0.jpg' },
      { id: 12, name: 'Adding support for bulk upload to the Visitor Registration System (VRS)',description:'This project will add support for bulk upload to the Visitor Registration System (VRS)', duration:'3 months',avatar:'https://img.healthcarepackaging.com/files/base/pmmi/all/image/2018/11/hp_102516_screen_shot_2018_11_06_at_8.19.43_am.png?auto=format&w=500' },
      { id: 13, name: '	Deployment of Windows 10 To Locally Managed Devices',desription:'This project starting is dependant on the production of analysis being delivered as part of DTP022 - Windows 10 Specialist Products', duration:'3 months',avatar:'https://static.digit.in/default/c877768cadd18ecfd8d04b593c19cdc69777eced.jpeg' },
      { id: 14, name: 'Smart City',description:'The objective of the Smart Cities Mission is to promote cities that provide core infrastructure and give a decent quality of life to its citizens, a clean and sustainable environment and application of ‘Smart’ Solutions.', duration:'10 months',avatar:'https://specials-images.forbesimg.com/imageserve/5da9e76ddb40260006206953/960x0.jpg?fit=scale' },
      { id: 15, name: 'Clean India',description:'Clean India Mission was a nation-wide campaign in India for the period 2014 to 2019 that aims to clean up the streets, roads and infrastructure of India cities, towns, urban and rural areas', duration:'12 months',avatar:'https://etimg.etb2bimg.com/thumb/70497826.cms?width=610&resizemode=3' }
    ];
    const tasks = [
      { id: 0, name: 'Activity and resource planning',description:'Planning is instrumental for meeting project deadlines, and many projects fail due to poor planning. First and foremost, good project managers define the project’s scope and determine available resources. Good project managers know how to realistically set time estimates and evaluate the team or teams’ capabilities.', startDate:'01012020',endDate:'01022020' },
      { id: 1, name: 'Organizing and motivating a project team',description:'Good project structure don’t get their teams bogged down with elaborate spreadsheets, long checklists, and whiteboards. Instead, they put their teams front and center.', startDate:'10012020',endDate:'02022020' },
      { id: 2, name: ' Controlling time management',description:'Good project managers know how to set realistic deadlines, and how to communicate them consistently to their teams.', startDate:'01022020',endDate:'01032020' },
      { id: 3, name: 'Ensuring customer satisfaction',description:'In the end, a project is only a success if the customer is happy. One of the key responsibilities of every project manager is to minimize uncertainty, avoid any unwanted surprises and involve their clients in the project as much as is reasonably possible', startDate:'01032020',endDate:'10032020' }
    ];
    return { projects , tasks};

    
  }
}
