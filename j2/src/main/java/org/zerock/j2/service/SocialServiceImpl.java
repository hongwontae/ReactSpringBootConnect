package org.zerock.j2.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class SocialServiceImpl implements SocialService{

    @Value("${org.zerock.kakao.auth_token_url}")
    private String auth_token_url;

    @Value("${org.zerock.kakao.rest_key}")
    private String rest_key;

    @Value("${org.zerock.kakao.redirect_url}")
    private String redirect_url;

    @Value("${org.zerock.kakao.get_user}")
    private String get_user;

    @Override
    public String getKakaoEmail(String authCode) {
        log.info("============================================");

        log.info(authCode);
        log.info(auth_token_url);
        log.info(rest_key);
        log.info(redirect_url);
        log.info(get_user);

        return null;
    }
    
}
