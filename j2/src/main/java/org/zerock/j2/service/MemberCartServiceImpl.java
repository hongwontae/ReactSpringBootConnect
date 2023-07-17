package org.zerock.j2.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.zerock.j2.dto.MemberCartDTO;
import org.zerock.j2.repository.MemberCartRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberCartServiceImpl implements MemberCartService {

    private final MemberCartRepository memberCartRepository;

    @Override
    public List<MemberCartDTO> addCart(MemberCartDTO memberCartDTO) {
        return null;
    }
    
}
