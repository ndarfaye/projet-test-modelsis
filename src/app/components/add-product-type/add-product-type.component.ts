import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductType } from 'src/app/entities/ProductType';
import { ProductTypeService } from 'src/app/services/product-type.service';

@Component({
  selector: 'app-add-product-type',
  templateUrl: './add-product-type.component.html',
  styleUrls: ['./add-product-type.component.css']
})
export class AddProductTypeComponent implements OnInit {
  productType!: ProductType;

  @ViewChild('productTypeForm') productTypeForm!: NgForm;
  constructor(private productTypeService: ProductTypeService, private router: Router) { }

  ngOnInit(): void {
    this.productType = new ProductType();
  }

  addProductType() {
    this.productTypeService.addProduct(this.productType).subscribe(data => {
      console.log(data);
      alert(data);
      this.productType = new ProductType();
      this.productTypeForm.reset();
    }, error => console.log(error)
    );
  }

}
