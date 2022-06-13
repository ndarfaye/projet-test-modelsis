import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/entities/Product';
import { ProductService } from 'src/app/services/product.service';
import {AuthentificationService} from "../../services/authentification.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList!: Product[];
  constructor(private productService: ProductService, private router: Router,
              public authService:AuthentificationService) { }

  ngOnInit(): void {
    this.productList = [];
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.GetProductsList().subscribe(data => {
      console.log(data);
      this.productList = data;

    }, error => console.log(error));
  }

  updateProduct(id: number) {
    this.router.navigate(["update-product", id]);
  }

  isAdmin(){
    return this.authService.isAdmin();
  }

}
