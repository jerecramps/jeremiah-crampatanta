import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedContentModule } from './shared-content/shared-content.module';
import { PagesModule } from './pages/pages.module';
import { BlogService } from './services/blog.service';
import { ApiCallsService } from './services/api-calls/api-calls.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedContentModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [BlogService, ApiCallsService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
  
})
export class AppModule { }
