package org.zerock.j2.service;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;
import org.zerock.j2.dto.MemberCartDTO;
import org.zerock.j2.entity.MemberCart;

@Transactional
public interface MemberCartService {

    List<MemberCartDTO> addCart(MemberCartDTO memberCartDTO);

    default MemberCart dtoToEntity(MemberCartDTO memberCartDTO) {
        MemberCart cart = MemberCart.builder().cno(memberCartDTO.getCno()).email(memberCartDTO.getEmail())
                .pno(memberCartDTO.getPno()).build();
        return cart;
    }

    default MemberCartDTO cartToEntity(MemberCart memberCart) {
        MemberCartDTO dto = MemberCartDTO.builder().cno(memberCart.getCno()).email(memberCart.getEmail())
                .pno(memberCart.getPno())
                .build();

        return dto;
    }

}
