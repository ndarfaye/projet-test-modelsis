package com.ndar;

import com.ndar.entities.Product;
import com.ndar.entities.ProductType;
import com.ndar.repositories.ProductRepository;
import com.ndar.repositories.ProductTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

@SpringBootApplication
public class ProjetTestSpringbootApplication implements CommandLineRunner {
	@Autowired
    private ProductRepository productRepository;
	@Autowired
	private ProductTypeRepository productTypeRepository;
	public static void main(String[] args) {
		SpringApplication.run(ProjetTestSpringbootApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		productRepository.save(new Product(null,"Ordinateur",new Date(),"iphone"));
		productRepository.save(new Product(null,"Ordinateur",new Date(),"iphone"));
		productRepository.save(new Product(null,"Ordinateur",new Date(),"iphone"));

		productTypeRepository.save(new ProductType(null,"Ordinateur"));
        productTypeRepository.save(new ProductType(null,"Smartphone"));
        productTypeRepository.save(new ProductType(null,"androide"));
	}
}
