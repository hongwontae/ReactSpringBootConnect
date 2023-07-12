package org.zerock.j2.service;

import org.springframework.transaction.annotation.Transactional;
import org.zerock.j2.dto.PageRequestDTO;
import org.zerock.j2.dto.PageResponseDTO;
import org.zerock.j2.dto.ProductListDTO;

@Transactional
public interface ProductService {

    PageResponseDTO<ProductListDTO> list (PageRequestDTO pageRequestDTO);
    
}
