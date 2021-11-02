import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderMasterComponent } from './components/order-master/order-master.component';
import { ProductDetalisComponent } from './components/product-detalis/product-detalis.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Products', component: OrderMasterComponent },
  { path: 'ProductDetalis/:pID', component: ProductDetalisComponent }, //accepts aprameter called pID
  { path: '', redirectTo: '/Home', pathMatch: 'full' }, //defult path
  { path: '**', component: NotFoundComponent },  //wild card path





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
