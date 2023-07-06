package org.zerock.j1_1.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.zerock.j1_1.dto.BoardListRcntDTO;
import org.zerock.j1_1.dto.PageRequestDTO;
import org.zerock.j1_1.dto.PageResponseDTO;
import org.zerock.j1_1.repository.BoardRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
@RequiredArgsConstructor
public class BoardServiceImple implements BoardService{
    
    private final BoardRepository boardRepository;
    // 등록작업을 위해서 사용한다.
    private final ModelMapper modelMapper;

    @Override
    public PageResponseDTO<BoardListRcntDTO> listRcnt(PageRequestDTO pageRequestDTO) {
        
        log.info("--------------------------");
        log.info(pageRequestDTO);

        return boardRepository.searchDTORcnt(pageRequestDTO);

    }
}