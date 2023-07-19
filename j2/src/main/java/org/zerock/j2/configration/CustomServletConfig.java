package org.zerock.j2.configration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.zerock.j2.controller.intercepter.JwtIntercepter;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Configuration
@Log4j2
@EnableWebMvc
@RequiredArgsConstructor
public class CustomServletConfig implements WebMvcConfigurer {

    private final JwtIntercepter jwtIntercepter;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        
        registry.addInterceptor(jwtIntercepter).addPathPatterns("/api/**")
        .excludePathPatterns("/api/member/login");
    }

    
    
}
