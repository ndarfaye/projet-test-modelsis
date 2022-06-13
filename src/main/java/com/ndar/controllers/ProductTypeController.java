package com.ndar.controllers;

import com.ndar.entities.Product;
import com.ndar.entities.ProductType;
import com.ndar.repositories.ProductTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ProductTypeController {
    @Autowired
    private ProductTypeRepository productTypeRepository;

    @GetMapping("/productType")
    public List<ProductType> GetAllProducts(){
        return productTypeRepository.findAll();
    }

    @PostMapping("/productType")
    public String AddProductType(@Validated @RequestBody ProductType productType){
        Boolean v = productTypeRepository.existsByName(productType.getName());
        if (v == true){
            return "ProductType already exists !";
        }
        else {
            productTypeRepository.save(productType);
            return "ProductType successfully added !";
        }
    }
}
