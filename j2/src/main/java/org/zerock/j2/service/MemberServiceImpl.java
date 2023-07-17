package org.zerock.j2.service;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.zerock.j2.dto.MemberDTO;
import org.zerock.j2.entity.Member;
import org.zerock.j2.repository.MemberRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@RequiredArgsConstructor
@Log4j2
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;

    public static final class MemberLoginException extends RuntimeException{
        public MemberLoginException(String msg){
            super(msg);
        }
    }


    @Override
    public MemberDTO login(String emial, String pw) {

        MemberDTO memberDTO = null;

        try {
            Optional<Member> result = memberRepository.findById(emial);
            Member member = result.orElseThrow();
            if(member.getPw().equals(pw)==false){
                throw new MemberLoginException("PASSWORD FAIL");
            }

            memberDTO = memberDTO.builder().emial(member.getEmial()).pw("비밀번호는 보안입니다.").nickName(member.getNickName())
.build();        

        } catch (Exception e) {
            throw new MemberLoginException(e.getMessage());
        }
        
        return memberDTO;

    }
    
}
