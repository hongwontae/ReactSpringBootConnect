package org.zerock.j2.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.j2.dto.MemberCartDTO;
import org.zerock.j2.service.MemberService;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequiredArgsConstructor
@Log4j2
@CrossOrigin
@RequestMapping("/api/cart")
public class MemberCartController {

    private final MemberService memberService;
    
    @PostMapping("/add")
    public List<MemberCartDTO> add (@RequestBody MemberCartDTO memberCart) {

        log.info("memberCart", memberCart);

        

        return null;
    }


}
