package org.zerock.j1_1.dto;

import java.util.List;

import org.springframework.data.domain.PageRequest;

import lombok.Data;

@Data
public class PageResponseDTO<E> {
  
  private List<E> dtoList;

  private long totalCount;

  private List<Integer> pageNums;

  private boolean prev, next;

  private PageRequestDTO requestDTO;

  private int page, size, start, end;

  public PageResponseDTO(List<E> dtoList, long totalCount, PageRequestDTO pageRequestDTO){
    
    this.dtoList = dtoList;
    this.totalCount = totalCount;
    this.requestDTO = pageRequestDTO;

    this.page = pageRequestDTO.getPage();
    this.size = pageRequestDTO.getSize();

    int tempEnd =  (int)Math.ceil(page/10.0)*10;
    this.start = tempEnd-9;

    this.prev = this.start != 1;

    //20 170
    int realInt = (int)Math.ceil(totalCount/(double)size);

    this.end = tempEnd<realInt ? realInt : tempEnd;

    this.next = (this.end*this.size) < totalCount;
     

  }


  
}