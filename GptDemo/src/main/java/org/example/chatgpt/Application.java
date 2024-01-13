package org.example.chatgpt;

import cn.hutool.core.lang.copier.SrcToDestCopier;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 项目启动
 *
 * @author lijiatao
 */
@RestController
//@EnableAutoConfiguration
@EnableAsync
@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class, DataSourceTransactionManagerAutoConfiguration.class })
public class Application {
    @RequestMapping("/")
    String home(){
        return "Hello World!";
    }
    public static void main(String[] args) {

        SpringApplication.run(Application.class, args);
    }
}
