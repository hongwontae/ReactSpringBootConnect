package org.zerock.j1_1.service;

import org.springframework.transaction.annotation.Transactional;
import org.zerock.j1_1.dto.BoardListRCountDTO;
import org.zerock.j1_1.dto.PageRequestDTO;
import org.zerock.j1_1.dto.PageResponseDTO;

@Transactional
public interface BoardServie {

    PageResponseDTO<BoardListRCountDTO> listRcnt (PageRequestDTO pageRequestDTO);
    
}
