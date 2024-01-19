package org.example.chatgpt.service;

import cn.hutool.core.util.StrUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.theokanning.openai.OpenAiApi;
import com.theokanning.openai.service.OpenAiService;
import okhttp3.OkHttpClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.net.InetSocketAddress;
import java.net.Proxy;
import java.time.Duration;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import static com.theokanning.openai.service.OpenAiService.*;
import static org.example.chatgpt.service.ChatService.sendStopEvent;

import com.theokanning.openai.completion.chat.ChatCompletionRequest;
import com.theokanning.openai.completion.chat.ChatMessage;
import com.theokanning.openai.completion.chat.ChatMessageRole;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import retrofit2.Retrofit;

import java.io.IOException;

import javabean.LogForDB;

/**
 * 会话服务
 *
 * @author lijiatao
 * 时间： 2023/12/6
 */
@Service
public class ASTEService {

    private static final Logger LOG = LoggerFactory.getLogger(ChatService.class);
    //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
//    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
//    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
    String token = "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";
    String proxyHost = "127.0.0.1";
    int proxyPort = 7890;
    String prompt_extract = "属性情感三元组抽取（Aspect Sentiment Triplet Extraction ，ASTE）任务是在AAAI 2020里被提出的一个新任务，被划为属性级情感分析（Aspect-based sentiment analysis ，ABSA）任务的一个子任务。ASTE的定义是抽取出其中包含的三元组<属性，情感，观点>，其目的是从句子中获得全面的信息，用于情感分析。在这里，属性(aspect)指评价的对象，情感(sentiment)是指对象在上下文中的整体情感，一般包括正向，中性，负向和冲突(conflict)，观点（opinion）则是评论对象时用到的描述词。比如，对于一个句子“这盘空心菜很好吃，但是不好看\"，ASTE则会抽取出两个三元组：<空心菜，冲突，好吃> 和 <空心菜，冲突，不好看>。" +
            "现在请你执行三元组抽取任务：给定一段文本，抽取其中的三元组。输出的格式为" +
            "属性-情感-观点" +
            "请严格遵循格式，并除此以外不要输出其它任何内容。文本如下：";

    @Async
    public void asteCompletion(String prompt, SseEmitter sseEmitter) throws IOException {
        LogForDB logForDB = new LogForDB();
        LOG.info("发送消息：" + prompt);
        String prompt1 = prompt_extract + prompt;
        final List<ChatMessage> messages = new ArrayList<>();
        final ChatMessage systemMessage = new ChatMessage(ChatMessageRole.SYSTEM.value(), prompt1);
        messages.add(systemMessage);
        ChatCompletionRequest chatCompletionRequest = ChatCompletionRequest
                .builder()
                .model("gpt-3.5-turbo")
                .messages(messages)
                .n(1)
                .maxTokens(500)
                .logitBias(new HashMap<>())
                .build();


        //完整对话
        StringBuilder receiveMsgBuilder = new StringBuilder();
        OpenAiService service = buildOpenAiService(token, proxyHost, proxyPort);
        service.createChatCompletion(chatCompletionRequest)
                .getChoices()
                .forEach(x-> {
                   try {
                        sseEmitter.send(x.getMessage().getContent());
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                    String content = x.getMessage().getContent();
                    content = content == null ? StrUtil.EMPTY : content;
                    receiveMsgBuilder.append(content);
                });
        LOG.info("收到的完整消息：" + receiveMsgBuilder);
        sendStopEvent(sseEmitter);
        service.shutdownExecutor();
        LOG.info("连接结束");
        logForDB.log2DB("ASTE", prompt, String.valueOf(receiveMsgBuilder));
    }

    /**
     * 构建OpenAiService
     *
     * @param token     API_KEY
     * @param proxyHost 代理域名
     * @param proxyPort 代理端口号
     * @return OpenAiService
     */
    private OpenAiService buildOpenAiService(String token, String proxyHost, int proxyPort) {
        //构建HTTP代理
        Proxy proxy = null;
        if (StrUtil.isNotBlank(proxyHost)) {
            proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress(proxyHost, proxyPort));
        }
        //构建HTTP客户端
        OkHttpClient client = defaultClient(token, Duration.of(60, ChronoUnit.SECONDS))
                .newBuilder()
                .proxy(proxy)
                .build();
        ObjectMapper mapper = defaultObjectMapper();
        Retrofit retrofit = defaultRetrofit(client, mapper);
        OpenAiApi api = retrofit.create(OpenAiApi.class);
        return new OpenAiService(api, client.dispatcher().executorService());
    }
}
