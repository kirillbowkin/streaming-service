package mma.boys.chat.websocket;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

import java.util.Map;

@Slf4j
public class CustomHandshakeInterceptor implements HandshakeInterceptor {
    @Override
    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler,
            Map<String, Object> attributes) throws Exception {
        // String ip = request.getRemoteAddress().toString().split(":")[0].substring(1);
        // attributes.put("ip", ip);
        // log.info("Ip address {} connected to chat", ip);
        return true;
    }

    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler,
            Exception exception) {
    }
}
