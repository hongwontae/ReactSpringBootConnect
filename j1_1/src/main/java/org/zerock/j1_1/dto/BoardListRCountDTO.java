package org.zerock.j1_1.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class BoardListRCountDTO {

    private long bno;

    private String title;

    private String writer;

    private int replyCount;
    
}
