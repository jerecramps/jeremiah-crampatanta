import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from '../pages/pages.component'
import { BlogContentComponent } from '../re-usable-components/blog-content/blog-content.component';
import { EllipsisPipeModule } from '../utilities/pipes/ellipsis.pipe.module';
import { LoadingScreenComponent } from '../shared-content/loading-screen/loading-screen.component';

@NgModule({
  declarations: [PagesComponent, BlogContentComponent],
  imports: [
    CommonModule,
    EllipsisPipeModule
  ],
  exports: [PagesComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class PagesModule { }
