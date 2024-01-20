package javabean;

import static javabean.DBConstants.*;

import java.sql.*;
import java.util.Objects;

public class LogForDB {
    public void log2DB(String status, String send, String receive) {
        // 准备查询
        Connection connection = null;

        String preSts;
        int num = 0;
        try{
            String query = "SELECT DISTINCT Hsts FROM dblogforllm WHERE Hno=(SELECT Max(Hno) FROM dblogforllm)";
            Class.forName(driver);
            connection = DriverManager.getConnection(url, username, password);

            preSts = retrieveData(connection, "status");
            num = Integer.parseInt(retrieveData(connection, "number"));

            if (!(Objects.equals(status, "Chat") && Objects.equals(preSts, "Chat"))){
                num+=1;
            }
            insertData(connection, status, send, receive, num);
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
    }
    public static String retrieveData(Connection connection, String row) throws SQLException {
        if (Objects.equals(row, "status")){
            String query = "SELECT DISTINCT Hsts FROM dblogforllm WHERE Hno=(SELECT Max(Hno) FROM dblogforllm)";
            try (Statement statement = connection.createStatement();
                 ResultSet resultSet = statement.executeQuery(query)) {
                // 处理查询结果
                if (resultSet.next()) {
                    // 根据列名获取数据
                    return resultSet.getString("Hsts");
                }
            }
        } else if (Objects.equals(row, "number")) {
            String query = "SELECT Max(Hno) FROM dblogforllm";
            try (Statement statement = connection.createStatement();
                 ResultSet resultSet = statement.executeQuery(query)) {
                // 处理查询结果
                if (resultSet.next()) {
                    // 根据列名获取数据
                    return ""+resultSet.getInt("Max(Hno)");
                }
            }
        } else {
            String query = "SELECT COUNT(DISTINCT Hno) FROM dblogforllm";
            try (Statement statement = connection.createStatement();
                 ResultSet resultSet = statement.executeQuery(query)) {
                // 处理查询结果
                if (resultSet.next()) {
                    // 根据列名获取数据
                    return ""+resultSet.getInt("COUNT(DISTINCT Hno)");
                }
            }
        }

        return "";
    }

    private static void insertData(Connection connection, String status, String send, String receive, int number) throws SQLException {
        // 执行插入语句
        String insertQuery = "INSERT INTO dblogforllm (Hno, Hsts, Hsend, Hrcv) VALUES (?, ?, ?, ?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(insertQuery)) {
            // 设置插入参数
            preparedStatement.setInt(1, number);
            preparedStatement.setString(2, status);
            preparedStatement.setString(3, send);
            preparedStatement.setString(4, receive);

            preparedStatement.executeUpdate();

        } catch (Exception e) {
            // 发生异常时回滚事务
            connection.rollback();
            System.out.println(e.getMessage());
        }
    }

    public static void main(String[] args) {
        Connection connection = null;
        try{
            Class.forName(driver);
            connection = DriverManager.getConnection(url, username, password);
            insertData(connection, "1", "2", "3", 8);
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
    }
}
