import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisPipe } from './ellipsis.pipe';
@NgModule({
  declarations: [ EllipsisPipe],
  exports:[EllipsisPipe],
  imports: [
    CommonModule
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EllipsisPipeModule { }
