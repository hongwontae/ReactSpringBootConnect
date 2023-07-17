package org.zerock.j2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.zerock.j2.entity.MemberCart;

public interface MemberCartRepository extends JpaRepository <MemberCart, Long> {
    
    @Query("select mc from MemberCart mc where mc.email = :eamil order by mc.cno asc")
    List<MemberCart> selectCart(@Param("email") String email);

}
