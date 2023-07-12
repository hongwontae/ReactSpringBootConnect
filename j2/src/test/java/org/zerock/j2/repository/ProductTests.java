package org.zerock.j2.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import org.zerock.j2.entity.Product;

import java.util.Optional;
import java.util.UUID;
@SpringBootTest
public class ProductTests {
 
    @Autowired
    ProductRepository repo;


    @Test
    public void testInsert(){
        
        Product product = Product.builder()
        .pname("Test")
        .pdesc("Test")
        .writer("user00")
        .price(4000)
        .build();

        product.addImage(UUID.randomUUID().toString()+ "_aaa.jpg");
        product.addImage(UUID.randomUUID().toString()+"_bbb.jpg0");
        product.addImage(UUID.randomUUID().toString()+"_ccc.jpg");

        repo.save(product);

    }

    @Test
    @Transactional
    public void testRead1(){
        Optional<Product> result = repo.findById(1L);

        Product product = result.orElseThrow();
        System.out.println(product);
        System.out.println("----------------------------------");
        System.out.println(product.getImages());

    }

    @Test
    public void testRead2(){
        Product product = repo.selectOne(1L);
        System.out.println(product);
        System.out.println("-------------------------");
        System.out.println(product.getImages());
    }

    @Test
    public void removeTest(){
        repo.deleteById(1L);
    }

    @Test
    public void testUpdate(){
        Product product = repo.selectOne(2L);
        
    }
}