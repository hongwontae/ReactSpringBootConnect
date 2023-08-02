package org.zerock.j1.service;

import org.springframework.transaction.annotation.Transactional;

import org.zerock.j1.dto.PageResponseDTO;
import org.zerock.j1.dto.TodoDTO;

@Transactional
public interface TodoService {
    //Read Controller로부터 들어온다.
    PageResponseDTO<TodoDTO> getList();
    // Create
    TodoDTO register(TodoDTO dto);
    //Read
    TodoDTO getOne(Long tno);
    // remove
    void remove(Long tno);
    // modify
    void modify(TodoDTO dto);
}
