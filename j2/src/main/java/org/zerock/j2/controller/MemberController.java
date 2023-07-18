package org.zerock.j2.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.util.Map;

import org.springframework.web.bind.annotation.*;
import org.zerock.j2.dto.MemberDTO;
import org.zerock.j2.service.MemberService;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/member/")
@Log4j2
public class MemberController {

    private final MemberService memberService;

    @GetMapping("kakao")
    public Map<String, String> getAuthCode(String code){

        log.info("code..", code);

        return Map.of("result", "success");
    }

    @PostMapping("login")
    public MemberDTO login(@RequestBody MemberDTO memberDTO){

        log.info("Parameter: " + memberDTO);

        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            
            e.printStackTrace();
        }

        MemberDTO result = memberService.login(
                memberDTO.getEmail(),
                memberDTO.getPw()
        );

        log.info("Return: " + result);

        return  result;

    }
}