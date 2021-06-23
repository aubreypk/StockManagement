import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StockitemCreateComponent } from './components/stockitem-create/stockitem-create.component';
import { StockitemEditComponent } from './components/stockitem-edit/stockitem-edit.component';
import { StockitemListComponent } from './components/stockitem-list/stockitem-list.component';
import { ApiService } from './service/api.service';

@NgModule({
  declarations: [
    AppComponent,
    StockitemCreateComponent,
    StockitemEditComponent,
    StockitemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
