import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/entities/Product';
import { ProductType } from 'src/app/entities/ProductType';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productUpdate!: Product;
  id!: number;
  productTypeList!: ProductType[];

  @ViewChild('productUForm') productUForm!: NgForm;
  constructor(private route: ActivatedRoute, private productService: ProductService,
  private productTypeService: ProductTypeService) { }

  ngOnInit(): void {
    this.productUpdate = new Product();
    this.productTypeList = [];
    this.id = this.route.snapshot.params['id'];
    this.getAllProductType();
    this.getProductById();
  }

  getAllProductType() {
    this.productTypeService.GetProductTypeList().subscribe(data => {
      console.log(data);
      this.productTypeList = data;
      
    }, error => console.log(error)
    );
  }

  getProductById() {
    this.productService.GetProductByID(this.id).subscribe(data => {
      console.log(data);
      this.productUpdate = data;
    }, error => console.log(error));
  }

  updateProduct() {
    this.productService.UpdateProduct(this.productUpdate.id, this.productUpdate).subscribe(data => {
      console.log(data);
      alert("Product updated successfully !!!");
      this.productUpdate = new Product();
      this.productUForm.reset();
    }, error => console.log(error));
  }

  



}
