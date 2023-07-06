package org.zerock.j1_1.service;

import org.springframework.stereotype.Service;
import org.zerock.j1_1.dto.BoardListRCountDTO;
import org.zerock.j1_1.dto.PageRequestDTO;
import org.zerock.j1_1.dto.PageResponseDTO;
import org.zerock.j1_1.repository.BoardRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
@RequiredArgsConstructor
public class BoardServiceImple implements BoardServie {
    
    private final BoardRepository boardRepository;

    @Override
    public PageResponseDTO<BoardListRCountDTO> listRcnt(PageRequestDTO pageRequestDTO) {


        log.info("-----------------------------------");
        log.info(pageRequestDTO);

        return boardRepository.searchDTORcnt(pageRequestDTO);

    }

}
