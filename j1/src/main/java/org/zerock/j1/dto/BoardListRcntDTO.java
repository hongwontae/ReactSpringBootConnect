package org.zerock.j1.dto;

import com.fasterxml.jackson.databind.util.ArrayBuilders.LongBuilder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

// 댓글 갯수 까지 나오는 DTO
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class BoardListRcntDTO {

    private Long bno;
    private String title;
    private String writer;
    private Long replyCount;


}
