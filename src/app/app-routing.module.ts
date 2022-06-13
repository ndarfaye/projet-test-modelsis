import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductTypeComponent } from './components/add-product-type/add-product-type.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  //{ path: '', redirectTo: 'index.html', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path :'index.html', component:ProductListComponent},
  {path :'update-product/:id', component:UpdateProductComponent},
  {path :'add-product' , component:AddProductComponent},
  {path :'login' , component:LoginComponent},

  {path : 'add-productType', component:AddProductTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
