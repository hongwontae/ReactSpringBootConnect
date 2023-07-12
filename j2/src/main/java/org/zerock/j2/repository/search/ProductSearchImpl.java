package org.zerock.j2.repository.search;


import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.zerock.j2.dto.PageRequestDTO;
import org.zerock.j2.dto.PageResponseDTO;
import org.zerock.j2.dto.ProductListDTO;
import org.zerock.j2.entity.Product;
import org.zerock.j2.entity.QProduct;
import org.zerock.j2.entity.QProductImage;

import com.querydsl.jpa.JPQLQuery;

import lombok.extern.log4j.Log4j2;

@Log4j2
public class ProductSearchImpl extends QuerydslRepositorySupport implements ProductSearch{

    public ProductSearchImpl() {
        super(Product.class);
    }

    @Override
    public PageResponseDTO<ProductListDTO> list(PageRequestDTO pageRequestDTO) {

        QProduct product = QProduct.product;
        QProductImage productImage = QProductImage.productImage;

        JPQLQuery<Product> query = from(product);
        query.leftJoin(product.images, productImage);

        query.where(productImage.ord.eq(0));

        int pageNum = pageRequestDTO.getPage() <= 0? 0: pageRequestDTO.getPage() -1;
        Pageable pageable = 
         PageRequest.of( pageNum, pageRequestDTO.getSize(),
         Sort.by("pno").descending()  );

        this.getQuerydsl().applyPagination(pageable, query);

        

        log.info(query.fetch());

        return null;
    }
    

}