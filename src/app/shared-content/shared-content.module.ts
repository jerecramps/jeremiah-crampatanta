import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared-content/navbar/navbar.component';
import { FooterComponent } from '../shared-content/footer/footer.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [NavbarComponent,
                FooterComponent,LoadingScreenComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:  [NavbarComponent,
            FooterComponent,LoadingScreenComponent, HeaderComponent]
})
export class SharedContentModule { }
