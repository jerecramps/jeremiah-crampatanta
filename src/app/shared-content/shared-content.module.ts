import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared-content/navbar/navbar.component';
import { FooterComponent } from '../shared-content/footer/footer.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

@NgModule({
  declarations: [NavbarComponent,
                FooterComponent,LoadingScreenComponent
                ],
  imports: [
    CommonModule
  ],
  exports:  [NavbarComponent,
            FooterComponent,LoadingScreenComponent]
})
export class SharedContentModule { }
