package org.example.chatgpt.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import static javabean.DBConstants.*;
import static javabean.DBConstants.password;
import static javabean.LogForDB.retrieveData;


@RestController
class HistoryController {
    @GetMapping("/history")
    public int getNumbers() {
        Connection connection = null;

        int num = 0;

        try{
            Class.forName(driver);
            connection = DriverManager.getConnection(url, username, password);

            num = Integer.parseInt(retrieveData(connection, "history"));

        }catch (Exception e){
            //输出报错信息
            System.out.println(e.getMessage());
        } finally {
            // 关闭数据库连接
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException e) {
                    System.out.println(e.getMessage());
                }
            }
        }

        return num;
    }
}
