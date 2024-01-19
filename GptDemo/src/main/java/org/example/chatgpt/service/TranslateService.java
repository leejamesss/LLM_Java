package org.example.chatgpt.service;

import cn.hutool.core.util.StrUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.theokanning.openai.OpenAiApi;
import com.theokanning.openai.service.OpenAiService;
import javabean.LogForDB;
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

/**
 * 会话服务
 *
 * @author lijiatao
 * 时间： 2023/12/6
 */
@Service
public class TranslateService {

    private static final Logger LOG = LoggerFactory.getLogger(ChatService.class);
    //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
//    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
//    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
    String token = "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";
    String proxyHost = "127.0.0.1";
    int proxyPort = 7890;
    String prompt_extract = "请将下列文本进行中英文互译，若给出的文本为中文，则输出翻译后的英文；若给出文本为英文，则输出翻译后的中文。除了输出翻译后的文本，绝对不要输出其它任何内容。"+
            "需要翻译的文本如下：" +
            "“";

    @Async
    public void translateCompletion(String prompt, SseEmitter sseEmitter) throws IOException {
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
        logForDB.log2DB("Translated", prompt, String.valueOf(receiveMsgBuilder));
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
