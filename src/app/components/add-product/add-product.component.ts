import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/entities/Product';
import { ProductType } from 'src/app/entities/ProductType';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!: Product;
  productTypeList!: ProductType[];
  @ViewChild('productForm') productForm!: NgForm;
  constructor(private router: Router, private productService: ProductService,
  private productTypeService: ProductTypeService) { }

  ngOnInit(): void {
    this.product = new Product();
    this.productTypeList = [];
    this.getAllProductType();
  }

  getAllProductType() {
    this.productTypeService.GetProductTypeList().subscribe(data => {
      console.log(data);
      this.productTypeList = data;
      
    }, error => console.log(error)
    );
  }

  AddProduct() {
    this.productService.addProduct(this.product).subscribe(data => {
      console.log(data);
      alert(data);
      this.product = new Product();
      this.productForm.reset();
    }, error => console.log(error)
    );
  }

}
