import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockitemCreateComponent } from './components/stockitem-create/stockitem-create.component';
import { StockitemListComponent } from './components/stockitem-list/stockitem-list.component';
import { StockitemEditComponent } from './components/stockitem-edit/stockitem-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list-stockitem' },
  { path: 'create-stockitem', component: StockitemCreateComponent },
  { path: 'edit-stockitem/:id', component: StockitemEditComponent },
  { path: 'list-stockitem', component: StockitemListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }