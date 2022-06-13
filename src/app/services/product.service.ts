import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../entities/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.ApiUrl + "products";
  constructor(private http: HttpClient) { }

  GetProductsList(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  GetProductByID(id: number): Observable<any>{
    return this.http.get(this.baseUrl + "/" + id);
  }

  addProduct(product: Product): Observable<any>{
    return this.http.post(this.baseUrl, product, { responseType: "text" });
  }

  UpdateProduct(id: number, productUpdate: Product): Observable<any>{
    return this.http.put(this.baseUrl+ "/" + id, productUpdate);
  }
}
