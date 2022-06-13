import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from "./components/add-product/add-product.component";
import { AddProductTypeComponent } from "./components/add-product-type/add-product-type.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { UpdateProductComponent } from "./components/update-product/update-product.component";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    AddProductTypeComponent,
    UpdateProductComponent,
    ProductListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
