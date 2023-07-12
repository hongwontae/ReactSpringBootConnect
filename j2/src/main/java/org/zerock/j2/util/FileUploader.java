package org.zerock.j2.util;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import lombok.extern.log4j.Log4j2;
import net.coobird.thumbnailator.Thumbnailator;

@Component
@Log4j2
public class FileUploader {

    public static class UploadException extends RuntimeException {

        public UploadException(String msg){
            super(msg);
        }

    }
    
    @Value("${org.zerock.upload.path}")
    private String path;

    public List<String> uploadFiles(List<MultipartFile> files, boolean makeThumbnail){

        if(files == null  || files.size() == 0){
            throw new UploadException("No File");
        }

        List<String> uploadFileNames =  new ArrayList<>(); //배열 형식의 리스트(스트링)으로 uploadFileNames을 생성한다.
        
        log.info("path: " + path); // value 패스는

        log.info(files); // 들어오는 파일 log

        //loop //why? => 파일 하나만이 아니라 다 오게 하려고 그래서 enhanced for문을 사용하여 가져온다.
        for (MultipartFile mFile : files) {
            
            String originalFileName = mFile.getOriginalFilename(); // 파일의 원래이름을 반환한다. string
            log.info(originalFileName);
            String uuid = UUID.randomUUID().toString(); //uuid 생성 string
            log.info(uuid);

            String saveFileName = uuid+"_"+originalFileName; // 일반 파일의 형식을 만들어준다.
            
            File saveFile = new File(path,saveFileName ); // 경로를 가지고 있는 파일 객체 생성 saveFileName=> String

            try ( InputStream in = mFile.getInputStream();
                  OutputStream out = new FileOutputStream(saveFile);  
             ) {

                FileCopyUtils.copy(in, out);

                //썸네일 필요하다면
                if(makeThumbnail){
                    File thumbOutFile = new File(path, "s_"+saveFileName);

                    Thumbnailator.createThumbnail(saveFile, thumbOutFile, 200, 200);

                }

                
                uploadFileNames.add(saveFileName);
                
            } catch (Exception e) {
                throw new UploadException("Upload Fail:" + e.getMessage() );
            }

        }

        return uploadFileNames;
    }

}