package org.example.chatgpt.controller;

import cn.hutool.core.util.IdUtil;
import org.example.chatgpt.service.ASTEService;
import org.example.chatgpt.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 会话控制器
 *
 * @author lijiatao
 *
 */
@Controller
@RequestMapping("/aste")
public class ASTEController {

    /**
     * 暂存消息（由于前端EventSource对象仅支持Get请求，故消息通过POST发送到后端后进行中转）
     */
    Map<String, String> msgMap = new ConcurrentHashMap<>();

    @Autowired
    ASTEService asteService;

    /**
     * 发送消息
     *
     * @param msg 消息
     * @return 消息ID
     */
    @ResponseBody
    @PostMapping("/sendMsg")
    public String sendMsg(String msg) {
        String msgId = IdUtil.simpleUUID();
        msgMap.put(msgId, msg);
        return msgId;
    }

    /**
     * 对话
     *
     * @param msgId 消息ID
     * @return SseEmitter
     */
    @GetMapping(value = "/conversation/{msgId}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public SseEmitter conversation(@PathVariable("msgId") String msgId) throws IOException {
        SseEmitter sseEmitter = new SseEmitter();
        String msg = msgMap.remove(msgId);

        //调用会话服务
        asteService.asteCompletion(msg, sseEmitter);

        //及时返回SseEmitter对象
        return sseEmitter;
    }
}
