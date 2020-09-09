import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from '../pages/pages.component'
import { BlogContentComponent } from '../re-usable-components/blog-content/blog-content.component';
import { EllipsisPipeModule } from '../utilities/pipes/ellipsis.pipe.module';
import { LoadingScreenComponent } from '../shared-content/loading-screen/loading-screen.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { SharedContentModule } from '../shared-content/shared-content.module';
import { GenericContentComponent } from '../re-usable-components/generic-content/generic-content.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PagesComponent, BlogContentComponent, ProjectsComponent, AboutComponent, GenericContentComponent],
  imports: [
    CommonModule,
    EllipsisPipeModule, 
    SharedContentModule,
    RouterModule
  ],
  exports: [PagesComponent],
 
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class PagesModule { }
