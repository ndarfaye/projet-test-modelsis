package com.ndar.controllers;

import com.ndar.entities.Product;
import com.ndar.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/products")
    public List<Product> GetAllProducts(){
        return productRepository.findAll();
    }

    @GetMapping("/products/{id}")
    public Product GetProductById(@PathVariable(value = "id") Long id){
        return productRepository.findById(id).get();
    }

    @PostMapping("/products")
    public String AddProduct(@Validated @RequestBody Product product){
        Boolean v = productRepository.existsByName(product.getName());
        if (v == true){
            return "Product already exists !";
        }
        else {
            product.setDateCreation(new Date());
            productRepository.save(product);
            return "Product successfully added !";
        }
    }


    @PutMapping("/products/{id}")
    public Product UpdateProductById(@PathVariable(value = "id") Long id, @RequestBody Product newproduct){
        Product p = productRepository.findById(id).get();
        p.setName(newproduct.getName());
        p.setProductType(newproduct.getProductType());
        return productRepository.save(p);
    }


}
