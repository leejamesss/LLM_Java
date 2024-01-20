package org.example.chatgpt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static javabean.DBConstants.*;
import static javabean.DBConstants.password;
import static javabean.LogForDB.retrieveData;

@Controller
public class HistoryPageController extends HttpServlet {
    @GetMapping("historyChat/{i}")
    protected void doGet(HttpServletRequest request, HttpServletResponse response, @PathVariable String i)
            throws IOException {
        response.setContentType("text/html;charset=UTF-8");

        PrintWriter out = response.getWriter();

        // Write the HTML content
        out.println("<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>给GPT一点小小的信管震撼</title>\n" +
                "    <link rel=\"stylesheet\" href=\"/lib/element-ui/index.css\">\n" +
                "    <link rel=\"stylesheet\" href=\"/iconfont/iconfont.css\" >\n" +
                "    <style type=\"text/css\">\n" +
                "        .history{\n" +
                "            position: fixed;\n" +
                "            width: 15%;\n" +
                "            height: 100%;\n" +
                "            float: left;\n" +
                "            background: linear-gradient(180deg,rgb(238,233,236) ,rgb(221,221,245));\n" +
                "        }\n" +
                "        .main-body{\n" +
                "            width: 85%;\n" +
                "            height: 100%;\n" +
                "            float: right;\n" +
                "        }\n" +
                "        a{\n" +
                "            text-decoration: none;\n" +
                "        }\n" +
                "\n" +
                "        h2{\n" +
                "            text-align: center;\n" +
                "            margin-top: 30px;\n" +
                "        }\n" +
                "\n" +
                "        body{\n" +
                "            background-color: #f0f0f0;\n" +
                "            background: linear-gradient(90deg, rgb(238, 237, 243) 0%, 0.77381%, rgb(239, 238, 244) 1.54762%, 6.72619%, rgb(239, 236, 243) 11.9048%, 12.381%, rgb(240, 237, 244) 12.8571%, 27.9167%, rgb(242, 236, 244) 42.9762%, 51.9048%, rgb(239, 236, 243) 60.8333%, 61.9643%, rgb(238, 235, 246) 63.0952%, 66.7262%, rgb(235, 234, 249) 70.3571%, 73.2738%, rgb(232, 232, 248) 76.1905%, 77.1429%, rgb(230, 231, 248) 78.0952%, 79.9405%, rgb(228, 229, 249) 81.7857%, 84.1667%, rgb(227, 228, 248) 86.5476%, 87.0238%, rgb(226, 227, 248) 87.5%, 89.3452%, rgb(224, 224, 252) 91.1905%, 95.5952%, rgb(220, 223, 252) 100%);\n" +
                "            margin: 0;\n" +
                "        }\n" +
                "\n" +
                "        #echoCard{\n" +
                "            margin-left: 2.5%;\n" +
                "            width:95%;\n" +
                "            height: auto;\n" +
                "            overflow:auto;\n" +
                "        }\n" +
                "\n" +
                "        #echoBody{\n" +
                "            margin-left: 2.5%;\n" +
                "            width:95%;\n" +
                "            line-height:30px;\n" +
                "        }\n" +
                "\n" +
                "        #inputArea{\n" +
                "            position: fixed;\n" +
                "            padding-top: 20px;\n" +
                "            padding-bottom: 20px;\n" +
                "            width:90%;\n" +
                "            display: flex;\n" +
                "            bottom:0;\n" +
                "            border: none;\n" +
                "            align-items: center;\n" +
                "            justify-content: center;\n" +
                "            background: inherit;\n" +
                "            z-index: 1;\n" +
                "        }\n" +
                "\n" +
                "        #sendBtn{\n" +
                "            margin-left: 10px;\n" +
                "        }\n" +
                "\n" +
                "        .el-col-18{\n" +
                "            background-color: #fff;\n" +
                "            border-radius: 15px;\n" +
                "        }\n" +
                "\n" +
                "        .el-col-18 .el-input__inner{\n" +
                "            border: none;\n" +
                "            border-radius: 15px;\n" +
                "            color: #000;\n" +
                "        }\n" +
                "\n" +
                "        .el-textarea{\n" +
                "            font-size: 16px;\n" +
                "        }\n" +
                "        .el-textarea__inner{\n" +
                "            border: none;\n" +
                "            border-radius: 15px;\n" +
                "        }\n" +
                "\n" +
                "        #echoCard{\n" +
                "            background-color: inherit;\n" +
                "            box-shadow: none;\n" +
                "            border: none;\n" +
                "        }\n" +
                "\n" +
                "\n" +
                "\n" +
                "        .cursor-img{\n" +
                "            height:24px;\n" +
                "            vertical-align: text-bottom;\n" +
                "        }\n" +
                "\n" +
                "        .fl{\n" +
                "            float: left;\n" +
                "        }\n" +
                "        .fr{\n" +
                "            float: right;\n" +
                "        }\n" +
                "        .clearfix:after{\n" +
                "            content: \"\";\n" +
                "            display: block;\n" +
                "            clear: both;\n" +
                "        }\n" +
                "        .nav{\n" +
                "            height: 50px;\n" +
                "        }\n" +
                "        .nav .main{\n" +
                "            margin-left: 70%;\n" +
                "            height: 50px;\n" +
                "            line-height: 50px;\n" +
                "        }\n" +
                "        .nav .main a{\n" +
                "            margin: 0 12px;\n" +
                "        }\n" +
                "        .item{\n" +
                "            font-size: 20px;\n" +
                "            color:#000;\n" +
                "        }\n" +
                "        .inputEcho{\n" +
                "            display: flex;\n" +
                "            flex-direction: column;\n" +
                "            align-items: flex-end;\n" +
                "            margin-bottom: 20px;\n" +
                "        }\n" +
                "        .inputEcho .text,.outputEcho .text{\n" +
                "            border-radius: 10px;\n" +
                "            padding: 10px 20px;\n" +
                "            background-color: #88297b;\n" +
                "            margin-right: 20px;\n" +
                "            margin-left: 20px;\n" +
                "            color: #fff;\n" +
                "            max-width: 42%;\n" +
                "            word-break: break-all;\n" +
                "        }\n" +
                "\n" +
                "        .outputEcho{\n" +
                "            display: flex;\n" +
                "            flex-direction: column;\n" +
                "            align-items: flex-start;\n" +
                "            margin-bottom: 20px;\n" +
                "        }\n" +
                "        .iconfont{\n" +
                "            margin: 20px 20px;\n" +
                "            display: block;\n" +
                "            font-size: 20px;\n" +
                "        }\n" +
                "\n" +
                "        #echoBody{\n" +
                "            margin-bottom: 15%;\n" +
                "        }\n" +
                "\n" +
                "        #submitBtn{\n" +
                "            display: block;\n" +
                "            margin-bottom: 10px;\n" +
                "            margin-right: 20px;\n" +
                "            float: right;\n" +
                "        }\n" +
                "\n" +
                "        .el-upload-list{\n" +
                "            display: flex;\n" +
                "            justify-items: center;\n" +
                "            align-items: center;\n" +
                "        }\n" +
                "\n" +
                "        ul.history-list{\n" +
                "            list-style-image: url('/img/icon-liaotian.png');\n" +
                "        }\n" +
                "\n" +
                "        ul.history-list li {\n" +
                "            margin-bottom: 20px;\n" +
                "        }\n" +
                "        h2{\n" +
                "            font-family: '华文行楷';\n" +
                "            font-weight: 500;\n" +
                "        }\n" +
                "        #aste{\n" +
                "            text-decoration: underline #3a8ee6;\n" +
                "            color: #3a8ee6;\n" +
                "        }\n" +
                "\n" +
                "    </style>\n" +
                "\n" +
                "    <script src=\"/lib/jquery/jquery-3.6.0.min.js\"></script>\n" +
                "    <script src=\"/lib/vue/vue.min.js\"></script>\n" +
                "    <script src=\"/lib/element-ui/index.js\"></script>\n" +
                "</head>\n" +
                "<div class=\"history\">\n" +
                "    <h2>\n" +
                "        历史会话\n" +
                "    </h2>\n" +
                "    <ul class=\"history-list\">\n" +
                "    </ul>\n" +
                "</div>\n" +
                "\n" +
                "<div class=\"main-body\">\n" +
                "    <div class=\"nav clearfix\">\n" +
                "        <div class=\"main fl\">\n" +
                "            <a class=item id=\"aste\" href=\"/ASTE.html\">信息抽取</a>\n" +
                "            <a class=item id=\"translate\" href=\"/translate.html\">翻译</a>\n" +
                "            <a class=item id=\"other\" href=\"\">其他功能</a>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "    <h1 align=\"center\">ChatGpt测试</h1>\n" +
                "    <div id=\"chatWindow\">\n" +
                "        <el-row id=\"outputArea\">\n" +
                "            <el-card id=\"echoCard\">\n" +
                "                <div id=\"echoBody\">\n" +
                "                    <div id=\"echoTxt\">" );


        Connection connection = null;


        try{
            Class.forName(driver);
            connection = DriverManager.getConnection(url, username, password);
            String query = "SELECT * FROM dblogforllm WHERE Hno="+i;
            try (Statement statement = connection.createStatement();
                 ResultSet resultSet = statement.executeQuery(query)) {
                // 处理查询结果
                while (resultSet.next()) {
                    // 根据列名获取数据
                    out.println("<div class=\"inputEcho\">");
                    out.println("<span class=\"text\">"+resultSet.getString("Hsend")+"</span>");
                    out.println("</div>");
                    out.println(resultSet.getString("Hrcv"));
                }
            }

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






        out.println(
                "</div>\n" +
                "                    <img v-if=\"blink\" class=\"cursor-img\" src=\"/img/cursor-text-blink.gif\" v-show=\"cursorImgVisible\">\n" +
                "                    <img v-if=\"!blink\" class=\"cursor-img\" src=\"/img/cursor-text-black.png\" v-show=\"cursorImgVisible\">\n" +
                "                </div>\n" +
                "            </el-card>\n" +
                "        </el-row>\n" +
                "        <el-row id=\"inputArea\">\n" +
                "            <el-col :span=\"18\">\n" +
                "                <el-input id=\"sendTxt\" type=\"textarea\" v-model=\"input\" placeholder=\"请输入内容\" @keyup.native=\"keyUp\" resize=\"none\"  :autosize=\"{minRows:2,maxRows:2}\"></el-input>\n" +
                "                <el-upload ref=\"upload\" action=\"\"  :limit=\"3\" class=\"iconfont\" :on-preview=\"handlePreview\"\n" +
                "                           :on-remove=\"handleRemove\" :before-remove=\"beforeRemove\" :auto-upload=\"false\" :on-exceed=\"handleExceed\"\n" +
                "                           :file-list=\"fileList\" :on-change=\"OnChange\">&#xe727;</el-upload>\n" +
                "                <el-button id=\"submitBtn\" type=\"primary\" @click=\"uploadFiles\" v-show=\"hasFile\">上传</el-button>\n" +
                "            </el-col>\n" +
                "            <el-col :span=\"3\">\n" +
                "                <el-button id=\"sendBtn\" type=\"primary\" :disabled=\"sendBtnDisabled\" @click=\"sendMsg\">发送消息</el-button>\n" +
                "            </el-col>\n" +
                "        </el-row>\n" +
                "    </div>\n" +
                "</div>\n" +
                "\n" +
                "</body>\n" +
                "<script type=\"text/javascript\">\n" +
                "    //vue样式渲染到网页上\n" +
                "    var app = new Vue({\n" +
                "        el: '#chatWindow',\n" +
                "        data: {\n" +
                "            input: '',\n" +
                "            sendBtnDisabled: false,\n" +
                "            cursorImgVisible: false,\n" +
                "            blink: true,\n" +
                "            hasFile: false,\n" +
                "            fileList:[]\n" +
                "        },\n" +
                "        mounted: function(){\n" +
                "\n" +
                "        },\n" +
                "        methods: {\n" +
                "            keyUp: function(event){\n" +
                "                if(event.keyCode==13){\n" +
                "                    this.sendMsg();\n" +
                "                }\n" +
                "            },\n" +
                "            //用于处理文件上传\n" +
                "            handleRemove:function(file,fileList){\n" +
                "                console.log(file,fileList);\n" +
                "                if(fileList.length == 0)this.hasFile = false;\n" +
                "            },\n" +
                "            handlePreview:function(file){\n" +
                "                console.log(file);\n" +
                "            },\n" +
                "            handleExceed:function(files,fileList){\n" +
                "                this.$message.warning(`当前限选3个文件，本次选择了${files.length}个文件，共选择了${files.length+fileList.length}个文件`);\n" +
                "            },\n" +
                "            beforeRemove:function(file,fileList){\n" +
                "                return this.$confirm(`确认移除${file.name}？`)\n" +
                "            },\n" +
                "            //文件列表上传功能未实现，可能需要调整一下\n" +
                "            uploadFiles: function(){\n" +
                "                var newFile = new FormData();\n" +
                "                this.fileList.forEach((item,index) => {\n" +
                "                    newFile.append(\"file\",item.raw)\n" +
                "                });\n" +
                "                this.$refs.upload.submit();\n" +
                "            },\n" +
                "            OnChange:function(file,fileList){\n" +
                "                console.log('OnChange-fileList',file,fileList);\n" +
                "\n" +
                "                this.fileList = fileList;\n" +
                "                if(fileList.length>0)this.hasFile=true;\n" +
                "                else{\n" +
                "                    this.hasFile = false;\n" +
                "                }\n" +
                "            },\n" +
                "\n" +
                "\n" +
                "            sendMsg: function(){\n" +
                "                var that = this;\n" +
                "\n" +
                "                //初始化一些状态\n" +
                "                // $('#outputTxt').html('');\n" +
                "                var sendTxt = $('#sendTxt').val();\n" +
                "                if(sendTxt == '' || sendTxt=='\\n')return;\n" +
                "                $('#echoTxt').append(\"<div class='inputEcho'><span class='text'>\"+sendTxt+\"</span></div>\");\n" +
                "\n" +
                "                $('#sendTxt').val('');\n" +
                "                that.sendBtnDisabled = true;\n" +
                "                that.cursorImgVisible = true;\n" +
                "                //content = \"====================================================================================================================================================================================================================================================================================\";\n" +
                "                // var echoTxt = $('#echoTxt');\n" +
                "                // echoTxt.append(\"<div class='outputEcho'><span class='text'>\"+content+\"</span></div>\");\n" +
                "\n" +
                "                //GPT回复结果应放在echoTxt.append(\"<div class='outputEcho'><span class='text'>\"+content+\"</span></div>\");的content中\n" +
                "\n" +
                "                //发送请求\n" +
                "                $.ajax({\n" +
                "                    type: \"post\",\n" +
                "                    url:\"/chat/sendMsg\",\n" +
                "                    data:{\n" +
                "                        msg: sendTxt\n" +
                "                    },\n" +
                "                    contentType: 'application/x-www-form-urlencoded',\n" +
                "                    success:function(data){\n" +
                "                        var eventSource = new EventSource('/chat/conversation/'+data)\n" +
                "                        eventSource.addEventListener('open', function(e) {\n" +
                "                            console.log(\"EventSource连接成功\");\n" +
                "                        });\n" +
                "\n" +
                "                        var blinkTimeout = null;\n" +
                "                        eventSource.addEventListener(\"message\", function(evt){\n" +
                "                            var data = evt.data;\n" +
                "                            // var json = JSON.parse(data);\n" +
                "                            // var content = data.content ? data.content : '';\n" +
                "                            // content = content.replaceAll('\\n','<br/>');\n" +
                "                            console.log(data)\n" +
                "\n" +
                "                            var echoTxt = $('#echoTxt');\n" +
                "                            echoTxt.append(data);\n" +
                "                            var echoCard = $('#echoCard');\n" +
                "\n" +
                "                            var scrollHeight = echoCard[0].scrollHeight;\n" +
                "                            echoCard.scrollTop(scrollHeight);\n" +
                "\n" +
                "                            //光标不闪烁\n" +
                "                            that.blink = false;\n" +
                "                            window.clearTimeout(blinkTimeout);\n" +
                "\n" +
                "                            //光标200毫秒后开始闪烁\n" +
                "                            blinkTimeout = window.setTimeout(function(){\n" +
                "                                that.blink = true;\n" +
                "                            }, 200)\n" +
                "                        });\n" +
                "                        eventSource.addEventListener('error', function (e) {\n" +
                "                            console.log(\"EventSource连接异常\");\n" +
                "                            if (e.target.readyState === EventSource.CLOSED) {\n" +
                "                                console.log('Disconnected');\n" +
                "                            } else if (e.target.readyState === EventSource.CONNECTING) {\n" +
                "                                console.log('Connecting...');\n" +
                "                            }\n" +
                "                        });\n" +
                "\n" +
                "                        //自定义 EventHandler，在收到 event 字段为 stop 的消息时触发, 在这里我们将SSE关闭\n" +
                "                        eventSource.addEventListener('stop', e => {\n" +
                "                            console.log('EventSource连接结束');\n" +
                "\n" +
                "                            //关闭连接（只有关闭后才不会一直重连）\n" +
                "                            eventSource.close();\n" +
                "\n" +
                "                            //启用发送按钮\n" +
                "                            that.sendBtnDisabled = false;\n" +
                "\n" +
                "                            //闪烁图标不可见\n" +
                "                            that.cursorImgVisible = false;\n" +
                "                        }, false);\n" +
                "                    },\n" +
                "                    error: function(){\n" +
                "                        //启用发送按钮\n" +
                "                        that.sendBtnDisabled = false;\n" +
                "                        //闪烁图标不可见\n" +
                "                        that.cursorImgVisible = false;\n" +
                "                    }\n" +
                "                });\n" +
                "            }\n" +
                "        }\n" +
                "    })\n" +
                "    function createDynamicLinks() {\n" +
                "        // Make an Ajax request to Spring Boot endpoint (replace with your actual endpoint)\n" +
                "        fetch('/history')\n" +
                "            .then(response => response.json())\n" +
                "            .then(data => {\n" +
                "                // Get the dynamicLinks ul element\n" +
                "                const dynamicLinksUl = document.querySelector('.history-list');\n" +
                "\n" +
                "                // Iterate through the numbers received from Spring Boot\n" +
                "                for(let i = 1; i<=data; i++){\n" +
                "                    // Create a new list item and hyperlink\n" +
                "                    const listItem = document.createElement('li');\n" +
                "                    const hyperlink = document.createElement('a');\n" +
                "\n" +
                "                    // Set the href attribute (you can customize the link as needed)\n" +
                "                    hyperlink.href = '/historyChat/'+i;\n" +
                "\n" +
                "                    // Set the link text to the number\n" +
                "                    hyperlink.textContent = '历史 '+i;\n" +
                "\n" +
                "                    // Append the hyperlink to the list item, and the list item to the ul\n" +
                "                    listItem.appendChild(hyperlink);\n" +
                "                    // dynamicLinksUl.appendChild(listItem);\n" +
                "                    dynamicLinksUl.appendChild(listItem);\n" +
                "                }\n" +
                "\n" +
                "            })\n" +
                "            .catch(error => console.error('Error fetching data:', error));\n" +
                "    }\n" +
                "\n" +
                "    // Call the function to create dynamic links when the page loads\n" +
                "    document.addEventListener('DOMContentLoaded', createDynamicLinks);\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "</script>\n" +
                "</html>");


        out.close();
    }
}

