package org.example.chatgpt;

import cn.hutool.core.lang.copier.SrcToDestCopier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.web.ServerProperties;
import org.springframework.boot.web.context.WebServerApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.awt.Desktop;
import java.net.URI;

/**
 * 项目启动
 *
 * @author lijiatao
 */
@RestController
// @EnableAutoConfiguration
@EnableAsync
@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class,
        DataSourceTransactionManagerAutoConfiguration.class })
public class Application {
    @RequestMapping("/")
    String home() {
        return "Hello World!";
    }

    public static void main(String[] args) {

        SpringApplication app = new SpringApplication(Application.class);
        ConfigurableApplicationContext context = app.run(args);
        int port = ((WebServerApplicationContext) context).getWebServer().getPort();
        System.out.println(port);

        // Open the browser
        if (Desktop.isDesktopSupported() && Desktop.getDesktop().isSupported(Desktop.Action.BROWSE)) {
            try {
                Desktop.getDesktop().browse(new URI("http://localhost:" + port + "/chat.html"));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

    }

    @Autowired
    private ServerProperties serverProperties;

    public void printPort() {
        System.out.println(serverProperties.getPort());
    }

}
