import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { SearchFilterPipe } from './shared/pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableWorkersComponent,
    AddformWorkerComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, TextMaskModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
