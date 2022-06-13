import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductType } from '../entities/ProductType';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  private baseUrl = environment.ApiUrl + "productType";
  constructor(private http: HttpClient) { }

  GetProductTypeList(): Observable<any>{
    return this.http.get(this.baseUrl);
  }


  addProduct(productType: ProductType): Observable<any>{
    return this.http.post(this.baseUrl, productType, { responseType: "text" });
  }
}
