import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/appComponent/app.component';
import { MltipleSearchFilterPipe } from './pipes/multipleSearchFilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MltipleSearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  
