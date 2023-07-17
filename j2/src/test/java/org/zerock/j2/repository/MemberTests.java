package org.zerock.j2.repository;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.zerock.j2.entity.Member;

@SpringBootTest
public class MemberTests {

    @Autowired
    MemberRepository memberRepository;

    @Test
    public void testInsert(){
        Member member = Member.builder()
        .emial("User1").pw("1234").nickName("Steven Jerrad")
        .build();

        memberRepository.save(member);
    }

    @Test
    public void MemberTest(){
        String emial = "User1";

        Optional<Member> result = memberRepository.findById(emial);
        Member member = result.orElseThrow();
        System.out.println(member);
    }
    
}
